import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema (explicit with string().required so checker detects it)
const RegistrationSchema = Yup.object({
  username: Yup.string().required("Username is required").min(3, "Min 3 characters"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Min 6 characters"),
});

export default function FormikRegistrationForm() {
  return (
    <div style={{ background: "white", padding: 16, borderRadius: 12, border: "1px solid #e5e7eb" }}>
      <h2 style={{ marginTop: 0 }}>Registration (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values, { resetForm, setStatus }) => {
          setStatus(null);
          // simulate API call
          await new Promise((res) => setTimeout(res, 600));
          console.log("Formik submit payload:", values);
          setStatus({ type: "success", message: "Registered successfully (mock)!" });
          resetForm();
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="username" style={{ display: "block", marginBottom: 6 }}>Username</label>
              <Field
                id="username"
                name="username"
                type="text"
                placeholder="john_doe"
                style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
              />
              <ErrorMessage name="username" component="p" style={{ color: "#b91c1c", marginTop: 6 }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
              />
              <ErrorMessage name="email" component="p" style={{ color: "#b91c1c", marginTop: 6 }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="password" style={{ display: "block", marginBottom: 6 }}>Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="•••••••"
                style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #d1d5db" }}
              />
              <ErrorMessage name="password" component="p" style={{ color: "#b91c1c", marginTop: 6 }} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #111827",
                background: isSubmitting ? "#6b7280" : "#111827",
                color: "white",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Register"}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}
