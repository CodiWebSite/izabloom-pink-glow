import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface Settings {
  hero: { title: string; subtitle: string; description: string };
  about: { title: string; description: string };
  contact: { phone: string; whatsapp: string; location: string; delivery: string };
  promo: { enabled: boolean; title: string; description: string };
}

const empty: Settings = {
  hero: { title: "", subtitle: "", description: "" },
  about: { title: "", description: "" },
  contact: { phone: "", whatsapp: "", location: "", delivery: "" },
  promo: { enabled: true, title: "", description: "" },
};

const AdminSettings = () => {
  const { toast } = useToast();
  const [s, setS] = useState<Settings>(empty);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("site_settings").select("key, value");
      if (data) {
        const merged = { ...empty } as unknown as Record<string, unknown>;
        data.forEach((row: { key: string; value: unknown }) => {
          merged[row.key] = { ...((empty as unknown as Record<string, unknown>)[row.key] as object), ...(row.value as object) };
        });
        setS(merged as unknown as Settings);
      }
    };
    load();
  }, []);

  const saveSection = async (key: keyof Settings) => {
    setSaving(key);
    const { error } = await supabase
      .from("site_settings")
      .upsert([{ key, value: s[key] as unknown as object }], { onConflict: "key" });
    setSaving(null);
    if (error) toast({ title: "Eroare", description: error.message, variant: "destructive" });
    else toast({ title: "Salvat" });
  };

  const Section = ({ title, children, sectionKey }: { title: string; children: React.ReactNode; sectionKey: keyof Settings }) => (
    <div className="bg-card rounded-2xl p-6 border space-y-4" style={{ borderColor: "hsl(340 30% 90%)" }}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
      <Button onClick={() => saveSection(sectionKey)} disabled={saving === sectionKey}>
        {saving === sectionKey && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Salvează
      </Button>
    </div>
  );

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-serif italic text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Setări site
        </h1>
        <p className="text-sm text-muted-foreground">Editează textele și informațiile de contact</p>
      </div>

      <Section title="Hero (banner principal)" sectionKey="hero">
        <div>
          <Label>Subtitlu (mic, deasupra)</Label>
          <Input value={s.hero.subtitle} onChange={(e) => setS({ ...s, hero: { ...s.hero, subtitle: e.target.value } })} />
        </div>
        <div>
          <Label>Titlu</Label>
          <Input value={s.hero.title} onChange={(e) => setS({ ...s, hero: { ...s.hero, title: e.target.value } })} />
        </div>
        <div>
          <Label>Descriere</Label>
          <Textarea
            value={s.hero.description}
            rows={3}
            onChange={(e) => setS({ ...s, hero: { ...s.hero, description: e.target.value } })}
          />
        </div>
      </Section>

      <Section title="Despre" sectionKey="about">
        <div>
          <Label>Titlu</Label>
          <Input value={s.about.title} onChange={(e) => setS({ ...s, about: { ...s.about, title: e.target.value } })} />
        </div>
        <div>
          <Label>Descriere</Label>
          <Textarea
            value={s.about.description}
            rows={3}
            onChange={(e) => setS({ ...s, about: { ...s.about, description: e.target.value } })}
          />
        </div>
      </Section>

      <Section title="Contact" sectionKey="contact">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Telefon</Label>
            <Input value={s.contact.phone} onChange={(e) => setS({ ...s, contact: { ...s.contact, phone: e.target.value } })} />
          </div>
          <div>
            <Label>WhatsApp</Label>
            <Input value={s.contact.whatsapp} onChange={(e) => setS({ ...s, contact: { ...s.contact, whatsapp: e.target.value } })} />
          </div>
          <div>
            <Label>Locație</Label>
            <Input value={s.contact.location} onChange={(e) => setS({ ...s, contact: { ...s.contact, location: e.target.value } })} />
          </div>
          <div>
            <Label>Livrare</Label>
            <Input value={s.contact.delivery} onChange={(e) => setS({ ...s, contact: { ...s.contact, delivery: e.target.value } })} />
          </div>
        </div>
      </Section>

      <Section title="Promoție (banner)" sectionKey="promo">
        <div className="flex items-center justify-between">
          <Label>Activează banner promo</Label>
          <Switch checked={s.promo.enabled} onCheckedChange={(v) => setS({ ...s, promo: { ...s.promo, enabled: v } })} />
        </div>
        <div>
          <Label>Titlu (ex: SUPER OFERTĂ)</Label>
          <Input value={s.promo.title} onChange={(e) => setS({ ...s, promo: { ...s.promo, title: e.target.value } })} />
        </div>
        <div>
          <Label>Descriere</Label>
          <Textarea
            value={s.promo.description}
            rows={2}
            onChange={(e) => setS({ ...s, promo: { ...s.promo, description: e.target.value } })}
          />
        </div>
      </Section>
    </div>
  );
};

export default AdminSettings;
