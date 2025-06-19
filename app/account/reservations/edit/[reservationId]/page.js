
import { getBooking, getCabin } from "@/app/_lib/data-service";
import EditReservationForm from "./EditReservationForm";

export default async function Page({ params }) {
  const reservation = await getBooking(params?.reservationId);

  const {maxCapacity} = await getCabin(reservation.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservation.id}
      </h2>

      <EditReservationForm
        reservation={reservation}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
