import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
    <div className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Our Solar Projects in Delhi NCR</h1>
          <p className="font13">
            We have successfully executed a variety of solar power projects across the Delhi NCR region, providing sustainable energy solutions to our clients.
          </p>
        </HeaderInfo>
        <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg1}
              title="Rohini Solar Installation"
              text="A rooftop solar panel system installed in Rohini, providing clean energy for residential use and reducing electricity costs."
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg2}
              title="Gurgaon Commercial Solar Project"
              text="A large-scale solar power system deployed for a commercial complex in Gurgaon, significantly reducing their carbon footprint."
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg3}
              title="Noida Industrial Solar EPC"
              text="Complete EPC (Engineering, Procurement, and Construction) services for an industrial solar plant in Noida, powering sustainable manufacturing."
              action={() => alert("clicked")}
            />
          </div>
        </div>
        <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg4}
              title="Dwarka Residential Solar Setup"
              text="Installation of solar panels for residential apartments in Dwarka, ensuring efficient energy consumption and lower utility bills."
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg5}
              title="Faridabad Solar Power System"
              text="A solar power system installed in Faridabad for a school, helping to meet their energy needs through renewable sources."
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg6}
              title="Ghaziabad Solar Park"
              text="Developing a solar park in Ghaziabad, providing clean energy to the community and promoting eco-friendly practices."
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
    <div className="lightBg">
      <div className="container">
        <Advertising className="flexSpaceCenter">
          <AddLeft>
            <AddLeftInner>
              <ImgWrapper className="flexCenter">
                <img className="radius8" src={AddImage2} alt="solar project" />
              </ImgWrapper>
            </AddLeftInner>
          </AddLeft>
          <AddRight>
            <h4 className="font15 semiBold">A Few Words About Our Company</h4>
            <h2 className="font40 extraBold">Harnessing Solar Energy for a Sustainable Future</h2>
            <p className="font12">
              We specialize in providing solar energy solutions that power homes, businesses, and communities across Delhi NCR. Our projects are designed to deliver clean and reliable energy, reducing dependence on non-renewable resources and fostering sustainability.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <div style={{ width: "190px" }}>
                <FullButton title="Get Started" action={() => alert("clicked")} />
              </div>
              <div style={{ width: "190px", marginLeft: "15px" }}>
                <FullButton title="Contact Us" action={() => alert("clicked")} border />
              </div>
            </ButtonsRow>
          </AddRight>
        </Advertising>
      </div>
    </div>
  </Wrapper>
  
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
