import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
const Training = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
   
      style={{ width: "100%", backgroundColor:"white" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12} data-aos="fade-left">
        <div style={{marginTop:"4rem"}}>
                  <img src={require("../../Image/tar.jpg")} alt="" />
                </div>
        </Grid>
        <Grid item xs={12}>
        <div className="container___">
        <div >
          <TabList />
        </div>
      </div>
        </Grid>
      </Grid>
      

      {/* <MetaData title={"Training"} /> */}
      
    </div>
  );
};

export default Training;
