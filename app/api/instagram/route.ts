// app/api/instagram/route.ts

export async function GET() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`,
    { next: { revalidate: 3600 } } // refresh every 1 hour
  );

  const data = await res.json();
  return Response.json(data);
}