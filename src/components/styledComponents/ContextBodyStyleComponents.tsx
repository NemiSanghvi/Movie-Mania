import styled from "styled-components";

export const CallToAction = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem; /* 64px */
  background-color: #000000;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1rem; /* 16px */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }
`;

export const Wrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 62.5rem; /* 1000px */
  overflow: hidden;
  position: relative;
  padding: 0;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1rem; /* 16px */
  border-radius: 0;
`;

export const Title = styled.div`
  flex-shrink: 0;
  width: 50rem; /* 800px */
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 100%;
  overflow: visible;
  position: relative;
  font-weight: 800;
  font-style: normal;
  font-family: "Wix Madefor Display", sans-serif;
  color: #457b9d;
  font-size: 2rem; /* 32px */
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
`;

export const ButtonDiv = styled.div`
  flex-shrink: 0;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  padding: 0;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0.625rem; /* 10px */
  border-radius: 0;
`;

export const Button1 = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  width: auto;
  height: 2.5rem; /* 40px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625rem; /* 10px */
  background-color: #e63946;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0.3125rem; /* 5px */
  border-radius: 0;
  margin: 0.3125rem; /* 5px */
`;

export const Button2 = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  width: auto;
  height: 2.5rem; /* 40px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625rem; /* 10px */
  background-color: #f1faee;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0.3125rem; /* 5px */
  border-radius: 0;
  margin: 0.3125rem; /* 5px */
`;

export const Font = styled.div`
  flex-shrink: 0;
  width: auto;
  height: auto;
  white-space: pre;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Space Mono", monospace;
  font-size: 0.875rem; /* 14px */
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
`;

export const Wrapper2 = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: auto;
  height: auto; /* 498px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6.25rem; /* 100px */
  background-color: #000000;
  overflow: hidden;
  flex: 1 0 0px;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 3.125rem; /* 50px */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }
`;

export const Title2 = styled.div`
  flex-shrink: 0;
  width: 65rem;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 1000px;
  overflow: visible;
  flex: 1 0 0px;
  position: relative;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 4rem;
  font-family: "Wix Madefor Display", sans-serif;
  color: #a8dadc;
  font-size: 3rem; /* 48px */
  letter-spacing: 0em;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: fit-content;
    padding-bottom: 0rem;
  }
`;

export const InfoColumn = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 190px */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 62.5rem;
  overflow: visible;
  flex: 1 0 0px;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 3.125rem; /* 50px */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const InfoRow1 = styled.div`
  flex-shrink: 0;
  flex: 1 0 0px;
  width: auto;
  height: min-content; /* 90px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 2.5rem; /* 40px */
  border-radius: 0;

  @media (max-width: 768px) {
    gap: 0; /* Adjust gap for smaller screens */
  }
`;

export const InfoRow2 = styled.div`
  flex-shrink: 0;
  flex: 1 0 0px;
  width: 1px;
  height: min-content; /* 190px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 1.25rem; /* 20px */
  border-radius: 0;
`;

export const InfoSubRow = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 190px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 0;
  border-radius: 0;
`;

export const InfoSubRowsColumn = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: auto;
  height: min-content; /* 40px */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 0;
  border-color: #0d0d0d;
  border-style: solid;
  border-top-width: 0;
  border-bottom-width: 0.0625rem; /* 1px */
  border-left-width: 0;
  border-right-width: 0;

  @media (max-width: 768px) {
    
  }
`;

export const Font2 = styled.div`
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
    width: min-content;
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;
