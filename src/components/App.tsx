import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./userAuth/Signup";
import Login from "./userAuth/Login";
import ForgotPassword from "./userAuth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./userAuth/Dashboard";
import UpdateProfile from "./userAuth/UpdateProfile";
import Homepage from "./home/Homepage";

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
