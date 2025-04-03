import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11Container, Result } from "./styles";

function Homework11() {
  const [note, setNote] = useState<string>('');
  const [additNote, setAdditNote] = useState<string>('');
  const [countNoteChange, setCountNoteChange] = useState<number>(0);

  const onChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
    //setCountNoteChange(countNoteChange + 1);
  }

  const onAdditChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditNote(event.target.value);
  }

  useEffect(()=>{
    //if(note)
    setCountNoteChange(prevValue => prevValue + 1)
  }, [note])

  return (
    <Homework11Container>
      {/* <InputContainer> */}
        <Input name="note" value={note} onChange={onChangeNote} placeholder="Enter your note"/>
        <Result>Changes: {countNoteChange - 1}</Result>
        <Input name="note_addition" value={additNote} onChange={onAdditChangeNote} placeholder="Enter your additional note"/>
      {/* </InputContainer> */}
    </Homework11Container>
  );
}

export default Homework11;
