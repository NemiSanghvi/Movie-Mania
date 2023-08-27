import styled from "styled-components";

export const BlueBg = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: 31.25rem; /* 500px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6.25rem 3.125rem; /* 100px 50px */
  background-color: #457b9d;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0;
  border-radius: 0;

  @media (max-width: 768px) {
    height: auto;
    padding: 3.125rem 1.25rem; /* Adjust as needed */
  }
`;

export const RedBg = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  flex: 1 0 0; /* Removed "rem" */
  width: 0.00625rem; /* 0.1px */
  height: min-content; /* 43.125rem */ 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.25rem; /* 100px */
  background-color: #e63946;
  max-width: 62.5rem; /* 1000px */
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 3.125rem; /* 50px */
  border-radius: 0;
  border: 0.625rem solid #F1FAEE;

  @media (max-width: 768px) {
    flex: 1 0 0;
    width: 100%;
    max-width: none;
    padding: 3.125rem 1.25rem; /* Adjust as needed */
  }
`;

export const EpicTitle = styled.div`
  flex-shrink: 0;
  width: 50rem; /* 800px */
  height: auto;
  white-space: pre;
  max-width: 50rem; /* 800px */
  overflow: visible;
  z-index: 1;
  position: relative;
  font-weight: 800;
  font-style: normal;
  font-family: "Wix Madefor Display", sans-serif;
  color: #000000;
  font-size: 18.75rem; /* 300px */
  letter-spacing: 0em;
  line-height: 1.1;
  text-align: center;
`;

export const SubText = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 1.875rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Space Mono", monospace;
  color: #ffffff;
  font-size: 2rem; /* 32px */
  letter-spacing: -0.05em;
  line-height: 1.5;
  text-align: center;
  padding: 1.875rem; /* 30px */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust as needed */
    padding: 1rem 1.25rem; /* Adjust as needed */
  }
`;

export const Text = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 20rem */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6.25rem; /* 100px */
  background-color: #a8dadc;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0;
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 0.125rem 0.25rem; /* Adjust as needed */
  }
`;

export const Column = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 7.5rem */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 62.5rem; /* 1000px */
  overflow: visible;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 3.125rem; /* 50px */
  border-radius: 0;

  @media (max-width: 768px) {
    gap: 1.25rem; /* Adjust gap for smaller screens */
    padding: 1.875rem 1.25rem; /* Adjust padding for smaller screens */
    flex-direction: column;
  }
`;

export const Title2 = styled.div`
  flex-shrink: 0;
  flex: 1 0 0; /* Removed "rem" */
  width: 0.00625rem; /* 0.1px */
  height: auto; /* 3rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 800;
  font-style: normal;
  font-family: "Wix Madefor Display", sans-serif;
  color: #000000;
  font-size: 2.5rem; /* 40px */
  letter-spacing: 0em;
  line-height: 1.2;
  text-align: left;
  padding-right: 3.125rem; /* 50px */

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    flex: 0;
    font-size: 2rem; /* Adjust as needed */
    padding: 0 1.25rem; /* Adjust as needed */
  }
`;

export const Title2SubText = styled.div`
  flex-shrink: 0;
  flex: 1 0 0; /* Removed "rem" */
  width: 0.00625rem; /* 0.1px */
  height: auto; /* 7.5rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Space Mono", monospace;
  color: #e63946;
  font-size: 1.25rem; /* 20px */
  letter-spacing: 0em;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    flex: 0;
    font-size: 1rem; /* Adjust as needed */
    padding: 0 1.25rem; /* Adjust as needed */
  }
`;
