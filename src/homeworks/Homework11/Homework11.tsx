import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { CountChanges, Homework11Wrapper, InputWrapper } from "./styles";

function Homework11() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue1, setInputValue1] = useState<string>('');
  const [changeCount, setChangeCount] = useState<number>(0);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    //setChangeCount(changeCount + 1);
  }

  const changeValue1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  }

  useEffect(()=>{
    setChangeCount(prevCount => prevCount + 1)
  }, [inputValue])

  return (
    <Homework11Wrapper>
      <InputWrapper>
        <Input name="FirstInput" value={inputValue} onChange={changeValue} placeholder="Enter something"/>
        <Input name="SecondInput" value={inputValue1}/>
      </InputWrapper>
      <CountChanges>Changes: {changeCount - 1}</CountChanges>
    </Homework11Wrapper>
  );
}

export default Homework11;
