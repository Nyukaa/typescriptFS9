import { Outlet } from "react-router-dom";
import { Container, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
        Patientor
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Home
      </Button>
      <Divider hidden />
      <Outlet /> {/* Здесь будут рендериться страницы */}
    </Container>
  );
};

export default Layout;
