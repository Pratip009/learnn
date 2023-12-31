import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
// import FeaturedSlider from "./FeatureSlider";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import TeamMessage from "./TeamMessage";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HailIcon from "@mui/icons-material/Hail";
import GoalsObjective from "./GoalsObjective";
import NewsFeed from "./NewsFeeds";

function Home() {
  // we provided all parameter for react-alert at index.js
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <>
            <MataData title="Learning Needs" />
            <div className="Home_Page">
              <div className="heroSlider_Home">
                <HeroSlider />;
              </div>
              <div className="background_image">
                <div
                  className="text_container"
                  style={{ backgroundColor: "transparent", padding: "20px" }}
                >
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid p xs={12} md={6}>
                      <p
                        className="container_element_large_text"
                        data-aos="fade-right"
                      >
                        Our services help you succeed in business
                      </p>

                      <p
                        className="container_element_small_text"
                        data-aos="fade-right"
                      >
                        Learning Needs is a training & management consulting
                        company based in Kolkata in the lap of nature beside
                        river Ganges, India. Learning Needs offers a variety of
                        boutique services, tailored to each clients need. Our
                        specialized expertise allows the Individual,
                        Institution, Schools and Organizations to achieve their
                        objectives; we are very much committed to the success of
                        our clients and their individual.
                      </p>
                      <Button
                        style={{ color: "#fff", backgroundColor: "#f58c00" }}
                        variant="contained"
                        data-aos="fade-right"
                      >
                        Read More..
                      </Button>
                    </Grid>
                    <Grid p xs={12} md={6}>
                      {/* notice */}
                      <p
                        className="container_element_large_text"
                        data-aos="fade-left"
                      >
                        News Feed
                      </p>
                      <Card
                        style={{
                          maxHeight: 150,
                          overflow: "auto",
                          backgroundColor: "transparent",
                          borderRadius: 0,
                          boxShadow: "none",
                          marginTop:"10px",
                        }}
                        data-aos="fade-left"
                      >
                        <List>
                          <NewsFeed />
                        </List>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ marginTop: "3rem" }}
                  >
                    <Grid item xs={12} md={6} data-aos="flip-right">
                      <Card
                        sx={{
                          maxWidth: 345,
                          borderRadius: "30px",
                          margin: "0 auto",
                          padding: "0.1em",
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={require("../../Image/lap.jpg")}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "50%",
                              bgcolor: "#f58c00bc",
                              color: "white",
                              padding: "10px",
                              height: "45rem",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{ backgroundColor: "#f58c00" }}
                                // variant="rounded"
                                sx={{ width: 56, height: 56 }}
                              >
                                <MenuBookIcon fontSize="large" />
                              </Avatar>
                              <Typography variant="h5" className="training">
                                School Management Service
                              </Typography>
                              <IconButton
                                disableRipple={true}
                                style={{
                                  color: "white",
                                  width: "35px",
                                  height: "35px",
                                  // backgroundColor: "#FFFFFF",
                                  // boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                                }}
                              >
                                <ArrowForwardIcon />
                              </IconButton>
                            </div>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6} data-aos="flip-left">
                      <Card sx={{ maxWidth: 345, height: 200 }}>
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={require("../../Image/off.jpg")}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "50%",
                              bgcolor: "#02a1e5af",
                              color: "white",
                              padding: "10px",
                              height: "45rem",
                            }}
                          >
                            <div className="overlay_section">
                              <Avatar
                                style={{ backgroundColor: "#02a1e5" }}
                                // variant="rounded"
                                sx={{ width: 56, height: 56 }}
                              >
                                <HailIcon fontSize="large" />
                              </Avatar>
                              <Typography variant="h5" className="training">
                                Training And Development Program
                              </Typography>
                              <IconButton
                                disableRipple={true}
                                style={{
                                  color: "white",
                                  width: "35px",
                                  height: "35px",
                                  // backgroundColor: "#FFFFFF",
                                  // boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                                }}
                              >
                                <ArrowForwardIcon />
                              </IconButton>
                            </div>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </div>

              {/* <div className="feature" style={{ marginTop: "3.7rem" }}>
                <h2 className="headings" data-aos = "fade-right"
                  
                >
                  Featured Products
                </h2>
                {products &&
             
                
                       <FeaturedSlider  products ={products}/> }
                  
                 
              
              </div> */}

              {/* <h2 className="headings" data-aos="fade-left">
                Find the right product for you
              </h2> */}
              <div className="circle_text" data-aos="fade-left">
                <p className="non_important">
                  Find the{" "}
                  <span class="circle-sketch-highlight">right product</span> for
                  you{" "}
                </p>
              </div>
              <span className="sub_headings" data-aos="fade-right">
                you don't have to struggle alone,you have got our assistance and
                help
              </span>

              <div className="trending-products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
              <div className="text_container" style={{ marginTop: "10vh" }}>
                {/* Team Message section */}
                <TeamMessage />

                {/* goals and objective */}

                {/* <h2 className="headings" data-aos="fade-left">
                  our goals and objective
                </h2> */}
                <div className="circle_text" data-aos="fade-left">
                  <p className="non_important">
                    our{" "}
                    <span class="circle-sketch-highlight">
                      goals and objective
                    </span>{" "}
                  </p>
                </div>
                <div
                  style={{
                    marginBottom: "3rem",
                    paddingTop: 0,
                  }}
                >
                  <GoalsObjective />
                </div>

                {/* Learning needs traits */}

                {/* <Traits /> */}
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
}

export default Home;
