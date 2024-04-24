import { supabase } from "$lib/dbClient";

export async function load() {
  const { data, error } = await supabase
    .from("sponsors")
    .select()
    .order("tier_level", { ascending: true });

  if (error) {
    console.error("Error retrieving sponsors:", error);
    return { sponsors: [] };
  }

  /**
   * @param {any} sponsors
   */
  function extractUniqueTiers(sponsors) {
    const uniqueTiers = [];
    const seenTiers = new Set();
    
    for (const sponsor of sponsors) {
      const { tier_name, tier_color } = sponsor;
      const tier = { tier_name, tier_color };
      const tierKey = JSON.stringify(tier); // Create a string representation of the tier object
      
      if (!seenTiers.has(tierKey)) {
        uniqueTiers.push(tier);
        seenTiers.add(tierKey);
      }
    }
    
    return uniqueTiers;
  }  

  console.log(extractUniqueTiers(data));

  return { 
    sponsors: data ?? [],
    tiers: extractUniqueTiers(data) ?? [],
  };
}