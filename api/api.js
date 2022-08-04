const BASE_URL =
  "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

export const getData = () => {
  return fetch(BASE_URL, {
    method: "GET",
  }).then((response) => response.json());
};
