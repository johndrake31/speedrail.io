import { Container, Typography, Button, Link } from '@mui/material';
import React from 'react';
import { themeColors } from '../constants/colors';

const OurJourney = () => {
    const { WHITE, LAVENDER } = themeColors;

    return ( 
        <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: WHITE,
          minHeight: 200,
          minWidth: "100%",
          px: 5,
          py: 5,
        }}
      >
         <Typography
          variant="h4"
          color={LAVENDER}
          sx={{ textAlign: "center", marginTop: 3, paddingX: 3 }}
        >
          Be part of our journey. 
        </Typography>
        <br />
        <Typography
          variant="h6"
          color={LAVENDER}
          sx={{
            textAlign: "center",
            marginBottom: 2,
            paddingX: 3,
          }}
        >
          Our monitoring & alerting for restaurants is
          in pilot. Book a demo and secure your spot.
        </Typography>
        <Button
          color="inherit"
          size="medium"
          sx={{ my: 3, color: LAVENDER, fontSize: 20 }}
          variant="outlined"
        >
          <Link
            href="https://calendly.com/jeremy-spokesolve/30min"
            color="inherit"
            underline="none"
            sx={{ textAlign: "center", border: "" }}
            target="_blank"
            rel="noopener"
            fontSize={20}
          >
            Book a demo
          </Link>
        </Button>
      </Container>
     );
}
 
export default OurJourney;