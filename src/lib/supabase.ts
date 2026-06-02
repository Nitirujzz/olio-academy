import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function loadProgress(userId: string) {
  const { data } = await supabase
    .from('user_progress')
    .select('student_name, completed_modules, module_scores')
    .eq('user_id', userId)
    .single()
  return data
}

export async function saveProgress(
  userId: string,
  studentName: string,
  completedModules: object,
  moduleScores: object
) {
  await supabase.from('user_progress').upsert({
    user_id: userId,
    student_name: studentName,
    completed_modules: completedModules,
    module_scores: moduleScores,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id' })
}
