import { Race } from "../../Domain/calendar";
import { convertToPeriodString } from "../../Utils/dateTimeHelpers";
import { Result } from "../../Domain/result";
import { TopThree } from "../Results/TopThree";
import { getCountyCode } from "../../Domain/country";
import "./RoundCard.scss";
import { Card, CardContent, CardMedia } from "@mui/material";

interface Props {
  race: Race;
  results?: Result[];
  onClick?: () => void;
}

export const RoundCard = ({ race, results, onClick }: Props) => {
  const countryCode = getCountyCode(race.Circuit.Location.country);

  return (
    <Card onClick={onClick} className="card-container">
      <CardMedia
        image={`https://flagcdn.com/w320/${countryCode?.toLowerCase()}.jpg`}
        title={`${race.Circuit.Location.country} flag`}
        sx={{ height: 200 }}
      />
      <CardContent>
        <h5>{race.raceName}</h5>
        <body>{race.Circuit.circuitName}</body>
        <body>{convertToPeriodString(new Date(race.date))}</body>
        {!!results && <TopThree results={results} />}
      </CardContent>
    </Card>
  );
};
