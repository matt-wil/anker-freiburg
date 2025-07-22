import { supabase } from '@/lib/supabase';

export async function getTattooArtists() {
  const { data, error } = await supabase
    .from('artists')
    .select('*')
    .eq('category', 'Tattoo')
    .order('name', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPiercingArtists() {
    const {data, error} = await supabase
    .from('artists')
    .select('*')
    .eq('category', 'Piercing')
    .order('name', {ascending: false });
    
    if (error) throw error;
    return data;
}

export async function getAlldata() {
  const {data, error } = await supabase
    .from('artists')
    .select('*')
    
    if (error) throw error;
    return data;
}

export async function getArtistByName(name: string) {
  const { data, error } = await supabase
    .from('artists')
    .select('*')
    .eq('name', name)
    .single();
  if (error) throw error;
  return data;
}