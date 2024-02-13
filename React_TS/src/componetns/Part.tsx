import { CoursePart } from "../types";

interface PartProps {
  coursePart: CoursePart;
}

const Part = ({ coursePart }: PartProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const checkPart = (part: CoursePart) => {
    switch (part.kind) {
      case "basic":
        return (
          <div>
            <p style={{ fontWeight: "bolder" }}>
              {part.name} {part.exerciseCount}
            </p>
            <p style={{ fontStyle: "italic" }}>{part.description}</p>
          </div>
        );
      case "group":
        return (
          <div>
            <p style={{ fontWeight: "bolder" }}>
              {part.name} {part.exerciseCount}
            </p>
            <p style={{ fontStyle: "italic" }}>
              project exercises: {part.groupProjectCount}
            </p>
          </div>
        );
      case "background":
        return (
          <div>
            <p style={{ fontWeight: "bolder" }}>
              {part.name} {part.exerciseCount}
            </p>
            <p style={{ fontStyle: "italic" }}>{part.description}</p>
          </div>
        );
      case "special":
        return (
          <div>
            <p style={{ fontWeight: "bolder" }}>
              {part.name} {part.exerciseCount}
            </p>
            <p style={{ fontStyle: "italic" }}>{part.description}</p>
            <p>required skills: {part.requirements.join(", ")}</p>
          </div>
        );
      default:
        return assertNever(part);
    }
  };

  return <>{checkPart(coursePart)}</>;
};
export default Part;
