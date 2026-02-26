export async function GET(request, { params }) {
  const path = params.path.join('/');
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const elfUrl = `https://www.elfcosmetics.com/dw/image/v2/${path}${query ? '?' + query : ''}`;
  try {
    const res = await fetch(elfUrl, {
      headers: {
        'Referer': 'https://www.elfcosmetics.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) return new Response('Not found', { status: 404 });
    const body = await res.arrayBuffer();
    return new Response(body, {
      headers: {
        'Content-Type': res.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    });
  } catch (e) {
    return new Response('Error', { status: 500 });
  }
}
