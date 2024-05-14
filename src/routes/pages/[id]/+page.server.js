import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: pagesData } = await supabase
  .from("Pages")
  .select('*')
  .eq('id', params.id);

  return {
    pages: pagesData ?? [],

  };
}
