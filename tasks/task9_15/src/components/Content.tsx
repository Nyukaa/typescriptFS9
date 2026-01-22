import { CoursePart } from "../types";
import Part from "./Part";
// interface PartProps {
//   part: CoursePart;
// }
// interface CoursePart {
//   name: string;
//   exerciseCount: number;
// }

interface ContentProps {
  parts: CoursePart[];
}

const Content = ({ parts }: ContentProps) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

export default Content;
