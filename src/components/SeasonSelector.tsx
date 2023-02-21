import { Form } from "react-bootstrap";
import './SeasonSelector.scss'

interface Props {
  setSeason: (season: number) => void;
  season?: number;
}

export const SeasonSelector = ({ setSeason, season }: Props) => {
  const currentYear = new Date().getFullYear();

  const options = [];

  for (let year = 1950; year <= currentYear; year++) {
    options.push(
      <option value={year} key={year}>
        {year}
      </option>
    );
  }
  return (
    <div className="options-container">
      Season:
      <Form.Select
        aria-label="Default select example"
        className="options"
        defaultValue={season ? season : currentYear}
        onChange={(event) => setSeason(Number(event.target.value))}
      >
        {options}
      </Form.Select>
    </div>
  );
};
