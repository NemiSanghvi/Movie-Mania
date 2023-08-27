import styled from "styled-components";

export const HypeConatainer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 50rem */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 6.25rem; */ /* Commented out since it's not in rem */
  /* mix-blend-mode: luminosity; */
  background-color: #000000;
  min-height: 50rem; /* 800px */
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1.25rem; /* 20px */
  border-radius: 0;

  @media (max-width: 768px) {
    min-height: 20rem; /* Adjust min-height for smaller screens */
  }
`;

export const BackgroundImg = styled.div` /* Changed "image" to "img" */
  box-sizing: border-box;
  flex-shrink: 0;
  width: auto;
  height: auto;
  display: block;
  overflow: hidden;
  opacity: 0.3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  border-radius: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  flex-shrink: 0;
  flex: 1 0 0; /* Removed "px" */
  width: auto;
  height: auto; /* 4.15rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 1000px;
  z-index: 10;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Oi", cursive;
  color: #ffffff;
  font-size: 5rem; /* 80px */
  letter-spacing: 0em;
  line-height: 1.1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;
