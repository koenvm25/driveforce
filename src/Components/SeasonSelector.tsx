import { MenuItem, Select } from "@mui/material";
import "./SeasonSelector.scss";

interface Props {
  setSeason: (season: number) => void;
  season?: number;
  removeCurrentYear?: boolean;
}

export const SeasonSelector = ({
  setSeason,
  season,
  removeCurrentYear = false,
}: Props) => {
  const previousYear = removeCurrentYear
    ? new Date().getFullYear() - 1
    : new Date().getFullYear();

  const options = [];

  for (let year = previousYear; year >= 1950; year--) {
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
        defaultValue={season ? season : previousYear}
        onChange={(event) => setSeason(Number(event.target.value))}
        size="small"
      >
        {options}
      </Select>
    </div>
  );
};
