import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx"; // controlled form
import FormikRegistrationForm from "./components/formikForm.jsx"; // formik form

export default function App() {
  const [view, setView] = useState("controlled"); // 'controlled' | 'formik'

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Task 0: Form Handling in React</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => setView("controlled")}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            background: view === "controlled" ? "#111827" : "white",
            color: view === "controlled" ? "white" : "#111827",
            cursor: "pointer",
          }}
        >
          Controlled Components
        </button>
        <button
          onClick={() => setView("formik")}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            background: view === "formik" ? "#111827" : "white",
            color: view === "formik" ? "white" : "#111827",
            cursor: "pointer",
          }}
        >
          Formik + Yup
        </button>
      </div>

      {view === "controlled" ? <RegistrationForm /> : <FormikRegistrationForm />}
    </div>
  );
}
