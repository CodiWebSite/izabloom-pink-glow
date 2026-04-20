import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface HeroSettings {
  title: string;
  subtitle: string;
  description: string;
}
export interface AboutSettings {
  title: string;
  description: string;
}
export interface ContactSettings {
  phone: string;
  whatsapp: string;
  location: string;
  delivery: string;
  email?: string;
}
export interface PromoSettings {
  enabled: boolean;
  title: string;
  description: string;
}

export interface SiteSettings {
  hero: HeroSettings;
  about: AboutSettings;
  contact: ContactSettings;
  promo: PromoSettings;
}

const defaults: SiteSettings = {
  hero: {
    title: "Lumânări Artizanale",
    subtitle: "Izabloom by Izabela",
    description: "Creații unice, lucrate manual cu pasiune. Fiecare lumânare spune o poveste.",
  },
  about: {
    title: "Despre Izabloom",
    description: "Pasiunea pentru frumos și detalii ne-a adus aici.",
  },
  contact: {
    phone: "+40 769 291 604",
    whatsapp: "+40 769 291 604",
    location: "București",
    delivery: "Livrăm oriunde în țară",
  },
  promo: { enabled: true, title: "SUPER OFERTĂ", description: "50 de bucăți la 450 de lei în loc de 650" },
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(defaults);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase.from("site_settings").select("key, value");
    if (data) {
      const merged: SiteSettings = { ...defaults };
      data.forEach((row: { key: string; value: unknown }) => {
        (merged as Record<string, unknown>)[row.key] = {
          ...(defaults as Record<string, Record<string, unknown>>)[row.key],
          ...(row.value as Record<string, unknown>),
        };
      });
      setSettings(merged);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return { settings, loading, reload: load };
};
