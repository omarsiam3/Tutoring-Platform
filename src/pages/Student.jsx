/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Student = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    helpWith: "",
    role: "",
    studentType: "",
    subject: "",
    agreeToTerms: false,
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
    alert("Thank you for applying! Your info has been received.");
  };

  const subjects = [
    "Elementary Maths", "Midlevel Maths", "Algebra", "Algebra II", "Geometry", "Trigonometry",
    "Pre-calculus", "Calculus", "Finite Math", "Biology", "Chemistry", "Earth Science",
    "Physics", "History", "Essay Writing", "Reading", "Spanish", "Career Help"
  ];

  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Tailored tutoring, Anytime
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Pave your path to academic success with our exceptional online tutorial services.
              We offer a personalized learning experience tailored to each student's needs.
              Our expert tutors are committed to helping you succeed.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#ffb413", color: "#fff" }}
            >
              Apply
            </Button>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Box
              component="img"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Student Learning"
              sx={{ maxWidth: "100%", height: "auto", borderRadius: 2 }}
            />
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 6 }} />

        {/* Application Form */}
        <Typography variant="h5" gutterBottom>
          One student. One tutor. Every week.
        </Typography>
        <Typography variant="body1" mb={3}>
          Complete this form to connect with an enrollment advisor and learn about our academic tutoring programs.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mb: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>I need help with</InputLabel>
                <Select
                  name="helpWith"
                  value={form.helpWith}
                  label="I need help with"
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="homework">Homework</MenuItem>
                  <MenuItem value="test prep">Test Prep</MenuItem>
                  <MenuItem value="subject help">Subject Help</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>I am a...</InputLabel>
                <Select
                  name="role"
                  value={form.role}
                  label="I am a..."
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="primary">Primary school student</MenuItem>
                  <MenuItem value="elementary">Elementary student</MenuItem>
                  <MenuItem value="high">High School student</MenuItem>
                  <MenuItem value="college">College Student</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select
                  name="subject"
                  value={form.subject}
                  label="Subject"
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {subjects.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={form.agreeToTerms}
                    onChange={handleChange}
                  />
                }
                label="By submitting my phone number and email address, I agree to be contacted and agree to terms and conditions."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#000", color: "#fff" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Student;
