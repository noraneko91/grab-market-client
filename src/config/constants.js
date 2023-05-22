export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://greb-market-server-st.fly.dev"
    : "http://localhost:8080";
