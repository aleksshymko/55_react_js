import { useContext } from "react";

import { ContentComponent, DataItem } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";
import Button from "../../../../components/Button/Button";
//import { ContentProps } from "./types"

function Content(/*{userData}: ContentProps*/) {
  //const userContentData = useContext(MainCardContext);

  const {data, changeData} = useContext(MainCardContext)

  const deleteData = () => {
    changeData(undefined)
  }

  // const data = userContentData.data;
  // const changeData = userContentData.changeData

  return (
    <ContentComponent>
      <DataItem>
        First Name: 
        {data?.firstName}
        {/* {userContentData?.firstName} */}
        {/*{userData.firstName}*/}
      </DataItem>
      <DataItem>
        Last Name: 
        {data?.lastName}
        {/* {userContentData?.lastName} */}
        {/*{userData.lastName}*/}
      </DataItem>
      <DataItem>
        Age: 
        {data?.age}
        {/* {userContentData?.age} */}
        {/*{userData.age}*/}
      </DataItem>
      <Button name="Delete all data" onClick={deleteData}/>
    </ContentComponent>
  );
}

export default Content;
