import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "8px" }}>
      {courseParts.map((course, index) => {
        return <Part key={index} coursePart={course} />;
      })}
    </div>
  );
};

export default Content;
