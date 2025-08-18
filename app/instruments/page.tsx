import { createClient } from "@/lib/supabase/server";
import AuthButton from "./auth-button";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("tweets").select();

  return (
    <>
      <AuthButton />
      <pre>{JSON.stringify(instruments, null, 2)}</pre>
    </>
  );
}
