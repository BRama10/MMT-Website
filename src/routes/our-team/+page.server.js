import { supabase } from "$lib/dbClient";

export async function load() {
  const { data, error } = await supabase.from("members").select();
  console.log('hi')
  console.log(data?.at(4));
  console.log(error);
  return {
    members: data ?? [],
  };
}