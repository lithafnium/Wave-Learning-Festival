import styled from "styled-components";
import { device } from "@/theme";

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media ${device.tablet} {
    margin-top: 20px;
    flex-direction: row;
    width: 80%;
  }
  @media ${device.tabletL} {
    margin-top: 20px;
    flex-direction: row;
    width: 50%;
  }

`;