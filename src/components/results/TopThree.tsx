import { Row } from "react-bootstrap";
import { Result } from "../../domain/result";

interface Props {
  results: Result[];
}

export const TopThree = ({ results }: Props) => {
  return (
    <div className="top-three-container">
      {results.slice(0, 3).map((result, index) => (
        <div className={`top-three-${index + 1}`}>{index + 1}. {result.Driver.code}</div>
      ))}
    </div>
  );
};
