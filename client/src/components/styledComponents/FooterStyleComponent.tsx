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
`;

export const CopyWrite = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 2rem */
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
`;
