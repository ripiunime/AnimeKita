export async function GET(request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const searchTerm = searchParams.get('search');

  const response = await fetch(`https://api.myanimelist.net/v2?search=${searchTerm}`);
  const data = await response.json();

  return new Response(JSON.stringify(data));
}
