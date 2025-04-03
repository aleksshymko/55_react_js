import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Lesson13Wrapper, ImagesBlock, ErrorMessage } from "./styles";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

function Lesson13() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const getImage = async () => {
    setErrorMessage(undefined);
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage(response.data.message);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changeValue = ((event: ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value);
    getImage();
  })

  const addImages = (images:string[])=>{
    images.push(setImage)
  };

  const deleteImages = ()=>{};

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Lesson13Wrapper>
      <ImagesBlock>{isLoading ? <Spinner/> : <img src={image}/>}</ImagesBlock>
      <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading}/>
      <Button name="DELETE ALL DATA" onClick={deleteImages}/>
      <Input name="search_image" value={inputValue} onChange={changeValue}/>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Lesson13Wrapper>
  );
}

export default Lesson13;
