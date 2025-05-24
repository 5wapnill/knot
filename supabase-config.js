import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://jlezyxumlooqubywfqko.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZXp5eHVtbG9vcXVieXdmcWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNjY1MjAsImV4cCI6MjA2MzY0MjUyMH0.7b3n7OBd7AzfsLWuvIRH4zyXQTlHF2NdvQ9q0GdYD_k'
);

export { supabase };