import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { FieldForError, FieldForFact, Homework12Container } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

function Homework12() {
  const [fact, setFacts] = useState<string|undefined>(undefined);
  const [error, setError] = useState<string|undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getFact = async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      const response = await axios.get("https://catfact.ninja/fac");
      setFacts(response.data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <Homework12Container>
      <FieldForFact>{isLoading ? <Spinner/> : (fact ? fact : 'Something is brocken')}</FieldForFact>
      <Button name="GET MORE FACTS" onClick={getFact} disabled={isLoading}/>
      <FieldForError>{error}</FieldForError>
    </Homework12Container>
  );
}

export default Homework12;
