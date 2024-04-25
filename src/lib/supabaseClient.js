import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hgyfmvzxykkfouwnyqvs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneWZtdnp4eWtrZm91d255cXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NzQxMDksImV4cCI6MjAyOTM1MDEwOX0.3liEgP0wjYPeD2U4gCim6XU0S-LulMUaoYktb_87820')