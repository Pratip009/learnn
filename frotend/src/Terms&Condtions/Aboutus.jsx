import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
// import TermsImage from "../Image/about/terms.jpeg";
import { Link } from "react-router-dom";
import { CardHeader, Card, IconButton } from "@mui/material";
import PlayApp from "../component/Home/PlayApp.jsx";
// import FeaturedSlider from "./FeatureSlider";
import "aos/dist/aos.css";
import "./Aboutus.css";
import AOS from "aos";
import Groups3Icon from "@mui/icons-material/Groups3";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import YardIcon from "@mui/icons-material/Yard";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DvrIcon from "@mui/icons-material/Dvr";
import TaskIcon from "@mui/icons-material/Task";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import OurTeam from "../component/Home/OurTeam";
import Faq from "./Faq";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    // background:`url(${"../Image/Cricket-wepon/hero1.jpg"})`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container_12: {
    // padding: "2rem",
    textAlign: "center",
    maxWidth: "80%",
    overflow:"hidden"
  },
  image_about: {
    width: "100%",
    height: "auto",
    // marginTop: "3rem",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  title_about: {
    color: "#414141",
    fontSize: "25px",
    textAlign: "start",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    fontFamily: "'Saira Condensed',  sans-serif",
    maxWidth: "800px",
    lineHeight: "1.5",
    // margin: "1.5rem 0",
    color: "#292929",
    fontSize: "19px",
    fontWeight: "400 !important",
    textAlign: "justify",
    // padding: "0.8rem 0",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  introText_about2: {
    lineHeight: "1.5",

    marginTop: "-20px",
    color: "#292929",
    fontSize: "0.9rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 0",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const classes = useStyles();

  return (
    <>
    
    <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={require("../Image/about/abb.png")}
                alt="Learning needs"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <h1
                style={{
                  textAlign: "Start",
                  marginTop: "3rem",
                  fontFamily: "'Courgette', cursive",
                }}
              >
                About Learning Needs
              </h1> */}
              <div className="circle_text" data-aos="fade-left">
                <p className="non_important" style={{ textAlign: "Start" }}>
                  About{" "}
                  <span class="circle-sketch-highlight">Learning Needs</span>
                </p>
              </div>
              <p variant="body1" className={classes.introText_about}>
                Learning Needs is a training & management consulting company
                based in Kolkata in the lap of nature beside river Ganges,
                India. Learning Needs offers a variety of boutique services,
                tailored to each clients need. Our specialized expertise allows
                the Individual, Institution, Schools and Organizations to
                achieve their objectives; we are very much committed to the
                success of our clients and their individual
              </p>

              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#f58c00",
                  display: "flex",
                }}
                variant="contained"
                data-aos="fade-left"
              >
                Read More..
              </Button>
              {/* <Typography variant="body1" className={classes.introText_about}>
                CricketWeapon was founded by Lokesh Samant, a talented cricket
                player who has represented the Under 16 and Under 19 teams.
                Lokesh started this business to support his expenses and
                received an overwhelming response. He has sold cricket equipment
                to more than 20,000 customers till date. Now, he aims to expand
                his business to an international level by launching his own
                website and introducing new and genuine cricket products at
                competitive prices.
              </Typography> */}
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          {/* Learning needs traits */}

          {/* <Traits /> */}

          <div className="circle_text" data-aos="fade-left">
            <p className="non_important" style={{ textAlign: "Start" }}>
              {" "}
              <span class="circle-sketch-highlight">Learning Needs Traits</span>
            </p>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: "2rem" }}
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <Groups3Icon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      L-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      LEADERSHIP
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <PsychologyIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      E-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      EFFECTIVENESS
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <Diversity3Icon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      A-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      ATTITUDE
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <HandshakeIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      R-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      RELATIONSHIP
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <Diversity1Icon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      N-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      NEGOTIATION
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <TipsAndUpdatesIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      I-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      INNOVATION
                    </Typography>
                  }
                />
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: "2rem" }}
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <YardIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      N-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      NURTURE
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <AdsClickIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      G-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      GOAL
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <DvrIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      N-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      NEEDFUL
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <TaskIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      E-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      ESSENTIAL
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <AutoModeIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      E-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      EXCEPTIONAL
                    </Typography>
                  }
                />
              </Card>
            </Grid>
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <DeveloperModeIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      D-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      DEVELOPMENT
                    </Typography>
                  }
                />
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Grid item xs={4} md={2}>
              <Card style={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      style={{ color: "#f58c00" }}
                    >
                      <SettingsSuggestIcon fontSize="large" />
                    </IconButton>
                  }
                  title={
                    <Typography
                      style={{
                        color: "#f58c00",
                        fontSize: "25px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      S-
                    </Typography>
                  }
                  subheader={
                    <Typography
                      style={{
                        color: "#61677A",
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",

                        fontWeight: "600",
                      }}
                    >
                      SERVICES
                    </Typography>
                  }
                />
              </Card>
            </Grid>
          </Grid>
        </Container>

      <Container className={classes.container_12} style={{ maxWidth: "100%" }}>
        <div className="circle_text" data-aos="fade-left">
          <p className="non_important" style={{ textAlign: "Start" }}>
            {" "}
            <span class="circle-sketch-highlight">Our Team</span>
          </p>
        </div>
        <span className="sub_headings" data-aos="fade-right">
          Learning Needs dedicated leadership team is focused on delivering
          quality service and leadership development programs that exceed our
          clients’ expectations and help them achieve their goals.
        </span>
        <Container
          className={classes.container_12}
          style={{ marginTop: "3rem" }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} data-aos="fade-right">
              <h2
                style={{
                  textAlign: "Start",
                  marginTop: "0",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                }}
              >
                With us,you can build yourself to achieve your goals
              </h2>
              <p variant="body1" className={classes.introText_about2}>
                Learning Needs is committed to help its clients reach their
                goals. By providing an innovative environment, which makes a
                difference. Our strong sense of identification with client
                projects means that we are constantly striving to provide
                solutions, even for issues they aren’t yet aware of. To this
                end, we adopt a progressive approach to technology and marketing
                techniques. This sense of identification also means we value and
                promote seamless interaction with clients’ own teams, and ensure
                the best value is obtained from their budget. Our long
                experience at the top of the education and training business
                means we have expertise which reaches across a number of sectors
                and schools. But we know that things change, and we are
                constantly striving to adapt and improve.
              </p>

              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#f58c00",
                  display: "flex",
                }}
                variant="contained"
                data-aos="fade-left"
              >
                Read More..
              </Button>
              {/* <Typography variant="body1" className={classes.introText_about}>
                CricketWeapon was founded by Lokesh Samant, a talented cricket
                player who has represented the Under 16 and Under 19 teams.
                Lokesh started this business to support his expenses and
                received an overwhelming response. He has sold cricket equipment
                to more than 20,000 customers till date. Now, he aims to expand
                his business to an international level by launching his own
                website and introducing new and genuine cricket products at
                competitive prices.
              </Typography> */}
            </Grid>

            <Grid item xs={12} sm={6} data-aos="flip-left">
              <img
                src={require("../Image/Cricket-wepon/aboutus4.jpg")}
                alt="Learning needs"
                className={classes.image_about}
              />
            </Grid>
          </Grid>
        </Container>

        <div className="Our_Team">
          <OurTeam />
        </div>

        <Container
          className={classes.container_12}
          style={{ marginTop: "3rem" }}
        >
          {/* testimonials */}
          <span className="sub_headings" data-aos="fade-left">
            Pride of Pride of Learning Needs
          </span>
          {/* <h2 className="clients_headings" data-aos="fade-left">
              Clients sharing their experience
            </h2> */}
          <div className="circle_text" data-aos="fade-left">
            <p className="non_important" style={{ textAlign: "Start" }}>
              Clients sharing their{" "}
              <span class="circle-sketch-highlight">experience</span>
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <PlayApp />
          </div>
        </Container>
        <Container
          className={classes.container_12}
          style={{ marginTop: "3rem" }}
        >
          <div className="circle_text" data-aos="fade-left">
            <p className="non_important" style={{ textAlign: "Start" }}>
              Frequently Asked{" "}
              <span class="circle-sketch-highlight">Questions</span>
            </p>
          </div>

          <Faq />
        </Container>
        <Container
          className={classes.container_12}
          style={{ marginTop: "3rem" }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              {/* <h1
                style={{
                  textAlign: "Start",
                  marginTop: "3rem",
                  fontFamily: "'Courgette', cursive",
                }}
              >
                About Learning Needs
              </h1> */}
              <div className="circle_text" data-aos="fade-left">
                <p className="non_important" style={{ textAlign: "Start" }}>
                  {" "}
                  <span class="circle-sketch-highlight">Founder's Message</span>
                </p>
              </div>
              <p
                variant="body1"
                className={classes.introText_about}
                style={{ fontSize: "15px" }}
              >
                Consulting means different things to different people. For us,
                it is about being a trusted advisor that helps clients chart and
                walk the path to sustained success. We are not a solution
                looking for a problem—we see every projects and situation as
                unique. Our custom-tailored consulting engagements are based on
                deep listening and decades of experience across industries and
                issues. The solutions we craft are practical, realistic, and
                highly effective. We pride ourselves on having a seasoned and
                multidisciplinary team that can thoughtfully guide, support, and
                motivate leaders, teachers and organizations to achieve levels
                of performance they never have before.
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  margin: "0",
                  padding: "0",
                }}
              >
                With all the best wishes!
              </p>
              <p style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "600",
                  margin: "0",
                  padding: "0",
                  color:"orange"
                }}>Rahul Singh</p>

              {/* <Typography variant="body1" className={classes.introText_about}>
                CricketWeapon was founded by Lokesh Samant, a talented cricket
                player who has represented the Under 16 and Under 19 teams.
                Lokesh started this business to support his expenses and
                received an overwhelming response. He has sold cricket equipment
                to more than 20,000 customers till date. Now, he aims to expand
                his business to an international level by launching his own
                website and introducing new and genuine cricket products at
                competitive prices.
              </Typography> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={require("../Image/founder.jpg")}
                style={{ width: 400, height: 400 }}
                alt="Learning needs"
                className={classes.image_about}
              />
            </Grid>
          </Grid>
        </Container>

        <div className={classes.buttonContainer_about}>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "none" }}
          >
            <Button variant="contained" className={classes.button1_about}>
              Our Products
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "none" }}>
            <Button variant="contained" className={classes.button2_about}>
              Contact Us
            </Button>
          </Link>
        </div>
      </Container>
        
      
    </div>
    
      
   
    
    </>
  );
};

export default About_UsPage;
