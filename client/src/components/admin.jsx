import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const [tours, setTours] = useState([]);
  const [editingTour, setEditingTour] = useState(null);

  const handleUpdate = async (e) => {
  e.preventDefault();

  const apiURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const res = await fetch(`${apiURL}/bookings/${editingTour._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editingTour),
      });

      const updated = await res.json();

      setTours((prev) =>
        prev.map((tour) => (tour._id === updated._id ? updated : tour))
      );

      setEditingTour(null);
    };


  useEffect(() => {
  const fetchBookings = async () => {
    const apiURL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const res = await fetch(`${apiURL}/bookings`);
    const data = await res.json();

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    const futureTours = data.filter((tour) => tour.date >= today);

    setTours(futureTours);
    };

    fetchBookings();
    }, []);

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
      if (!confirmDelete) return;
        
      const apiURL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        
      await fetch(`${apiURL}/bookings/${id}`, {
        method: "DELETE",
      });
    
      // aus State entfernen (ohne neu laden)
      setTours((prev) => prev.filter((tour) => tour._id !== id));
    };
    






  return (
    <main className="mt-5 mb-10 mx-10 text-center">
      <h1 className="text-3xl font-semibold mb-8">
        Hi Mauricio, these are your upcoming tours
      </h1>

      <Link
        to="/admin/add-tour"
        className="inline-block mb-8 px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
      >
        + Add Tour Manually
      </Link>

      {editingTour && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <form
          onSubmit={handleUpdate}
          className="bg-white rounded-2xl shadow-xl p-6 w-[95%] max-w-lg space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Edit Booking
          </h2>
        
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Tour</label>
              <input
                className="w-full border rounded-lg p-2"
                value={editingTour.title}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, title: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Persons</label>
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={editingTour.persons}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, persons: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Date</label>
              <input
                type="date"
                className="w-full border rounded-lg p-2"
                value={editingTour.date}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, date: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Time</label>
              <input
                className="w-full border rounded-lg p-2"
                value={editingTour.time}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, time: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                className="w-full border rounded-lg p-2"
                value={editingTour.name}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, name: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                className="w-full border rounded-lg p-2"
                value={editingTour.phone}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, phone: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                className="w-full border rounded-lg p-2 col-span-2"
                value={editingTour.email}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, email: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Total Price</label>
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={editingTour.price}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, price: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Prepayment</label>
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={editingTour.prepayment}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, prepayment: e.target.value })
                }
              />
            </div>
            
            <div className="col-span-2">
              <label className="text-sm font-medium">Status</label>
              <select
                className="w-full border rounded-lg p-2"
                value={editingTour.status}
                onChange={(e) =>
                  setEditingTour({ ...editingTour, status: e.target.value })
                }
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
            
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setEditingTour(null)}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-black text-white hover:bg-neutral-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    )}


      <section className="flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-neutral-300/20 rounded-xl shadow-sm p-6 w-full md:w-[340px] text-left flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold text-center mb-2">
              {tour.title} Tour
            </h2>

            <p><b>Customer:</b> {tour.name}</p>
            <p><b>Persons:</b> {tour.persons}</p>
            <p><b>Date:</b> {tour.date}</p>
            <p><b>Time:</b> {tour.time}</p>

            <div className="mt-2 border-t pt-2">
              <p><b>Total Price:</b> ${tour.price} MXN</p>  
              <p><b>Prepayment:</b> ${tour.prepayment} MXN</p>
              <b>Pending:</b> {tour.price - (tour.prepayment || 0)} MXN
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <button 
                className="px-4 py-2 rounded bg-black text-white hover:bg-neutral-800"
                onClick={()=> setEditingTour(tour)}
                >
                Edit
              </button>
              <button 
                className="px-4 py-2 rounded border border-black hover:bg-black hover:text-white"
                onClick={()=>handleDelete(tour._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
