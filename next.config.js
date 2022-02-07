module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
  },
  // static pages
  exportPathMap: async () => ({
    "/": { page: "/" },
  }),
};
