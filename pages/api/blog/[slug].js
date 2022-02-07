export default function handler(req, res) {
  res.status(200).json({ title: "Blog Title", content: "Blog Content" });
}
