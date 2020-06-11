import styled from "styled-components";
import { device } from "@/theme";
import { Colors } from "@/styles";

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${Colors.WLF_YELLOW};

  & p {
    color: #eeeeee;
    font-weight: 600;
  }
`;

export const FooterLeft = styled.div`
  padding-left: 15px;
  width: 50%;
  & hr {
    border: 1px solid #ffffff;
    width: 80%;
    margin: 0px;
  }

  a {
    color: #ffffff;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  @media ${device.mobleS} {
    max-width: 320px;
  }
  @media ${device.tablet} {
    max-width: 768px;
  }
  @media ${device.tabletL} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 1024px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Social = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 15px 40px 15px 40px;

  border-radius: 40px;
  border: none;
  background-color: #6e00ff;
  margin-left: 15px;
  color: #eeeeee !important;
  font-weight: 600;
  font-size: 16px;
  transition: 0.2s;

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
