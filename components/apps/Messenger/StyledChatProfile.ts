import styled from "styled-components";

const StyledChatProfile = styled.span`
  figure {
    display: flex;
    flex-direction: column;
    place-items: center;

    img,
    svg {
      aspect-ratio: 1/1;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 72px;
      margin: 15px 0;
      max-height: 72px;
      max-width: 72px;
      min-height: 72px;
      min-width: 72px;
      width: 72px;
    }

    figcaption {
      color: #fff;
      display: flex;
      flex-direction: column;
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 10px;
      place-items: center;
      text-align: center;

      div.about {
        color: rgb(255, 255, 255, 55%);
        font-size: 10px;
        font-weight: 400;
        padding-top: 5px;
        width: 60%;
      }

      div.encryption {
        background-color: rgb(255, 255, 255, 15%);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 600;
        gap: 2px;
        margin: 10px;
        padding: 10px 20px;

        span:last-child {
          font-weight: 100;
        }
      }
    }
  }
`;

export default StyledChatProfile;