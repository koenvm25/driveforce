import { Card, Container } from "react-bootstrap";
import { Race } from "../../domain/calendar";
import { getCountyCode } from "../../domain/Countries";
import { convertToPeriodString } from "../../domain/dateTimeHelpers";
import { Result } from "../../domain/result";
import { TopThree } from "../results/TopThree";
import "./RoundCard.scss";

interface Props {
  race: Race;
  results?: Result[];
}

export const RoundCard = ({ race, results }: Props) => {
  const countryCode = getCountyCode(race.Circuit.Location.country);

  return (
    <Container className="card-container">
      <Card>
        <Card.Img
          variant="top"
          src={`https://flagcdn.com/w320/${countryCode?.toLowerCase()}.png`}
          width="160"
          alt={race.Circuit.Location.country}
        />
        <Card.Body>
          <Card.Title>{race.Circuit.circuitName}</Card.Title>
          <Card.Text>{convertToPeriodString(new Date(race.date))}</Card.Text>
          {!!results && <TopThree results={results}/>}
        </Card.Body>
      </Card>
    </Container>
  );
};
