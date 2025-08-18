"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const supabase = createClient();
  const router = useRouter();
  async function handleSingIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://localhost:3000/auth/callback?next=/instruments`,
      },
    });
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("logout error:", error);
    } else {
      console.log("logout success");
      router.refresh();
    }
  }
  return (
    <>
      <button onClick={handleSingIn}>login</button>
      <button onClick={signOut}>logout</button>
    </>
  );
}
