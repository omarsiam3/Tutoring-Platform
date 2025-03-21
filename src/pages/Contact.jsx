/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Alert } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        {submitted ? (
          <Alert severity="success" sx={{ mt: 4, textAlign: "center" }}>
            Thanks for reaching out! We'll get back to you soon.
          </Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={form.name}
              onChange={handleChange}
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              value={form.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#ffb413" }}>
              Send Message
            </Button>
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
