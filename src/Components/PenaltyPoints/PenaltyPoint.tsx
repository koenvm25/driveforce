import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Point } from "../../Api/supabase";
import { capitalizeFirstLetter } from "../../Utils/stringHelpers";

interface Props {
  points: Point[];
}

export const PenaltyPoint = ({ points }: Props) => {
  return (
    <div>
      {points.length > 0 ? (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Race</TableCell>
              <TableCell sx={{ display: { xxs: "none", xs: "table-cell" } }}>
                Reason
              </TableCell>
              <TableCell>Expires at</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {points.sort((a, b) => a.expiresAt.getTime() - b.expiresAt.getTime()).map((point) => (
              <TableRow key={point.id}>
                <TableCell>{point.race}</TableCell>
                <TableCell sx={{ display: { xxs: "none", xs: "none", sm: "table-cell" } }}>
                  {capitalizeFirstLetter(point.reason)}
                </TableCell>
                <TableCell
                  sx={{
                    display: { xxs: "none", xs: "table-cell", sm: "none" },
                  }}
                >
                  {point.shortReason}
                </TableCell>
                <TableCell>{point.expiresAt.toLocaleDateString()}</TableCell>
                <TableCell>{point.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography>This driver has no penalty points.</Typography>
      )}
    </div>
  );
};
