-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  in_stock BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on products (public read)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products" 
ON public.products FOR SELECT 
USING (true);

-- Create cart_items table
CREATE TABLE public.cart_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS on cart_items
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own cart" 
ON public.cart_items FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their cart" 
ON public.cart_items FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their cart" 
ON public.cart_items FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can remove from their cart" 
ON public.cart_items FOR DELETE 
USING (auth.uid() = user_id);

-- Create wishlist_items table
CREATE TABLE public.wishlist_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS on wishlist_items
ALTER TABLE public.wishlist_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own wishlist" 
ON public.wishlist_items FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their wishlist" 
ON public.wishlist_items FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove from their wishlist" 
ON public.wishlist_items FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for profiles
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Insert sample products
INSERT INTO public.products (name, description, price, image_url, category) VALUES
-- Lumânări Mici
('Lumânare Mini Roz', 'Lumânare decorativă mică în nuanțe de roz, perfectă pentru atmosferă romantică', 25.00, '/placeholder.svg', 'lumanari-mici'),
('Lumânare Parfumată Lavandă', 'Lumânare mică cu parfum de lavandă naturală', 35.00, '/placeholder.svg', 'lumanari-mici'),
('Set 3 Lumânări Tea Light', 'Set de 3 lumânări tea light în culori pastelate', 20.00, '/placeholder.svg', 'lumanari-mici'),
('Lumânare Votivă Vanilie', 'Lumânare votivă cu esență de vanilie', 28.00, '/placeholder.svg', 'lumanari-mici'),
-- Lumânări Mari
('Lumânare Stâlp Elegantă', 'Lumânare mare tip stâlp, sculptată manual', 85.00, '/placeholder.svg', 'lumanari-mari'),
('Lumânare Decorativă XL', 'Lumânare mare decorativă pentru evenimente speciale', 120.00, '/placeholder.svg', 'lumanari-mari'),
('Lumânare Pillar Romantic', 'Lumânare pillar în nuanțe de roz și alb', 95.00, '/placeholder.svg', 'lumanari-mari'),
('Lumânare Sculptată Flori', 'Lumânare mare cu sculptură florală', 150.00, '/placeholder.svg', 'lumanari-mari'),
-- Lumânări Delicioase
('Lumânare Ciocolată', 'Lumânare parfumată cu aromă de ciocolată', 45.00, '/placeholder.svg', 'lumanari-delicioase'),
('Lumânare Prăjitură cu Mere', 'Parfum de plăcintă cu mere proaspăt coaptă', 42.00, '/placeholder.svg', 'lumanari-delicioase'),
('Lumânare Caramel', 'Aromă dulce de caramel sărat', 40.00, '/placeholder.svg', 'lumanari-delicioase'),
('Lumânare Cafea', 'Parfum energizant de cafea proaspăt prăjită', 38.00, '/placeholder.svg', 'lumanari-delicioase'),
-- Lumânări de Servit
('Lumânare Botez Albă', 'Lumânare elegantă pentru ceremonia de botez', 180.00, '/placeholder.svg', 'lumanari-servit'),
('Lumânare Nuntă Clasică', 'Lumânare tradițională pentru cununia religioasă', 250.00, '/placeholder.svg', 'lumanari-servit'),
('Lumânare Botez Personalizată', 'Lumânare de botez cu numele copilului', 220.00, '/placeholder.svg', 'lumanari-servit'),
('Lumânare Nuntă Premium', 'Lumânare de nuntă decorată cu perle și dantela', 350.00, '/placeholder.svg', 'lumanari-servit'),
-- Mărturii Nuntă
('Marturie Nuntă Săpun', 'Săpun natural parfumat, ambalat elegant', 12.00, '/placeholder.svg', 'marturii-nunta'),
('Marturie Nuntă Lumânare', 'Lumânare mică în borcan decorat', 18.00, '/placeholder.svg', 'marturii-nunta'),
('Marturie Nuntă Miere', 'Borcan cu miere și etichetă personalizată', 22.00, '/placeholder.svg', 'marturii-nunta'),
('Marturie Nuntă Premium', 'Set marturie cu lumânare și săpun', 28.00, '/placeholder.svg', 'marturii-nunta'),
-- Mărturii Botez
('Marturie Botez Ursuleț', 'Lumânare în formă de ursuleț', 15.00, '/placeholder.svg', 'marturii-botez'),
('Marturie Botez Înger', 'Figurină înger decorativă', 18.00, '/placeholder.svg', 'marturii-botez'),
('Marturie Botez Săpun', 'Săpun natural în formă de bebeluș', 14.00, '/placeholder.svg', 'marturii-botez'),
('Marturie Botez Personalizată', 'Marturie cu numele copilului', 20.00, '/placeholder.svg', 'marturii-botez'),
-- Cadouri Speciale
('Set Cadou Relaxare', 'Set cu lumânări și săpunuri parfumate', 120.00, '/placeholder.svg', 'cadouri-speciale'),
('Cutie Cadou Premium', 'Cutie elegantă cu 5 lumânări asortate', 180.00, '/placeholder.svg', 'cadouri-speciale'),
('Set Cadou Romantic', 'Set pentru cupluri cu lumânări și petale', 95.00, '/placeholder.svg', 'cadouri-speciale'),
('Coș Cadou Deluxe', 'Coș cu lumânări, săpunuri și accesorii', 250.00, '/placeholder.svg', 'cadouri-speciale');