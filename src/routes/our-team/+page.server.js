import { supabase } from "$lib/dbClient";

export async function load() {
  const { data, error } = await supabase.from("members").select();

  return {
    members: data ?? [],
  };
}