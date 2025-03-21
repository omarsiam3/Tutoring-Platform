import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const services = [
  {
    title: "1-on-1 Tutoring",
    description:
      "Personalized sessions tailored to your pace and learning style.",
  },
  {
    title: "Test Prep",
    description: "Targeted help for SAT, ACT, GRE, and other major exams.",
  },
  {
    title: "Homework Help",
    description: "On-demand support for challenging assignments and projects.",
  },
  {
    title: "Language Support",
    description: "Tutors available for English, Spanish, French, and more.",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>

        <Grid container spacing={4} mt={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
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

export default Services;
