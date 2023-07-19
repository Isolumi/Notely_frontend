import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <Container className="min-h-screen d-flex align-items-center justify-content-center">
        <div className="w-full max-w-[400px]">
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </Router>
  );
}

export default App;
