import { Result } from "../../Domain/result";

interface Props {
  results: Result[];
}

export const TopThree = ({ results }: Props) => {
  return (
    <div className="top-three-container">
      {results.slice(0, 3).map((result, index) => (
        <div key={result.Driver.driverId} className={`top-three-${index + 1}`}>
          {index + 1}. {result.Driver.code}
        </div>
      ))}
    </div>
  );
};
