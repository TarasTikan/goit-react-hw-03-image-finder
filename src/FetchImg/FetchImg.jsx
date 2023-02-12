const key = `&key=32151990-9b10be0026312dee6c1690c83`;
const API = `https://pixabay.com/api/`;
const defaultInfo = `&image_type=photo&orientation=horizontal&per_page=12`;
export function FetchImg(query, page) {
  return fetch(`${API}?q=${query}&page=${page}${key}${defaultInfo}`).then(res =>
    res.json()
  );
}
