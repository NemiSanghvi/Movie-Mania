import styled from "styled-components";

export const FooterBg = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 13rem */ 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.25rem; /* 100px */
  background-color: #000000;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1.25rem; /* 20px */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 3.125rem; /* 50px */
  }
`;

export const CopyWrite = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 2rem */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 0;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    width: 20rem;
  }
`;

export const Font3 = styled.div`
  flex-shrink: 0;
  width: 25rem;
  height: auto;
  white-space: pre-wrap;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Space Mono", monospace;
  color: #f1faee;
  font-size: 1.25rem; /* 20px */
  letter-spacing: 0;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 768px) {
    width: 15rem;
    /* max-width: min-content; */
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;