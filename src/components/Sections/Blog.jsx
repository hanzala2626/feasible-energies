import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
  <div className="whiteBg">
    <div className="container">
      <HeaderInfo>
        <h1 className="font40 extraBold">Our Project Success Stories</h1>
        <p className="font13">
          From solar installations to EPC services, we have delivered successful energy solutions across various projects.
          <br />
          Here's how we have helped our clients harness the power of solar energy to drive sustainability.
        </p>
      </HeaderInfo>
      <div className="row textCenter">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Rohini Solar Installation"
            text="A successful rooftop solar project that provided clean, sustainable energy to a residential complex."
            tag="Project"
            author="Team Solar, 1 week ago"
            action={() => alert("clicked")}
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Gurgaon Commercial EPC Project"
            text="We completed an EPC project for a commercial complex, cutting their energy costs by 40%."
            tag="Project"
            author="Team Solar, 2 weeks ago"
            action={() => alert("clicked")}
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Noida Industrial Solar Plant"
            text="Our team delivered a large-scale solar plant for an industrial site, contributing to cleaner energy production."
            tag="Project"
            author="Team Solar, 1 month ago"
            action={() => alert("clicked")}
          />
        </div>
      </div>
      <div className="row textCenter">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Dwarka Residential Solar Setup"
            text="This project brought renewable energy to a residential building, saving costs and supporting a green future."
            tag="Project"
            author="Team Solar, 3 weeks ago"
            action={() => alert("clicked")}
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Faridabad School Solar Power"
            text="Our installation for a school helped meet their energy needs using sustainable solar power."
            tag="Project"
            author="Team Solar, 1 month ago"
            action={() => alert("clicked")}
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
            title="Ghaziabad Solar Park"
            text="We developed a solar park in Ghaziabad, generating clean energy for the community."
            tag="Project"
            author="Team Solar, 2 months ago"
            action={() => alert("clicked")}
          />
        </div>
      </div>
      <div className="row flexCenter">
        <div style={{ margin: "50px 0", width: "200px" }}>
          <FullButton title="Load More" action={() => alert("clicked")} />
        </div>
      </div>
    </div>
  </div>
  <div className="lightBg" style={{ padding: "50px 0" }}>
    <div className="container">
      <HeaderInfo>
        <h1 className="font40 extraBold">What Our Clients Say</h1>
        <p className="font13">
          Our clients have shared their feedback on how our solar solutions helped them transition to renewable energy.
          <br />
          Here’s what they have to say about their experience working with us.
        </p>
      </HeaderInfo>
      <TestimonialSlider />
    </div>
  </div>
</Wrapper>

  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;