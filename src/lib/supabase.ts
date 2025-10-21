import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Booking Types
export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
}

// Contact Form Types
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

// Booking Functions
export async function createBooking(booking: Booking) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ...booking, status: 'pending' }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

// Contact Functions
export async function createContactMessage(message: ContactMessage) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([message])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

