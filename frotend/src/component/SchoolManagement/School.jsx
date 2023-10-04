import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import AOS from "aos";
import "aos/dist/aos.css";
const School = () => {
  const [collapse, setCollapse] = useState(false);
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="content1">
<div
      className="privacy-policy-container"
      style={{ display: "flex", width: "100%" }}
    >
      {/* <MetaData title={"Training"} /> */}
      <div className="container___">
        <div style={{ marginTop: "1rem" }}>
          <h3>School Management Service</h3>
          <span>
            The Learning Needs team has expansive expertise on school management
            issues and can provide all necessary support in various ways. Our
            executives are all well-respected figures in the education sector,
            along with our team, are here to advise you on any issues which your
            school may have. This could be staff performance issues, appointing
            a new governance structure, or even a new school build. Learning
            Needs subject matter experts will help you to provide all the
            support from conceptualization to setting your own world class
            school. We develop a finance model to suit our clients need, advice,
            on building design &amp; architecture, affiliation, curriculum,
            activity books and lesson plans, develop activities for students,
            staff recruitment and training workshop. It is important to gain a
            clear understanding of exactly what is required. We can then develop
            the project methodology and main delivery. We offer a full range of
            services, spanning organizational structure, project planning and
            development. At Learning Needs we value the relationships that we
            foster with our educational leaders of the schools we collaborate,
            sometimes over several years. While the knowledge of a school, its
            context and its strengths and challenges are built up by a single
            improvement advisor over time, sometimes a fresh pair of eyes or
            another expert with a particular set of skills or experience, can
            supplement the support of that improvement partner.
          </span>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "23px",
              fontWeight: "700",
            }}
          >
            We help people to start their own school
          </p>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                NO FRANCHISEE FEE
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                NO ROYALTY
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                NO LOCK IN PERIOD
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                YOU’RE SCHOOL
              </p>
            </Grid>
          </Grid>
        
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <p
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "500",
                }}
              >
                YOU’RE BRAND
              </p>
            </Grid>
          </Grid>
         
            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
              Starting a new school!
            </h1>
            <span>
              Our team has experience of developing and managing new schools
              from the very outset. We can advise on:
            </span>
            <List
              sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Architectural design" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Internal technical requirements" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Resource and equipment" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Prep schools who wish to expand to an all through school" />
              </ListItemButton>
            </List>

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
            New Start-up School
            </h1>
        
            <List
              sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers Training" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Infrastructure Designing" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Marketing Training" />
              </ListItemButton>
             
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Advertisement Plan" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Operation Plan" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Staff Selection Support" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Name Selection" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Area &amp; Site Selection" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Furniture &amp; Learning Aid Selection" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="School Organization Structure" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Collateral Designing Support" />
              </ListItemButton>
            </List>

            <h1 style={{ display: "flex", alignItems: "flex-start" }}>
            For Existing Schools...
            </h1>
            <List
              sx={{ width: "100%", maxWidth: 1000, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="LEARNING NEEDS provides all levels of support for schools leading up to their inspections,
observations and preparations for affiliation networks and collaborations." />
              </ListItemButton>
              <span style={{fontWeight:"600"}}>Expertise includes:</span>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Providing organizational structure, project planning and development" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Assisting with Governance and management, staffing and financial structures; growth plans
and projections" />
              </ListItemButton>
             
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Giving advice on management structure, management/leadership style, financial
management/control; P&amp;L accounts, management accounts/budgets" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Helping your school develop a strategic development or business plan and advising on
school/departmental reviews" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Expansion Plan" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Branding" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers Training" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Admission" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Marketing Training" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Operation Plan" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Furniture Selection" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Review &amp; Development" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Marketing Plan" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Infrastructure Designing" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Interior layout Designing" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Collateral Designing" />
              </ListItemButton>
            </List>
       
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default School;
