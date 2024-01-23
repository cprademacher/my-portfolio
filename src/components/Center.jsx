import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

// eslint-disable-next-line react/prop-types
export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
