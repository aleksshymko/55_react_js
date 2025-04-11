import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"
//import { SectionProps } from "./types"

function Section(/*{data}: SectionProps*/) {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content /*userData={data}*//>
    </SectionWrapper>
  )
}

export default Section