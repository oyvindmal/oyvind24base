import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: eventData } = await supabase
  .from("Events")
  .select('*')
  .order('endDate', { ascending: false });

  return {
    events: eventData ?? [],

  };
}
