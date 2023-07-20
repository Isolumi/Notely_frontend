import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./UserAuth/Signup";
import Login from "./UserAuth/Login";
import ForgotPassword from "./UserAuth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./UserAuth/Dashboard";
import UpdateProfile from "./UserAuth/UpdateProfile";
import Homepage from "./Home/Homepage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          
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
    </Router>
  );
}

export default App;
