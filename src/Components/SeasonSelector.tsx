import { MenuItem, Select } from "@mui/material";
import "./SeasonSelector.scss";

interface Props {
  setSeason: (season: number) => void;
  season?: number;
}

export const SeasonSelector = ({ setSeason, season }: Props) => {
  const currentYear = new Date().getFullYear();

  const options = [];

  for (let year = currentYear; year >= 1950; year--) {
    options.push(
      <MenuItem value={year} key={year}>
        {year}
      </MenuItem>
    );
  }
  return (
    <div className="options-container">
      Season:
      <Select
        className="options"
        defaultValue={season ? season : currentYear}
        onChange={(event) => setSeason(Number(event.target.value))}
        size="small"
      >
        {options}
      </Select>
    </div>
  );
};
