import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Container className="min-h-screen d-flex align-items-center justify-content-center">
        <div className="w-full max-w-[400px]">
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </Router>
  );
}

export default App;
