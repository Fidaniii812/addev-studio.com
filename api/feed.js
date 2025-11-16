export default function handler(req, res) {
  res.status(200).json({
    title: "Addev Studio Feed",
    message: "API is working correctly!",
    timestamp: new Date().toISOString()
  });
}
