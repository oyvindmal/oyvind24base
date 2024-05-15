import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: postData } = await supabase
  .from("Posts")
  .select('*')
  .order('date', { ascending: false });

  return {
    posts: postData ?? [],

  };
}
