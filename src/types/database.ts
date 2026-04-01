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
      };
      courts: {
        Row: {
          id: string;
          club_id: string;
          name: string;
          is_indoor: boolean;
          has_lighting: boolean;
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
      };
      open_matches: {
        Row: {
          id: string;
          club_id: string;
          reservation_id: string;
          status: string;
          price_per_player: number | null;
        };
      };
    };
  };
}
