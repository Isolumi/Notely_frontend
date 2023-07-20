import { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(
        emailRef.current?.value ?? "",
        passwordRef.current?.value ?? ""
      );
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <Container className="min-h-screen d-flex align-items-center justify-content-center">
      <div className="w-full max-w-[400px]">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button className="w-full mt-4" type="submit" disabled={loading}>
                Log In
              </Button>
            </Form>
            <div className="w-full text-center mt-3">
              <Link to="/fogor">Forgot Password</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-full text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}
