import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Router>

}

export default Profile;
