import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { getFlag } from "../../api/countryflagsapiConfig";
import { Race } from "../../domain/calendar";
import { getCountyCode } from "../../domain/Countries";
import { convertToPeriodString } from "../../domain/dateTimeHelpers";
import "./RoundCard.scss";

interface Props {
  race: Race;
}

export const RoundCard = ({ race }: Props) => {
  const countryCode = getCountyCode(race.Circuit.Location.country);

  return (
    <Container className="a">
      <Card>
        <Card.Img
          variant="top"
          src={`https://flagcdn.com/w320/${countryCode?.toLowerCase()}.png`}
          width="160"
          alt={race.Circuit.Location.country}
        />
        <Card.Body>
          <Card.Title>{race.Circuit.circuitName}</Card.Title>
          <Card.Text>
            {convertToPeriodString(
              new Date(race.date),
              // !!race.FirstPractice?.date ? new Date(race.FirstPractice.date) : undefined,
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
