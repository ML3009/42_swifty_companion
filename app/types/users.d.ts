export type UserType = {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: string | null;
  url: string;
  phone: string | null;
  displayname: string;
  kind: string;
  image: {
      link: string;
      versions: {
          large: string;
          medium: string;
          small: string;
          micro: string;
      };
  };
  staff?: boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string | null;
  wallet: number;
  anonymize_date: string;
  data_erasure_date: string | null;
  alumni?: boolean;
  active?: boolean;
  groups: any[];
  cursus_users: {
      id: number;
      begin_at: string;
      end_at: string | null;
      grade: string | null;
      level: number;
      skills: any[];
      cursus_id: number;
      has_coalition: boolean;
      user: {
          id: number;
          login: string;
          url: string;
      };
      cursus: {
          id: number;
          created_at: string;
          name: string;
          slug: string;
      };
  }[];
  projects_users: any[];
  languages_users: {
      id: number;
      language_id: number;
      user_id: number;
      position: number;
      created_at: string;
  }[];
  achievements: any[];
  titles: any[];
  titles_users: any[];
  partnerships: any[];
  patroned: {
      id: number;
      user_id: number;
      godfather_id: number;
      ongoing: boolean;
      created_at: string;
      updated_at: string;
  }[];
  patroning: any[];
  expertises_users: {
      id: number;
      expertise_id: number;
      interested: boolean;
      value: number;
      contact_me: boolean;
      created_at: string;
      user_id: number;
  }[];
  roles: any[];
  campus: {
      id: number;
      name: string;
      time_zone: string;
      language: {
          id: number;
          name: string;
          identifier: string;
          created_at: string;
          updated_at: string;
      };
      users_count: number;
      vogsphere_id: number;
  }[];
  campus_users: {
      id: number;
      user_id: number;
      campus_id: number;
      is_primary: boolean;
  }[];
}