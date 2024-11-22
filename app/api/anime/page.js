export async function GET({ params }) {
  const { id } = params;
  const response = await fetch(`https://api.myanimelist.net/v2/${id}`);
  const data = await response.json();

  return new Response(JSON.stringify(data));
}
