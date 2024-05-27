import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: eventData } = await supabase
  .from("Collections")
  .select('*')
  .is('type', null)
  .order('endDate', { ascending: false });

  return {
    events: eventData ?? [],

  };
}
