import { createClient } from "@/lib/supabase/server";
import AuthButtonClient from "./auth-button-client";

export default async function AuthButtonServer() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return <AuthButtonClient session={session} />;
}
