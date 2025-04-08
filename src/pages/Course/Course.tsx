import { CourseWrapper, List, Title } from "./styles";

function Course() {

  const lessons: string[] = [
    "React Intro",
    "Props and State",
    "Object Types, export, import",
    "Controlled and uncontrolled components",
    "Children, Control components",
    "Styling components", 
    "Global Styles, styles templates",
    "useEffect, axios",
    "server requests, axios",
    "Formik, Yup",
    "Routing"
  ];

  return (
    <CourseWrapper>
      <Title>React Lessons</Title>
      <List>
        {lessons.map((lesson, index)=>(<li key={index}>{lesson}</li>))}
      </List>
    </CourseWrapper>
  );
}

export default Course;
