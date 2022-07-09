import React from "react";
import {
  ServicesContainer,
  ServiceH1,
  ServiceWarp,
  ServiceCard,
  ServiceH2,
  ServiceP,
} from "./ServiceElement";

const Service = () => {
  return (
    <>
      <ServicesContainer id="service">
        <ServiceH1>Our Services</ServiceH1>
        <ServiceWarp>
          <ServiceCard>
            <ServiceH2>Reduce Expense</ServiceH2>
            <ServiceP>
              We help reduce your fees and increase your revenues
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceH2>Virtual Office</ServiceH2>
            <ServiceP>
              You can access our platform anywhere in the world.
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceH2>Premium Benfits</ServiceH2>
            <ServiceP>
              Unlock our special membership card that offers 5% cash back.
            </ServiceP>
          </ServiceCard>
        </ServiceWarp>
      </ServicesContainer>
    </>
  );
};

export default Service;
