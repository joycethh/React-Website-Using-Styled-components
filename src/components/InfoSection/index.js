import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElement";
import imageSrc from "../../images/svg-transferMoney.svg";
export const InfoSection = ({ lightBg, id, imgStart, lightText, darkText }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>Premium Bank</Topline>
                <Heading lightText={lightText}>
                  Unlimted Transactions with zero fees
                </Heading>
                <Subtitle darkText={darkText}>
                  Get acesss to our exclusive app that allows you to send
                  unlimited transactions without getting charged any fees.
                </Subtitle>
                <BtnWrap>
                  <Button to="home">Get Started</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imageSrc} alt="svg" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
