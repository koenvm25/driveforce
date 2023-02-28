import {
  Box,
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getDrivers } from "../../Api/endpoints";
import { SeasonSelector } from "../../Components/SeasonSelector";
import { Driver } from "../../Domain/standings";

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const Drivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>();
  const [season, setSeason] = useState(new Date().getFullYear());

  useEffect(() => {
    getDrivers(season).then((response) => {
      setDrivers(response.data.MRData.DriverTable.Drivers);
    });
  }, [season]);

  return (
    <Container>
      <SeasonSelector setSeason={setSeason} season={season} />
      {drivers ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Nationality</TableCell>
                <TableCell>Birthdate</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow>
                  <TableCell>
                    {driver.givenName} {driver.familyName}
                  </TableCell>
                  <TableCell>{driver.permanentNumber}</TableCell>
                  <TableCell>{driver.nationality}</TableCell>
                  <TableCell>
                    {new Date(driver.dateOfBirth).toLocaleDateString(
                      undefined,
                      dateOptions
                    )}
                  </TableCell>
                  <TableCell>{driver.code}</TableCell>
                  <TableCell>
                    <a href={driver.url} target="_blank">
                      Information
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};
