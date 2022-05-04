import { css } from "@emotion/css";

export const CounterContentWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-size: 20px;
  }
  & .count {
    margin-right: 10px;
  }

  & .button {
    padding: 10px;
  }
`;

export const PatternWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
`;
