import styled from 'styled-components';

const StyledInputTextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & textarea {
    border: none;
    outline: none;
    resize: none;
    border: 1px solid ${(props) => props.theme.colors.lineColorGray};
    border-radius: 4px;
  }
  & ::placeholder {
    padding: 10px 53px 10px 10px;
  }
`;

interface InputTextAreaSpanWrapperProps {
  $mode: '필수' | '선택';
}

const InputTextAreaSpanWrapper = styled.div<InputTextAreaSpanWrapperProps>`
  display: flex;

  & .walkRequest {
    ${(props) => props.theme.fontStyles.textSemiboldBase};
    color: ${(props) => props.theme.colors.textBlack};
  }

  & .essential {
    padding-block-start: 1px;
    ${(props) => props.theme.fontStyles.textRegularMd}
    color: ${(props) => {
      if (props.$mode === '필수') {
        return `${props.theme.colors.orange}`;
      } else if (props.$mode === '선택') {
        return `${props.theme.colors.textGray}`;
      }
    }};
  }
`;

interface InputTextAreaProps {
  request?: string;
  requestCheck: '필수' | '선택';
  placeholder?: string;
}

const InputTextArea = ({
  request = '산책 요청 사항',
  requestCheck = '필수',
  placeholder = '',
}: InputTextAreaProps) => {
  return (
    <StyledInputTextAreaBox>
      <InputTextAreaSpanWrapper $mode={requestCheck}>
        <span className="walkRequest">{request}</span>
        <span className="essential">&#40;{requestCheck}&#41;</span>
      </InputTextAreaSpanWrapper>
      <textarea
        name="contents"
        placeholder={placeholder}
        cols={5}
        rows={8}
      ></textarea>
    </StyledInputTextAreaBox>
  );
};

export default InputTextArea;
