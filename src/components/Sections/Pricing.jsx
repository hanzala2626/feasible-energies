import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
    <div className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Our Consultancy Pricing Plans</h1>
          <p className="font13">
            Explore our tailored pricing packages for different consultancy services to meet your business needs.
            <br />
            Whether you are starting out or scaling up, we have a plan for you.
          </p>
        </HeaderInfo>
        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <PricingTable
              icon="roller"
              price="$29.99/mo"
              title="Basic Consultancy"
              text="Perfect for startups looking for initial guidance and support in the solar industry."
              offers={[
                { name: "Initial Consultation", cheked: true },
                { name: "Monthly Check-Ins", cheked: true },
                { name: "Project Evaluation", cheked: false },
                { name: "Customized Reports", cheked: false },
                { name: "Technical Support", cheked: false },
              ]}
              action={() => alert("clicked")}
            />
          </TableBox>
          <TableBox>
            <PricingTable
              icon="monitor"
              price="$49.99/mo"
              title="Advanced Consultancy"
              text="Designed for small and mid-sized businesses needing in-depth project insights."
              offers={[
                { name: "Initial Consultation", cheked: true },
                { name: "Monthly Check-Ins", cheked: true },
                { name: "Project Evaluation", cheked: true },
                { name: "Customized Reports", cheked: true },
                { name: "Technical Support", cheked: false },
              ]}
              action={() => alert("clicked")}
            />
          </TableBox>
          <TableBox>
            <PricingTable
              icon="browser"
              price="$59.99/mo"
              title="Premium Consultancy"
              text="Ideal for large-scale projects requiring full support from planning to implementation."
              offers={[
                { name: "Initial Consultation", cheked: true },
                { name: "Monthly Check-Ins", cheked: true },
                { name: "Project Evaluation", cheked: true },
                { name: "Customized Reports", cheked: true },
                { name: "Technical Support", cheked: true },
              ]}
              action={() => alert("clicked")}
            />
          </TableBox>
        </TablesWrapper>
      </div>
    </div>
  </Wrapper>
  
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




