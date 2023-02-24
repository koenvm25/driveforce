import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  Typography,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  DriverWithPenaltyPoints,
  getDriverPenaltyPoints,
  Point,
} from "../../Api/supabase";
import { PenaltyPoint } from "../../Components/PenaltyPoints/PenaltyPoint";

export const PenaltyPoints = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [drivers, setDrivers] = useState<DriverWithPenaltyPoints[]>();
  // const [filteredDrivers, setFilteredDrivers] =
  //   useState<DriverWithPenaltyPoints[]>();
  const [filterDrivers, setFilterDrivers] = useState(false);

  useEffect(() => {
    getDriverPenaltyPoints(setDrivers);
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const getTotalPoints = (points: Point[]) => {
    let totalPoints = 0;
    points.map((point) => (totalPoints = totalPoints + point.points));
    return totalPoints;
  };
  return (
    <Container maxWidth="xl" className="app-container">
      <FormGroup>
        <FormControlLabel
          label="Only show drivers with penalty points"
          sx={{width: 'max-content'}}
          control={
            <Checkbox
              checked={filterDrivers}
              color="secondary"
              onChange={() => setFilterDrivers(!filterDrivers)}
            />
          }
        />
      </FormGroup>
      {drivers ? (
        <>
          {drivers
            .filter(
              (driver) =>
                getTotalPoints(driver.points) > (filterDrivers ? 0 : -1)
            )
            .map((driver, index) => (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                key={driver.id}
              >
                <AccordionSummary>
                  <Typography sx={{ width: "10%", flexShrink: 0 }}>
                    {driver.number}.
                  </Typography>
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {driver.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {getTotalPoints(driver.points)} penalty points
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <PenaltyPoint points={driver.points} />
                </AccordionDetails>
              </Accordion>
            ))}
        </>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};
