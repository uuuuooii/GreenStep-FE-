import styled from 'styled-components';

export const SecondModalBody = styled.div`
  display: ${(props) => (props.display == 2 ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  max-height: 667px;
  max-width: 375px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const SecondModalSection = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: white;
  margin: 0px auto 0px auto;
  border-radius: 20px;
  padding: 0 15px;
`;