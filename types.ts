export interface Photos {
  id: string;
  user: User;
  urls: Urls;
  description: string | null;
}

export interface User {
  id: string;
  name: string;
}

export interface Urls {
  regular: string;
  small: string;
}
