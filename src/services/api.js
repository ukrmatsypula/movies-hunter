import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjMyMWViYzA4MzBhNTlkZTI5MjE3OWIxYTRkMzI1NyIsInN1YiI6IjY0NzBlOTMyNzcwNzAwMDBmYzAyNzNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvDNjbWbVn8UHcSYlcT5EdzQmJIVO13JvYisZAVAORY";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
