import { useState } from "react";
import React from "react";
import "../ReadMore/ReadMore.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button } from "@mui/material";

const SoftSkill = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="content">
       <div style={{marginTop:"-15px", marginBottom:"15px"}} data-aos="fade-left">
               <img src={require('../../Image/l3.jpg')} alt="" />

               </div>
      
      <span style={{ display: "flex", textAlign: "start" }} data-aos="fade-left">
        The term “soft skills” is a common buzzword that employers and upper
        management often use when it comes to enhancing workplace efficiency and
        hiring new job candidates. But what does it really mean? People aren’t
        naturally born with good communication and time management skills. These
        are soft skills that need to be developed and worked on over time. The
        Learning Needs provides exhaustive online and in-person soft skills
        training to help develop a positive and productive work culture.
      </span>
      <p
        style={{
          display: "flex",
          alignItems: "flex-start",
          fontSize: "20px",
          fontWeight: "500",
        }}
        data-aos="fade-right"
      >
        Our Soft Skills Workshop
      </p>
      <span style={{ display: "flex", textAlign: "start" }} data-aos="fade-left">
        Our soft skills workshops are custom-tailored to the needs of your
        company. We can help you identify specific areas of improvement and work
        with your team to enhance their personal, interpersonal, communication,
        conflict resolution, and time management skills. Using real-world
        examples and situations, our soft skills trainer are qualified to
        provide your company and employees with workable team building, conflict
        resolution, and communication strategies that boost their performance
        and confidence in the workplace. When it comes to developing essential
        soft skills, we know that there’s no one-size-fits-all solution or
        strategy that works across the board. That’s why our soft skills
        workshops concentrate on understanding the specific challenges faced by
        your organization so that we can help you aptly overcome them. Through
        step-by-step instruction and class participation, your team will learn
        how to harness the full power of each of their soft skills, play into
        their strengths while recognizing and working on their weaknesses so
        that they can operate at a much higher performance level. A diverse
        workforce means that each person has uniquely valuable traits that they
        bring to the table. Our soft skills training courses and workshops are
        designed to highlight those unique traits and put them to work for the
        greater good of your employees and your business.
      </span>

      <span className={`long-text ${collapse ? "expand" : ""}`}>
        <p
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: "20px",
            fontWeight: "500",
          }}
          data-aos="fade-right"
        >
          Our Customized Soft Skills Training Workshops
        </p>
        <span style={{ display: "flex", textAlign: "start" }} data-aos="fade-left">
          We keep up with the times at Learning Needs. Online soft skills
          training is pivotal for the modern workforce because it provides
          easily accessible resources and tools to engage remote employees and
          keep them up to date on practical changes that are going on in your
          organization. We offer custom-tailored and specialized soft skills
          training solutions designed to engage your team and generate and
          encourage creativity and give each person an opportunity to showcase
          their natural talents. At the same time, our esteemed soft skills
          consultants can teach your team members how to harness the full
          potential of their existing soft skills while developing other soft
          skills that may not come as naturally to them.
        </span>
        <p
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: "20px",
            fontWeight: "500",
          }}
          data-aos="fade-right"
        >
          Participate in Our Soft Skills Training Programs
        </p>
        <span style={{ display: "flex", textAlign: "start" }} data-aos="fade-left">
          The Learning Needs caters to companies across all industries and
          sizes. Whether you’re a new or established business, our goal is to
          help you take your organization to the next level by fully harnessing
          the strength of your employees’ soft skills.
        </span>
      </span>

      <Button
        style={{
          color: "#fff",
          backgroundColor: "#f58c00",
          display: "flex",
        }}
        variant="contained"
        data-aos="fade-left"
        onClick={() => setCollapse((prev) => !prev)}
      >
        Read More..
      </Button>
    </div>
  );
};
export default SoftSkill;
