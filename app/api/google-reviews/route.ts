// app/api/google-reviews/route.ts

export async function GET() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=name,rating,reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`,
    { next: { revalidate: 3600 } } // refresh every 1 hour
  );

  const data = await res.json();
  return Response.json(data.result);
}