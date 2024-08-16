import { createClient } from "../../../utils/supabase/server";

export async function getClicksForUrls(urlIds: string[]) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .in("url_id", urlIds);

  if (error) {
    console.error(error.message);
    throw new Error("Unable to load Clicks");
  }

  return data;
}
