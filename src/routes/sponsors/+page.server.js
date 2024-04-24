import { supabase } from "$lib/dbClient";

export async function load() {
  // console.log(dat)
  const { data, error } = await supabase
    .from("sponsors")
    .select()
    .order("tier_level", { ascending: true });

  if (error) {
    console.error("Error retrieving members:", error);
    return { members: [] };
  }

  return { members: data ?? [] };
}