import { createClient } from '@supabase/supabase-js'

// Substitua com os dados do SEU painel Supabase
const supabaseUrl = 'https://qtjzcsyzurvgqahrkptx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0anpjc3l6dXJ2Z3FhaHJrcHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2ODYyMTEsImV4cCI6MjA4OTI2MjIxMX0.rzOgz5XQ-hIuDqv2YY0xBYbFTzwPWjfbYIQ2sZNlbwI'

export const supabase = createClient(supabaseUrl, supabaseKey)
