import { createClient } from '@supabase/supabase-js'

const url = 'https://dpnbsfpdcshneekqivnw.supabase.co';
const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbmJzZnBkY3NobmVla3Fpdm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTkxMzAsImV4cCI6MjAyOTM5NTEzMH0.5Tv6mLcgL0Roe4F2LxRsTURCQ11-GmJ-qZKMvywimyM';

export const supabase = createClient(url, anon)