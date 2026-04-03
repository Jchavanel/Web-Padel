export interface Database {
  public: {
    Tables: {
      clubs: {
        Row: {
          id: string;
          name: string;
          slug: string;
          timezone: string;
          currency: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          timezone?: string;
          currency?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          full_name: string;
          email: string | null;
          phone: string | null;
          role: string;
          skill_level: number | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          email?: string | null;
          phone?: string | null;
          role?: string;
          skill_level?: number | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          inquiry_type: string;
          message: string;
          source: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          inquiry_type: string;
          message: string;
          source?: string;
          created_at?: string;
        };
      };
      courts: {
        Row: {
          id: string;
          club_id: string;
          name: string;
          is_indoor: boolean;
          has_lighting: boolean;
        };
        Insert: {
          id?: string;
          club_id: string;
          name: string;
          is_indoor?: boolean;
          has_lighting?: boolean;
        };
      };
      reservations: {
        Row: {
          id: string;
          club_id: string;
          court_id: string;
          holder_profile_id: string;
          starts_at: string;
          ends_at: string;
          status: string;
          total_price: number;
        };
        Insert: {
          id?: string;
          club_id: string;
          court_id: string;
          holder_profile_id: string;
          starts_at: string;
          ends_at: string;
          status?: string;
          total_price?: number;
        };
      };
      open_matches: {
        Row: {
          id: string;
          club_id: string;
          reservation_id: string;
          status: string;
          price_per_player: number | null;
        };
        Insert: {
          id?: string;
          club_id: string;
          reservation_id: string;
          status?: string;
          price_per_player?: number | null;
        };
      };
    };
  };
}
