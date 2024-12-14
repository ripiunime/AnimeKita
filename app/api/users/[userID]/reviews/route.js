export async function GET(request, { params }) {
  const { userId } = params;

  if (!userId) {
      return new Response(
          JSON.stringify({ error: "User ID is required" }),
          { status: 400 }
      );
  }

  try {
      // Lakukan fetch ke API eksternal
      const response = await fetch(`https://api.myanimelist.net/v2/users/${userId}/reviews`);
      if (!response.ok) {
          throw new Error("Failed to fetch reviews from external API");
      }
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
      console.error("Error fetching user reviews:", error.message);
      return new Response(
          JSON.stringify({ error: error.message }),
          { status: 500 }
      );
  }
}
