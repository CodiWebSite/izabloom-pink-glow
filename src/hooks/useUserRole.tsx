import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

type Role = "admin" | "customer" | null;

export const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState<Role>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!user) {
        if (!cancelled) {
          setRole(null);
          setLoading(false);
        }
        return;
      }
      setLoading(true);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id);

      if (cancelled) return;
      if (data && data.some((r) => r.role === "admin")) setRole("admin");
      else setRole("customer");
      setLoading(false);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  return { role, isAdmin: role === "admin", loading };
};
