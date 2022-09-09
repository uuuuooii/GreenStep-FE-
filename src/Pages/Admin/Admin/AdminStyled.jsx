import styled from 'styled-components';

export const AdminArea = styled.div`
  display: flex;
`;
export const SubmitCard = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
export const SubmitPhoto = styled.img`
  width: 100%;
  height: 200px;
`;
export const TextareaArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
`;
export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.div`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
