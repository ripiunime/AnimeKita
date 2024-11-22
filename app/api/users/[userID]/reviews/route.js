export async function GET({ params }) {
    const { userId } = params;
    
    const response = await fetch(`https://api.myanimelist.net/v2/${userId}/reviews`);
    const data = await response.json();
  
    return new Response(JSON.stringify(data));
  }
  