export async function POST(request) {
  const reviewData = await request.json();

  const response = await fetch('https://api.myanimelist.net/v2/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewData),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data));
}
