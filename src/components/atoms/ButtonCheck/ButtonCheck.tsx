import { Dispatch, ReactNode, SetStateAction, useId } from 'react';
import styled from 'styled-components';

// type 지정
interface ButtonCheckProps {
  name: string;
  children: string | ReactNode;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

//styled component 작성

const StyledButtonCheckContainer = styled.div`
  position: relative;
  inline-size: 33.333%;
  max-inline-size: 140px;
  min-block-size: 60px;
  ${(props) => props.theme.fontStyles.textRegularMd}
  ${(props) => props.theme.colors.textGray}
`;
const StyledButtonCheckP = styled.p`
  ${(props) => props.theme.fontStyles.textSemiboldMd}
  ${(props) => props.theme.colors.textBlack}
  text-align: center;
`;
const StyledButtonCheckLabel = styled.label`
  inline-size: 100%;
  block-size: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.lineColorGray};
  background: ${(props) => props.theme.colors.white};
`;

const StyledButtonCheck = styled.input`
  inline-size: 100%;
  block-size: 100%;
  appearance: none;
  position: absolute;
  left: 0;

  &:checked + ${StyledButtonCheckLabel} {
    border: 1px solid ${(props) => props.theme.colors.orange};
    background: rgba(255, 182, 43, 0.1);
  }
`;

const ButtonCheck = ({
  name,
  children,
  isChecked,
  setIsChecked,
}: ButtonCheckProps) => {
  const checkBoxChecked = () => setIsChecked(!isChecked);
  const id = useId();
  return (
    <StyledButtonCheckContainer>
      <StyledButtonCheck
        id={id}
        type="checkbox"
        checked={isChecked}
        value={name}
        onChange={checkBoxChecked}
      />
      <StyledButtonCheckLabel htmlFor={id}>
        <StyledButtonCheckP>{name}</StyledButtonCheckP>
        <p>{children}</p>
      </StyledButtonCheckLabel>
    </StyledButtonCheckContainer>
  );
};

export default ButtonCheck;