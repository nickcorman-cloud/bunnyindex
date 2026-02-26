export async function GET(request, { params }) {
  const path = params.path.join('/');
  const { searchParams } = new URL(request.url);
  // Inject sfrm based on file extension (DW CDN requires this)
  if (!searchParams.has('sfrm')) {
    searchParams.set('sfrm', path.endsWith('.jpeg') ? 'jpeg' : 'png');
  }
  const query = searchParams.toString();
  const elfUrl = `https://www.elfcosmetics.com/dw/image/v2/${path}${query ? '?' + query : ''}`;
  try {
    const res = await fetch(elfUrl, {
      headers: {
        'Referer': 'https://www.elfcosmetics.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin'
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
