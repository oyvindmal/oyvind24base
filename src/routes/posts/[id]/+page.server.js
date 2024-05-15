import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: postData } = await supabase
  .from("Posts")
  .select('*')
  .eq('id', params.id);

  return {
    posts: postData ?? [],

  };
}
