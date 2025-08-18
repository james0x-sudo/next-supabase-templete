import { createClient } from "@/lib/supabase/server";
import AuthButtonServer from "./auth-button-server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("tweets").select();

  return (
    <>
      <AuthButtonServer />
      <pre>{JSON.stringify(instruments, null, 2)}</pre>
    </>
  );
}
