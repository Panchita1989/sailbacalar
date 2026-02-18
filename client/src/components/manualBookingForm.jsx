import { useState } from "react";
import tours from "../data/tours"; // Pfad anpassen

export default function ManualBookingForm() {
  const [selectedTourId, setSelectedTourId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(2);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [prepayment, setPrepayment] = useState(0);

  const selectedTour = tours.find((t) => t.id === selectedTourId);

  const basePrice = selectedTour
    ? Number(selectedTour.basePrice.replace("$", "").replace("'", ""))
    : 0;

  const extraPersonPrice = selectedTour?.extraPerson || 0;

  const extraPersons = Math.max(0, persons - 2);
  const extraPrice = extraPersons * extraPersonPrice;

  const totalPrice = basePrice + extraPrice;
  const pendingPayment = totalPrice - prepayment;

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedTour) {
    alert("Please select a tour");
    return;
  }

  const booking = {
    tourId: selectedTour.id,
    title: selectedTour.title,
    date,
    time,
    persons,
    name,
    email,
    phone,
    price: totalPrice,          // 👈 Backend uses "price"
    prepayment,
    status: pendingPayment === 0 ? "paid" : "pending",
  };

  const apiURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  try {
    const res = await fetch(`${apiURL}/bookings/manual`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    const data = await res.json();
    console.log("Saved booking:", data);

    alert("Tour added successfully ✅");

  } catch (error) {
    console.error("Manual booking error:", error);
    alert("Error saving booking ❌");
  }
};


  return (
    <main className="max-w-lg mx-auto mt-8 p-6 bg-neutral-100 rounded-xl shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Add Tour Manually
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        {/* TOUR SELECT */}
        <select
          required
          value={selectedTourId}
          onChange={(e) => {
            setSelectedTourId(e.target.value);
            setTime("");
          }}
          className="border rounded-xl px-3 py-3"
        >
          <option value="">Select Tour</option>
          {tours.map((tour) => (
            <option key={tour.id} value={tour.id}>
              {tour.title}
            </option>
          ))}
        </select>

        {/* DATE */}
        <label className="font-medium">Date</label>
        <input
          required
          type="date"
          lang="en"
          className="border rounded-xl px-3 py-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* TIME */}
        <select
          required
          className="border rounded-xl px-3 py-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          disabled={!selectedTour}
        >
          <option value="">Select time</option>

          {selectedTour?.id === "sunrise" && (
            <option value="06:00">06:00</option>
          )}

          {selectedTour?.id === "allDay" && (
            <option value="13:00">13:00</option>
          )}

          {selectedTour &&
            selectedTour.id !== "sunrise" &&
            selectedTour.id !== "allDay" && (
              <>
                <option value="10:00">10:00</option>
                <option value="15:00">15:00</option>
              </>
            )}
        </select>

        {/* PERSONS */}
        <input
          required
          type="number"
          min="1"
          className="border rounded-xl px-3 py-3"
          placeholder="Persons"
          value={persons}
          onChange={(e) => setPersons(Number(e.target.value))}
        />

        {/* CUSTOMER */}
        <input
          required
          placeholder="Customer name"
          className="border rounded-xl px-3 py-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          required
          type="email"
          placeholder="Email"
          className="border rounded-xl px-3 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          placeholder="Phone"
          className="border rounded-xl px-3 py-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* PREPAYMENT */}
        <label className="font-medium">Prepayment (already paid)</label>
        <input
          type="number"
          min="0"
          className="border rounded-xl px-3 py-3"
          placeholder="Enter prepayment amount"
          value={prepayment}
          onChange={(e) => setPrepayment(Number(e.target.value))}
        />


        {/* PRICE SUMMARY */}
        {selectedTour && (
          <div className="bg-gray-100 rounded-xl p-3 text-sm">
            <p><b>Base price:</b> {basePrice} MXN</p>
            <p><b>Extra persons:</b> {extraPersons} × {extraPersonPrice} = {extraPrice} MXN</p>
            <p className="font-semibold"><b>Total price:</b> {totalPrice} MXN</p>
            <p><b>Prepayment:</b> {prepayment} MXN</p>
            <p className="text-red-600 font-semibold">
              <b>Pending payment:</b> {pendingPayment} MXN
            </p>
          </div>
        )}

        <button className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800">
          Save Tour
        </button>
      </form>
    </main>
  );
}
