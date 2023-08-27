import styled from "styled-components";

export const QuestionareContainer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 28.3125rem */
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
  gap: 3.75rem; /* 60px */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }
`;

export const Title = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 3.5625rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 62.5rem; /* 1000px */
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Oi", sans-serif;
  color: #ffffff;
  font-size: 3rem; /* 48px */
  letter-spacing: 0em;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

export const QuestionsRow = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 8.5rem */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 62.5rem; /* 1000px */
  overflow: hidden;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 6.25rem; /* 100px */
  border-radius: 0;

  @media (max-width: 768px) {
    gap: 1rem; /* Adjust gap for smaller screens */
    flex-direction: column;
  }
`;

export const QandA = styled.div`
  flex-shrink: 0;
  flex: 1 0 0; /* Removed "px" */
  width: 1px;
  height: min-content; /* 8.5rem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%; /* Removed "px" */
  overflow: visible;
  position: relative;
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 1.5625rem; /* 25px */
  border-radius: 0;

  @media (max-width: 768px) {
    gap: 1rem; 
    width: auto;
    padding-bottom: 2rem;
  }
`;

export const AnswerFont = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 6rem */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 25rem; /* 400px */
  overflow: visible;
  flex: 1 0 0; /* Removed "px" */
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Space Mono", monospace;
  /* color: #f4d35e; */
  font-size: 1rem; /* 16px */
  letter-spacing: 0em;
  line-height: 1.5;
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;
