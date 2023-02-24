import { createClient } from "@supabase/supabase-js";



export const getPoints = async (setPoints?: (points: any) => void) => {
  const supabaseUrl = "https://ezcxlijkyxcygregizon.supabase.co";
  const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Y3hsaWpreXhjeWdyZWdpem9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNjI0NTgsImV4cCI6MTk5MjczODQ1OH0.FpSdPYdSHuNV8Bah8wMWS_z4UaWyelnVxBojUu_9_I4"  
  const supabase = createClient(supabaseUrl, supabaseKey);
  supabase.from("points").select(`
    points,
    reason,
    expires_at,
    race,
    driver_id (
      name
    )
  `).then((response) => console.log(response.data))
};