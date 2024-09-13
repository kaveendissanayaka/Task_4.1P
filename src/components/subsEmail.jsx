import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SubscribeForm() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Divider style={{ margin: "10px 0" }} />
        <Container
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, textAlign: "center", margin: "20px", color: 'white' }}
          >
            Subscribe to our Newsletter
          </Typography>
          <Box
            component="form"
            action="/subscribe"
            method="POST"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
            <Button type="submit" variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Container>
        <Divider style={{ margin: "10px 0" }} />
      </Container>
    </ThemeProvider>
  );
}