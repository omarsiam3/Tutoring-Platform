import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TutorJoin = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
  };

  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        {/* Intro Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Every tutor lives for that <i>lightbulb</i> moment
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We believe 1:1 tutoring can change a student’s life — and we’re
              always looking for tutors who share that belief. Join our tutor
              community to support the thousands of students learning online.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#ffb413", color: "#fff" }}
            >
              Become a Tutor
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "#f0f0f0",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>

        {/* Form Section */}
        <Box component="section" sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            One student. One tutor. Every week.
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Complete this form to connect with an enrollment advisor and learn
            about our academic tutoring programs.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  value={form.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  name="email"
                  fullWidth
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      required
                    />
                  }
                  label="By submitting my phone number and email address, I agree to be contacted and agree to terms and conditions."
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Why Join Section */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" gutterBottom>
            Why join our community of online tutors?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            We enable tutors to build connections with learners and take the
            behind-the-scenes scheduling and admin off your plate. We empower
            you with award-winning technology, so you can focus on helping
            students grow and succeed.
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: "Earn steady income",
                text: "Connect 1:1 with thousands of students and get paid weekly, without invoicing or paperwork.",
              },
              {
                title: "Build Your Network",
                text: "Join our private online community and engage with some pretty incredible people.",
              },
              {
                title: "Improve student outcomes",
                text: "When you help under served kids, you can change the course of their lives.",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#333",
                    color: "#fff",
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default TutorJoin;
