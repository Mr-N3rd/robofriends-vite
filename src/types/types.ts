export type Robot = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export type Robots = Robot[];
export type CardListProps = {
  robots: Robots
}
export type SearchBoxProps = {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export type ScrollProps = {
  children: React.ReactNode;
};

export type CardProps = {
  name: string
  email: string
  id: number
};
export type name = {
  name: string

}
