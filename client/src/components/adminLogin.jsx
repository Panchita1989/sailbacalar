import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) navigate("/admin");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const res = await fetch(`${apiURL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("adminToken", data.token); // später können wir das ohne localStorage machen
      navigate("/admin");
    } else {
      alert("Login failed");
    }
  };

  return (
    <main className="flex justify-center mt-20">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-semibold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 rounded w-full pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button className="bg-black text-white py-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}