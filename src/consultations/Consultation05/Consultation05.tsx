import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { BtnContainer, Consultation05Container, Result } from "./styles";

function Consultation05() {
  const [count, setCount] = useState<number>(0);
  const [showCountClick, setShowCountClick] = useState<number>(-1);

  const plusCount = () => {
    if (count < 15) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  const minusCount = () => {
    if (count > -15) {
      setCount((prevValue) => prevValue - 1);
    }
  };

  useEffect(() => {
    setShowCountClick((prevValue) => prevValue + 1);
  }, [count]);

  return (
    <Consultation05Container>
      <Result isNearLimit={count > 10 || count < -10}>{count}</Result>
      <BtnContainer>
        <Button name="+" onClick={plusCount} disabled={count === 15} />
        <Button name="-" danger onClick={minusCount} disabled={count === -15} />
      </BtnContainer>
      {/* <Result>Clicked: {showCountClick === -1 ? '0' : showCountClick}</Result> */}
      <Result>Clicked: {showCountClick}</Result>
    </Consultation05Container>
  );
}

export default Consultation05;

// Создать Counter в компоненте Consultation05. В Consultation05 должен быть блок с
// результатом и две кнопки, одна увеличивает значение на 1, другая уменьшает на 1.
// Кнопка, которая уменьшает на 1 должна быть красного цвета
