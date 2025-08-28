import { useState } from "react";

export default function RegistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = "Username is required";
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 600));
      console.log("Controlled submit payload:", values);
      setStatus({ type: "success", message: "Registered successfully (mock)!" });
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <div style={{ background: "white", padding: 16, borderRadius: 12, border: "1px solid #e5e7eb" }}>
      <h2 style={{ marginTop: 0 }}>Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: 6 }}>Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            placeholder="jane_doe"
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
          />
          {errors.username && <p style={{ color: "#b91c1c", marginTop: 6 }}>{errors.username}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
          />
          {errors.email && <p style={{ color: "#b91c1c", marginTop: 6 }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: 6 }}>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="•••••••"
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
          />
          {errors.password && <p style={{ color: "#b91c1c", marginTop: 6 }}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #111827",
            background: "#111827",
            color: "white",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        {status && (
          <p
            style={{
              marginTop: 12,
              color: status.type === "success" ? "#065f46" : "#b91c1c",
              fontWeight: 600,
            }}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
