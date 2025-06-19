import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, context) {
  const { cabinId } = context.params;

  if (!cabinId) {
    return new Response("Cabin ID is required", { status: 400 });
  }

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    if (!cabin) {
      return new Response("Cabin not found", { status: 404 });
    }

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
