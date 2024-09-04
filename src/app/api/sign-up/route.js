export default function POST(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ success: false });
  }
}
