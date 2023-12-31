import { Card, Button, Alert, Container } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState<string>("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      setError("Failed to logout");
    }
  }

  return (
    <Container className="min-h-screen d-flex align-items-center justify-content-center">
      <div className="w-full max-w-[400px]">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>
            {currentUser?.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-full text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </Container>
  );
}
