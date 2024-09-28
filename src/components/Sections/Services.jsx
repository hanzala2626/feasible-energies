import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
  <div className="lightBg" style={{ padding: "50px 0" }}>
    <div className="container">
      <ClientSlider />
    </div>
  </div>
  <div className="whiteBg" style={{ padding: "60px 0" }}>
    <div className="container">
      <HeaderInfo>
        <h1 className="font40 extraBold">Our Solar Power Services</h1>
        <p className="font13">
          We provide end-to-end solar power solutions, including maintenance, EPC (Engineering, Procurement, and Construction), 
          and installation & commissioning of solar projects. Our goal is to deliver clean and sustainable energy to meet your needs.
        </p>
      </HeaderInfo>
      <ServiceBoxRow className="flex">
        <ServiceBoxWrapper>
          <ServiceBox
            icon="maintenance"
            title="Solar Power Maintenance"
            subtitle="We offer comprehensive maintenance services to ensure your solar power systems operate efficiently and effectively over time."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="epc"
            title="Project EPC"
            subtitle="Our EPC services cover every stage of your solar project, from engineering and procurement to construction, ensuring seamless execution."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="installation"
            title="Installation & Commissioning"
            subtitle="We provide expert installation and commissioning services to get your solar power systems up and running with minimal hassle."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="consulting"
            title="Consultation & Design"
            subtitle="We offer customized consultation and system design services to create a solar power solution tailored to your specific requirements."
          />
        </ServiceBoxWrapper>
      </ServiceBoxRow>
    </div>
    <div className="lightBg">
      <div className="container">
        <Advertising className="flexSpaceCenter">
          <AddLeft>
            <h4 className="font15 semiBold">A Few Words About Our Company</h4>
            <h2 className="font40 extraBold">Powering the Future with Solar Energy</h2>
            <p className="font12">
              We specialize in providing sustainable energy solutions through solar power. From maintenance and EPC to installation and commissioning, 
              we ensure your solar projects are completed with precision and quality, helping you harness the power of the sun for a greener tomorrow.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <div style={{ width: "190px" }}>
                <FullButton title="Get Started" action={() => alert("clicked")} />
              </div>
              <div style={{ width: "190px", marginLeft: "15px" }}>
                <FullButton title="Contact Us" action={() => alert("clicked")} border />
              </div>
            </ButtonsRow>
          </AddLeft>
          <AddRight>
            <AddRightInner>
              <div className="flexNullCenter">
                <AddImgWrapp1 className="flexCenter">
                  <img src={AddImage1} alt="solar installation" />
                </AddImgWrapp1>
                <AddImgWrapp2>
                  <img src={AddImage2} alt="solar maintenance" />
                </AddImgWrapp2>
              </div>
              <div className="flexNullCenter">
                <AddImgWrapp3>
                  <img src={AddImage3} alt="solar project" />
                </AddImgWrapp3>
                <AddImgWrapp4>
                  <img src={AddImage4} alt="solar power" />
                </AddImgWrapp4>
              </div>
            </AddRightInner>
          </AddRight>
        </Advertising>
      </div>
    </div>
  </div>
</Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
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
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;