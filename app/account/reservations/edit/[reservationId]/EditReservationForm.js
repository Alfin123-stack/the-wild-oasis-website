"use client";

import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
export default function EditReservationForm({ reservation, maxCapacity = 23 }) {
  return (
    <form
      action={updateBooking}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <input value={reservation.id} type="hidden" name="bookingId" />
        <label htmlFor="numGuests">How many guests?</label>
        <select
          defaultValue={reservation.numGuests}
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required>
          <option value="">Select number of guests...</option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option key={x} value={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          defaultValue={reservation.observations || ""}
          name="observations"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">
          Update reservation
        </SubmitButton>
      </div>
    </form>
  );
}
