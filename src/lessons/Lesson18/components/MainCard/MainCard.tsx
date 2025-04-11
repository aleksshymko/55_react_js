import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { MainCardInterface, UserData } from "./types";
import { data } from "react-router-dom";

//export const MainCardContext = createContext<undefined | UserData>(undefined);

export const MainCardContext = createContext<MainCardInterface>({
  data: undefined ,
  changeData: () =>{}
})

function MainCard() {
  const [userData, setUserData] = useState<UserData |undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    //<MainCardContext.Provider value={userData}>
    <MainCardContext.Provider value={{
      data: userData,
      changeData: setUserData
    }}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section /*data={userData}*/ />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
