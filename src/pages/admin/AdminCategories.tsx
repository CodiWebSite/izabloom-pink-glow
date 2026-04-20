import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  display_order: number;
}

const AdminCategories = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Category[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase.from("categories").select("*").order("display_order");
    if (data) setItems(data);
  };

  useEffect(() => {
    load();
  }, []);

  const update = (id: string, key: keyof Category, value: string | number) => {
    setItems((prev) => prev.map((c) => (c.id === id ? { ...c, [key]: value } : c)));
  };

  const save = async (c: Category) => {
    setSaving(c.id);
    const { error } = await supabase
      .from("categories")
      .update({
        name: c.name,
        description: c.description,
        display_order: c.display_order,
      })
      .eq("id", c.id);
    setSaving(null);
    if (error) toast({ title: "Eroare", description: error.message, variant: "destructive" });
    else toast({ title: "Categorie salvată" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif italic text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Categorii
        </h1>
        <p className="text-sm text-muted-foreground">Editează numele și descrierile categoriilor</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((c) => (
          <div
            key={c.id}
            className="bg-card rounded-2xl p-5 border space-y-3"
            style={{ borderColor: "hsl(340 30% 90%)" }}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">/{c.slug}</p>
            <div>
              <Label>Nume</Label>
              <Input value={c.name} onChange={(e) => update(c.id, "name", e.target.value)} />
            </div>
            <div>
              <Label>Descriere</Label>
              <Textarea
                rows={2}
                value={c.description || ""}
                onChange={(e) => update(c.id, "description", e.target.value)}
              />
            </div>
            <div>
              <Label>Ordine afișare</Label>
              <Input
                type="number"
                value={c.display_order}
                onChange={(e) => update(c.id, "display_order", parseInt(e.target.value) || 0)}
              />
            </div>
            <Button onClick={() => save(c)} disabled={saving === c.id} className="w-full">
              {saving === c.id && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Salvează
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
