import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const simulateLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          resolve("Login successful!");
        } else {
          reject("Invalid email or password");
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await simulateLogin(email, password);
      alert(res); // Placeholder for future redirect/token handling
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6} alignItems="center">
          <Box flex={1} textAlign="center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sign In Illustration"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Box flex={1} component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
            <Typography variant="h4" textAlign="center" mb={3}>
              Sign In
            </Typography>

            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
              />
              <Typography variant="body2" component="a" href="#" color="text.secondary">
                Forgot password?
              </Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#ffb413", color: "#fff" }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </Button>

            <Typography variant="body2" align="center" mt={4}>
              or sign up with:
            </Typography>

            <Stack direction="row" justifyContent="center" spacing={2} mt={1}>
              <IconButton>
                <FacebookOutlinedIcon color="primary" />
              </IconButton>
              <IconButton>
                <GoogleIcon color="error" />
              </IconButton>
              <IconButton>
                <XIcon color="action" />
              </IconButton>
              <IconButton>
                <GitHubIcon color="action" />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
