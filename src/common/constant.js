export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://buku-islam-api.vercel.app/";

const API_CONFIG = {
  GET_BOOKS: `${BASE_URL}books`,
  GET_BOOK: (id) => `${BASE_URL}books?bookId=${id}`,
};

export default API_CONFIG;
