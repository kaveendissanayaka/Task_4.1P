import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "white" }}
          >
            Dev @ Deakin
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Some footer content goes here.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 1
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 2
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 3
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              href="https://facebook.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Facebook sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Twitter sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Instagram sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <LinkedIn sx={{ color: 'white' }} />
            </IconButton>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 2, color: 'white' }}
            >
            {"© "}
            {new Date().getFullYear()}
            {" Dev @ Deakin. All rights reserved."}
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
