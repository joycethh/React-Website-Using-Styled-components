import React from "react";
import {
  ServicesContainer,
  ServiceH1,
  ServiceWarp,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServiceElement";

import Icon1 from "../../images/svg-saving.svg";
import Icon2 from "../../images/svg-sucess.svg";
import Icon3 from "../../images/svg-file.svg";
const Service = () => {
  return (
    <>
      <ServicesContainer id="service">
        <ServiceH1>Our Services</ServiceH1>
        <ServiceWarp>
          <ServiceCard>
            <ServiceIcon src={Icon1} />
            <ServiceH2>Reduce Expense</ServiceH2>
            <ServiceP>
              We help reduce your fees and increase your revenues
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon src={Icon2} />
            <ServiceH2>Virtual Office</ServiceH2>
            <ServiceP>
              You can access our platform anywhere in the world.
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon src={Icon3} />
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
