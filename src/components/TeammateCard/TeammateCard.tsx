import { HeadToHead, TeammateComparison } from "@/domain/TeammateComparison";
import { Box, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./TeammateCard.module.css";

const Row: React.FC<{ label: string; score: HeadToHead; color: string }> = ({
  label,
  score,
  color,
}) => {
  const total = score.driver + score.teammate;
  const share = total === 0 ? 50 : (score.driver / total) * 100;
  return (
    <Box className={classes.row}>
      <span className={classes.value} data-lead={score.driver > score.teammate}>
        {score.driver}
      </span>
      <Box>
        <Box className={classes.label}>{label}</Box>
        <Box
          className={classes.bar}
          role="img"
          aria-label={`${label}: ${score.driver} to ${score.teammate}`}
        >
          <span
            className={classes.barFill}
            style={{ width: `${share}%`, backgroundColor: color }}
          />
        </Box>
      </Box>
      <span className={classes.value} data-lead={score.teammate > score.driver}>
        {score.teammate}
      </span>
    </Box>
  );
};

export const TeammateCard: React.FC<{
  comparison: TeammateComparison | undefined;
  loading: boolean;
  season: string | undefined;
  color: string;
}> = ({ comparison, loading, season, color }) => {
  if (!loading && !comparison) return null;
  return (
    <Box className={classes.card}>
      <Title order={2} className={classes.title}>
        Vs teammate
        {comparison && (
          <>
            {" "}
            <Link
              to={`/drivers/${comparison.teammate.driverId}`}
              className={classes.teammate}
            >
              {comparison.teammate.givenName} {comparison.teammate.familyName}
            </Link>
          </>
        )}
      </Title>
      {comparison ? (
        <>
          <Box className={classes.rows}>
            <Row
              label="Qualifying"
              score={comparison.qualifying}
              color={color}
            />
            <Row label="Race" score={comparison.race} color={color} />
            <Row label="Points" score={comparison.points} color={color} />
          </Box>
          <Text className={classes.note}>
            {season}, {comparison.sharedRaces} races together. Counts who was
            ahead.
          </Text>
        </>
      ) : (
        <Text c="dimmed">Loading…</Text>
      )}
    </Box>
  );
};
