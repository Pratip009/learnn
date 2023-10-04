import React from "react";
import AOS from "aos";
import Price from "../../Terms&Condtions/Price";
import { Grid } from "@material-ui/core";
import "aos/dist/aos.css";
const Service = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
  
      style={{  width: "100%" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <div style={{marginTop:"4rem"}}>
                  <img src={require("../../Image/penn.jpg")} alt="" />
                </div>
        </Grid>
        <Grid item xs={12}></Grid>
        <div className="container___">
        <div className="circle_text" data-aos="fade-left">
          <p className="non_important" style={{ textAlign: "Start" }}>
            {" "}
            <span class="circle-sketch-highlight">Services</span> of Learning
            Needs
          </p>
        </div>
        <p
          style={{ fontSize: "16px", fontWeight: "600" }}
          data-aos="fade-right"
        >
          {" "}
          Our services help you succeed in business
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif" }} data-aos="fade-left">
          We have designed our Training & Development Program to help today’s
          aspiring professional succeed in and increasingly competitive,
          increasingly diverse business environment.
        </p>

        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          data-aos="fade-right"
        >
          We are very much committed to the success of our clients and their
          individual
        </p>
        <h3 data-aos="fade-left">About Learning Needs</h3>
        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          data-aos="fade-right"
        >
          Learning Needs is a training & management consulting company based in
          Kolkata in the lap of nature beside river Ganges, India. Learning
          Needs offers a variety of boutique services, tailored to each clients
          need. Our specialized expertise allows the Individual, Institution,
          Schools and Organizations to achieve their objectives; we are very
          much committed to the success of our clients and their individual.
        </p>
        <h3 data-aos="fade-left">About our future target</h3>
        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          data-aos="fade-right"
        >
          Our future target is to provide training, information, resources,
          support and guidance for a variety of groups including: school owners,
          businessman, young people who are at or have recently left school,
          adults looking to expand their skills, educators, employers, and
          parents.
        </p>
        <div style={{ marginTop: "3rem" }}>
          <Price />
        </div>
      </div>
      </Grid>
      {/* <MetaData title={"Service"} /> */}
      
    </div>
  );
};

export default Service;
