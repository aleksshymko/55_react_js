import axios from "axios";
import { v4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import {
  ImagesWrapper,
  Lesson13Container,
  Error,
  ButtonContainer,
  Image,
} from "./styles";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

function Lesson13() {
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const ANIMAL_URL: string = "https://dog.ceo/api/breeds/image/random";

  const isHasDogsImages: boolean = dogImages.length !== 0;

  const getDogImg = async () => {
    setErrorMessage(undefined);
    setIsLoading(true);
    try {
      const response = await axios.get(ANIMAL_URL);
      setDogImages((prevImage) => [...prevImage, response.data.message]);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    getDogImg();
  };

  const deleteAllImages = () => {
    setDogImages([]);
  };

  const dogPhotos = dogImages.map((image: string) => {
    return <Image key={v4()} src={image} />;
  });

  useEffect(() => {
    getDogImg();
  }, []);

  return (
    <Lesson13Container>
      <ButtonContainer>
        <Button
          name="GET MORE IMAGES"
          onClick={getDogImg}
          disabled={isLoading}
        />
        {isHasDogsImages && (
          <Button name="DELETE ALL DATA" onClick={deleteAllImages} danger />
        )}
      </ButtonContainer>
      <Input name="search" value={search} onChange={changeValue} search />
      {isHasDogsImages && (
        <ImagesWrapper>
          {dogPhotos}
          {isLoading && <Spinner />}
        </ImagesWrapper>
      )}
      <Error>{errorMessage}</Error>
    </Lesson13Container>
  );
}

export default Lesson13;
