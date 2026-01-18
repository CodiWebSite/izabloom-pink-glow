import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string | null;
    description: string | null;
  };
}

interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        id,
        product_id,
        quantity,
        product:products(id, name, price, image_url, description)
      `)
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching cart:", error);
    } else {
      setCartItems((data as unknown as CartItem[]) || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const addToCart = async (productId: string) => {
    if (!user) {
      toast({
        title: "Trebuie să fii conectat",
        description: "Te rugăm să te conectezi pentru a adăuga produse în coș.",
        variant: "destructive"
      });
      return;
    }

    const existingItem = cartItems.find((item) => item.product_id === productId);

    if (existingItem) {
      await updateQuantity(productId, existingItem.quantity + 1);
    } else {
      const { error } = await supabase
        .from("cart_items")
        .insert({ user_id: user.id, product_id: productId, quantity: 1 });

      if (error) {
        toast({
          title: "Eroare",
          description: "Nu am putut adăuga produsul în coș.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Produs adăugat",
          description: "Produsul a fost adăugat în coș."
        });
        await fetchCart();
      }
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", user.id)
      .eq("product_id", productId);

    if (error) {
      toast({
        title: "Eroare",
        description: "Nu am putut șterge produsul din coș.",
        variant: "destructive"
      });
    } else {
      await fetchCart();
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user) return;

    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("user_id", user.id)
      .eq("product_id", productId);

    if (error) {
      toast({
        title: "Eroare",
        description: "Nu am putut actualiza cantitatea.",
        variant: "destructive"
      });
    } else {
      await fetchCart();
    }
  };

  const clearCart = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      toast({
        title: "Eroare",
        description: "Nu am putut goli coșul.",
        variant: "destructive"
      });
    } else {
      setCartItems([]);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0
  );

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
