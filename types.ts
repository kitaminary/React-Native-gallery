export interface Photos {
  id: string;
  user: User;
  urls: Urls;
  width: number;
  height: number;
}

export interface User {
  id: string;
  name: string;
}

export interface Urls {
  full: string;
  small: string;
}
