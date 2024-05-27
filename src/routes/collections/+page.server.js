import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: eventData } = await supabase
  .from("Collections")
  .select('*')
  .neq('type', 'event')
  .order('endDate', { ascending: false });

  return {
    events: eventData ?? [],

  };
}
