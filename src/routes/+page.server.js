



import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: pagesData } = await supabase
  .from("Collections")
  .select('*,FeaturedPhoto:Photos!featuredPhotoId(fileName,Albums!album_id(folderName))')
  .eq('published', true)
  .order('endDate', { ascending: false });

  return {
    collections: pagesData ?? [],

  };
}
