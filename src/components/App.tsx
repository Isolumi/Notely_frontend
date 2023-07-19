import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <Router>
      <Container className="min-h-screen d-flex align-items-center justify-content-center">
        <div className="w-full max-w-[400px]">
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route path="/update-profile" element={<PrivateRoute />}>
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/fogor" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </Router>
  );
}

export default App;
