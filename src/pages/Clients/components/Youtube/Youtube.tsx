import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { Company, Info, YoutubeWrapper } from "./styles";

function Youtube() {
  const  navigate = useNavigate();
  const toFacebook = ()=>{
    navigate('/clients/facebook')
  }
  return (
    <YoutubeWrapper>
      <Company>Youtube</Company>
      <Info>
        YouTube is an American social media and online video sharing platform
        owned by Google. YouTube was founded on February 14, 2005, by Steve
        Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal.
        Headquartered in San Bruno, California, it is the second-most-visited
        website in the world, after Google Search. In January 2024, YouTube had
        more than 2.7 billion monthly active users, who collectively watched
        more than one billion hours of videos every day As of May 2019,
        videos were being uploaded to the platform at a rate of more than 500
        hours of content per minute and as of mid-2024, there were
        approximately 14.8 billion videos in total.
      </Info>
      <Button name="FACEBOOK" onClick={toFacebook}/>
    </YoutubeWrapper>
  );
}

export default Youtube;
