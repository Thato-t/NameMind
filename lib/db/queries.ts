import { supabase } from '../supabase/client'
import { supabaseAdmin } from '../supabase/server'
// TODO: create you own functions to checj the sign in and up
// Sign up user
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) throw error
  return data
}

// Sign in user
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

// Sign out user
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}