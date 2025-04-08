import { useEffect, useState } from "react";
import {
  Avatar,
  Consultation06Container,
  UserCard,
  UserInfo,
  UserName,
} from "./styles";
import axios from "axios";
import Button from "../../components/Button/Button";

function Consultation06() {
  const USER_URL: string = "https://randomuser.me/api/";

  const [userData, setUserData] = useState<any>(undefined);
  console.log(userData);
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);

  const getUser = async () => {
    // if (isTimerOn) {
    //   setIsTimerOn(false)
    // } else {
    //   setIsTimerOn(true)
    // }
    setIsTimerOn((prevValue)=>!prevValue)
    const intervalID = setInterval (async() => {
      if(isTimerOn) {
        clearInterval(intervalID)
      } else {
      try {
        const response = await axios.get(USER_URL);
        setUserData(response.data.results[0]);
      } catch (error: any) {
      } finally {
      }
}, 5000)};
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Consultation06Container>
      {userData && (
        <UserCard>
          <Avatar src={userData?.picture?.large} alt="user avatar" />
          <UserName>
            Name:
            {`${userData?.name?.title} ${userData?.name?.first} ${userData?.name?.last}`}
          </UserName>
          <UserInfo>Phone:{userData.phone}</UserInfo>
          <UserInfo>Email:{userData.email}</UserInfo>
          <Button name={isTimerOn ? 'CANCEL RANDOM USER' : "GET RANDOM USER"} onClick={getUser} danger={isTimerOn}/>
        </UserCard>
      )}
    </Consultation06Container>
  );
}

export default Consultation06;
