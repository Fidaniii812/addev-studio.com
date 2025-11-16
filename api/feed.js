export default function handler(req, res) {
  // CORS – lejo kërkesa nga faqja jote
  res.setHeader("Access-Control-Allow-Origin", "https://addev-studio.com");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Përgjigju menjëherë për preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    ads: [
      {
        title: "AliExpress Deals",
        url: "https://rzekl.com/g/1e8d11449447bcc10bc516525dc3e8/",
        image: "/assets/aliexpress-banner.jpg",
      },
      {
        title: "italki Online Lessons",
        url: "https://flcoz.com/g/9ks8krpbbq47bcc10bc59911c0dd7a/",
        image: "/assets/italki-banner.jpg",
      },
      {
        title: "Alibaba Business",
        url: "https://rzekl.com/g/pm1aev55c147bcc10bc5219aa26f6f/",
        image: "/assets/alibaba-banner.jpg",
      },
    ],
    updated: new Date().toISOString(),
  });
}
