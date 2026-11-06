import { Team } from "@/components/ResultsTable/ResultsTable";
import { useCircuitWinnersQuery } from "@/queries/ResultQueries";
import { Box, Title } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Round.module.css";

const COLLAPSED_COUNT = 5;

export const PastWinners: React.FC<{ circuitId: string; season: string }> = ({
  circuitId,
  season,
}) => {
  const { data } = useCircuitWinnersQuery(circuitId, season);
  const [expanded, setExpanded] = useState(false);

  if (!data || data.length === 0) return null;

  const visible = expanded ? data : data.slice(0, COLLAPSED_COUNT);

  return (
    <Box className={classes.card}>
      <Title order={2} className={classes.cardTitle}>
        Past winners
      </Title>
      <Box mt="sm">
        {visible.map((winner) => (
          <Box key={winner.season} className={classes.pastWinner}>
            <Link
              to={`/calendar/${winner.season}/${winner.round}`}
              className={classes.pastWinnerYear}
            >
              {winner.season}
            </Link>
            <Box>
              <Link
                to={`/drivers/${winner.driverId}`}
                className={classes.pastWinnerName}
              >
                {winner.driverName}
              </Link>
              <Team id={winner.constructorId} name={winner.constructorName} />
            </Box>
          </Box>
        ))}
      </Box>
      {data.length > COLLAPSED_COUNT && (
        <button
          type="button"
          className={classes.outlineButton}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show fewer" : `Show all ${data.length}`}
        </button>
      )}
    </Box>
  );
};
