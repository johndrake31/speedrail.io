import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
  Link,
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { themeColors } from "../constants/colors";
import { founders } from "../constants/team";

const Team = () => {
  const matches = useMediaQuery("(min-width:660px)");
  const { WHITE, PRIME_BLUE } = themeColors;

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: PRIME_BLUE,
          minHeight: 300,
          minWidth: "100%",
        }}
      >
        <Typography
          variant="h3"
          color={"white"}
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          Our Purpose
        </Typography>
        <Typography
          variant="h5"
          color={"white"}
          sx={{ textAlign: "center", marginTop: 3, marginBottom: 2 }}
        >
          To revolutionize restaurant technology with radical openness,
          partnerships, and excellence.
        </Typography>
        <br />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: WHITE,
          paddingTop: 5,
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h3"
          color={PRIME_BLUE}
          sx={{ textAlign: "center", marginTop: 3, marginBottom: 3 }}
        >
          Our Founders
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}
        >
          {founders &&
            founders.map(
              (card, index) =>
                card.founder && (
                  <>
                    <Card
                      key={card.id}
                      sx={{
                        maxWidth: 345,
                        paddingX: 4,
                        paddingY: 3,
                        marginX: 2,
                        marginY: 2,
                        backgroundColor: PRIME_BLUE,
                        flex: matches ? "1 1 0": 'none',
                      }}
                    >
                      <CardActionArea>
                        <Avatar
                          sx={{ width: 100, height: 100 }}
                          src={card.image}
                          alt={"founder image"}
                        />

                        <CardContent>
                          <Typography
                            color={WHITE}
                            gutterBottom
                            variant="h4"
                            component="div"
                          >
                            {card.firstName + " " + card.lastName}
                          </Typography>
                          <Typography
                            color={WHITE}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {card.title}
                          </Typography>
                          <Typography color={WHITE} variant="body2">
                            {card.blurb}
                          </Typography>
                        </CardContent>
                        <Link sx={{color: WHITE}} href={card.linkedin} target="_blank" rel="noopener">
                          {card.linkedin && <LinkedInIcon/>}
                        </Link>
                        {card.email && <Link sx={{color: WHITE, ml: 1}} href={`mailto:${card.email}`} target="_blank" rel="noopener noreferrer">
                          {card.email && <EmailIcon/>}
                        </Link>}
                      </CardActionArea>
                    </Card>
                    <br />
                  </>
                ),
            )}
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
          backgroundColor: PRIME_BLUE,
          paddingTop: 5,
        }}
      >
        <Typography
          variant="h3"
          color={"white"}
          sx={{ textAlign: "center", marginTop: 3, marginBottom: 3 }}
        >
          Our Team
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            marginBottom: 5,
          }}
        >
          {founders &&
            founders.map(
              (card) =>
                !card.founder && (
                  <>
                    <Card
                      key={card.id}
                      sx={{
                        maxWidth: 345,
                        paddingX: 4,
                        paddingY: 3,
                        marginX: 2,
                        marginY: 2,
                        backgroundColor: "white",
                        flex: matches ? "1 1 0": 'none',
                      }}
                    >
                      <CardActionArea>
                        <Avatar
                          sx={{ width: 100, height: 100 }}
                          src={card.image}
                          alt="green iguana"
                        />

                        <CardContent>
                          <Typography
                            color={PRIME_BLUE}
                            gutterBottom
                            variant="h4"
                            component="div"
                          >
                            {card.firstName + " " + card.lastName}
                          </Typography>
                          <Typography
                            color={PRIME_BLUE}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {card.title}
                          </Typography>
                          <Typography color={PRIME_BLUE} variant="body2">
                            {card.blurb}
                          </Typography>
                        </CardContent>
                        <Link href={card.linkedin} target="_blank" rel="noopener">
                          {card.linkedin && <LinkedInIcon/>}
                        </Link>
                       
                      </CardActionArea>
                    </Card>
                    <br />
                  </>
                ),
            )}
        </Box>
      </Container>
    </>
  );
};

export default Team;
