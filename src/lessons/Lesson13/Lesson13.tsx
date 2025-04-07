import axios from "axios";
import {v4} from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Lesson13Wrapper, ImagesBlock, ErrorMessage } from "./styles";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

function Lesson13() {
  const [image, setImage] = useState<string[]>([]);
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
      setImage((prevImage)=>[...prevImage, response.data.message]);
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

  const deleteImages = ()=>{
    setImage([])
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Lesson13Wrapper>
      <ImagesBlock >{isLoading ? <Spinner/> : (image.map((image)=><img src={image} key={v4()}/>))} </ImagesBlock>
      <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading}/>
      {image.length > 0  && <Button name="DELETE ALL DATA" onClick={deleteImages}/>}
      <Input name="search_image" value={inputValue} onChange={changeValue}/>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Lesson13Wrapper>
  );
}

export default Lesson13;
