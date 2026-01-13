import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CancelPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [booking, setBooking] = useState(null);

  const apiURL = import.meta.env.VITE_API_URL || "https://sailbacalar-backend.onrender.com";

  useEffect(() => {
    if (!sessionId) return;
    fetch(`${apiURL}/payment/session/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
      });
  }, [sessionId]);

  if (!booking)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading booking...</p>
      </div>
    );

  return (
    <section className="flex justify-center items-center py-16 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-red-600">Booking Cancelled</h1>
        <p className="text-gray-600">Your booking has not been completed.</p>

        <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-left">
          <h2 className="font-semibold text-lg text-gray-800">{booking.title}</h2>
          <p>
            <span className="font-medium">Name:</span> {booking.name}
          </p>
          <p>
            <span className="font-medium">Date:</span> {new Date(booking.date).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Time:</span> {booking.time}
          </p>
          <p>
            <span className="font-medium">Persons:</span> {booking.persons}
          </p>
          <hr className="my-2" />
          <p>
            <span className="font-medium">Total Price:</span> ${booking.price}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Prepayment:</span> ${booking.prepayment}
          </p>
          <p className="text-red-600 font-semibold">
            <span className="font-medium">Pending:</span> ${booking.price - booking.prepayment}
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          If you want to try booking again or have any questions, please contact us on{" "}
          <a
            href="https://wa.me/9831551313"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
          >
            WhatsApp
          </a>
          .
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
