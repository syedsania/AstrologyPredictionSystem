import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AstrologicalPredictionSystem
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <div class="footer__redes">
    <ul class="footer__redes-wrapper">
      <li>
        <a href="#" class="footer__link">
          <i class="fab fa-facebook-f"></i>
          facebook
        </a>
        </li>
      <li>
        <a href="#" class="footer__link">
          <i class="fab fa-twitter"></i>
          twitter
        </a>
      </li>
      <li>
        <a href="#" class="footer__link">
          <i class="fab fa-instagram"></i>
          instagram
        </a>
      </li>
      <li>
        <a href="#" class="footer__link">
          <i class="fab fa-youtube"></i>
          youtube
        </a>
      </li>
    </ul>
    <b>Disclaimer :</b> The testimonials provided on our website are personal views and experiences of our clients. We do not make any type of false claims of guaranteed results as we are not GODS or HIS decendants. We promise the best of the services with truth, faith and devotion.
    </div>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}