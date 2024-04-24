import { supabase } from "$lib/dbClient";

export async function load() {
  const { data, error } = await supabase.from("members").select();
  const hierarchy = await supabase.from('hierarchy').select();
  const roles = await supabase.from('hierarchy_static').select();

  console.log(data);
  console.log(hierarchy)
  console.log(roles);

  return {
    members: data ?? [],
    hierarchy: hierarchy.data ?? [],
    roles: roles.data ?? []
  };
}