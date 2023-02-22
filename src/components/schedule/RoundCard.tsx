import { Card, Container } from "react-bootstrap";
import { Race } from "../../domain/calendar";
import { convertToPeriodString } from "../../domain/dateTimeHelpers";
import { Result } from "../../domain/result";
import { TopThree } from "../results/TopThree";
import { getCountyCode } from "../../domain/country";
import "./RoundCard.scss";

interface Props {
  race: Race;
  results?: Result[];
  onClick?: () => void;
}

export const RoundCard = ({ race, results, onClick }: Props) => {
  const countryCode = getCountyCode(race.Circuit.Location.country);

  return (
    <Container className="card-container">
      <Card onClick={onClick}>
        <Card.Img
          variant="top"
          src={`https://flagcdn.com/w320/${countryCode?.toLowerCase()}.png`}
          height="200"
          alt={race.Circuit.Location.country}
        />
        <Card.Body>
          <Card.Title>{race.raceName}</Card.Title>
          <Card.Text>{race.Circuit.circuitName}</Card.Text>
          <Card.Text>{convertToPeriodString(new Date(race.date))}</Card.Text>
          {!!results && <TopThree results={results} />}
        </Card.Body>
      </Card>
    </Container>
  );
};
