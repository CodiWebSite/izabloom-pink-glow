import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import CategoryCard from "./CategoryCard";
import { Skeleton } from "./ui/skeleton";

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

const slugToHref: Record<string, string> = {
  "marturii-botez": "/marturii-botez",
  "marturii-nunta": "/marturii-nunta",
  "lumanari-mari": "/lumanari-mari",
  "lumanari-mici": "/lumanari-mici",
  "lumanari-delicioase": "/lumanari-delicioase",
  "lumanari-servit": "/lumanari-servit",
  "cadouri-speciale": "/cadouri-speciale",
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [productImages, setProductImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [catRes, prodRes] = await Promise.all([
        supabase.from("categories").select("*").order("display_order"),
        supabase.from("products").select("category, image_url").not("image_url", "is", null),
      ]);
      if (catRes.data) setCategories(catRes.data);
      if (prodRes.data) {
        const map: Record<string, string> = {};
        prodRes.data.forEach((p) => {
          if (p.image_url && !map[p.category]) map[p.category] = p.image_url;
        });
        setProductImages(map);
      }
      setLoading(false);
    };
    load();
  }, []);

  return (
    <section className="py-24" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
            Colecțiile noastre
          </p>
          <h2
            className="text-4xl md:text-5xl font-serif italic text-foreground mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Descoperă Magia
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fiecare produs este creat manual, cu pasiune și atenție la cele mai mici detalii
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="aspect-[4/5] rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c) => (
              <CategoryCard
                key={c.id}
                title={c.name}
                description={c.description || ""}
                image={c.image_url || productImages[c.slug] || ""}
                href={slugToHref[c.slug] || "/"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
