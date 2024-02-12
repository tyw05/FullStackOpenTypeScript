interface ContentProps {
  courseParts: Course[];
}

type Course = {
  name: string;
  exerciseCount: number;
};
const Content = ({ courseParts }: ContentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "8px" }}>
      {courseParts.map((course, index) => {
        return (
          <span key={index}>
            {course.name} {course.exerciseCount}
          </span>
        );
      })}
    </div>
  );
};

export default Content;
