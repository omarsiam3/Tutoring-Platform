import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const testimonials = [
  {
    name: "Sofia R.",
    feedback:
      "This platform helped me go from failing math to getting an A. My tutor was so patient and clear!",
  },
  {
    name: "Jamal T.",
    feedback:
      "As a working student, I loved being able to schedule sessions around my time. Super flexible!",
  },
  {
    name: "Emily C.",
    feedback:
      "The tutors actually cared about how I learned best. It wasn't just about the test, it was about real understanding.",
  },
  {
    name: "Luis M.",
    feedback:
      "Honestly the best tutoring experience I’ve ever had. The platform was smooth, and the tutor was amazing.",
  },
];

const Testimonies = () => {
  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What Students Are Saying
        </Typography>

        <Grid container spacing={4} mt={2}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    “{t.feedback}”
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle2" align="right" color="text.secondary">
                      — {t.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Testimonies;
