const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { method } = req; // Get request method (GET, POST, PUT, PATCH, DELETE)
  const path = req.url.replace(/^\/api\/proxy/, ""); // Extract API path
  const backendUrl = `http://hallbackend.onrender.com${path}`; // Build backend URL

  try {
    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(req.headers.authorization && {
          Authorization: req.headers.authorization, // Forward auth headers if present
        }),
      },
      ...(method !== "GET" && { body: JSON.stringify(req.body) }), // Attach body for non-GET requests
    };

    const response = await fetch(backendUrl, fetchOptions);
    const data = await response.json();

    res.status(response.status).json(data); // Return the response to frontend
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
