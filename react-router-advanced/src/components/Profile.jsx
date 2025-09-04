import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";

function ProfileDetails() {
  return <h3>ProfileDetails: User personal info</h3>;
}

function ProfileSettings() {
  return <h3>ProfileSettings: Update your account</h3>;
}

export default function Profile() {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Profile Page - User {id}</h2>

      <nav>
        <Link to="details" style={{ marginRight: "1rem" }}>
          ProfileDetails
        </Link>
        <Link to="settings">ProfileSettings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
}
