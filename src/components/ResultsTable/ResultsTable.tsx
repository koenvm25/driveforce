import { getTeamColor } from "@/utils/teamColors";
import React from "react";
import classes from "./ResultsTable.module.css";

export interface Column<T> {
  key: string;
  header: string;
  align?: "right";
  hideBelow?: "xs" | "sm" | "md";
  render: (row: T) => React.ReactNode;
}

interface Props<T> {
  rows: T[];
  columns: Column<T>[];
  getKey: (row: T) => string;
}

export function ResultsTable<T>({ rows, columns, getKey }: Props<T>) {
  return (
    <div className={classes.scroll}>
      <table className={classes.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={classes.th}
                data-align={column.align}
                data-hide={column.hideBelow}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getKey(row)} className={classes.row}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={classes.td}
                  data-align={column.align}
                  data-hide={column.hideBelow}
                >
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const Position: React.FC<{ value: string }> = ({ value }) => (
  <span
    className={classes.position}
    data-place={Number(value) <= 3 ? value : undefined}
  >
    {value}
  </span>
);

export const DriverName: React.FC<{
  driver: { givenName: string; familyName: string };
}> = ({ driver }) => (
  <span className={classes.driver}>
    <span className={classes.givenName}>{driver.givenName} </span>
    {driver.familyName}
  </span>
);

export const Team: React.FC<{
  id: string | undefined;
  name: string;
  strong?: boolean;
}> = ({ id, name, strong }) => (
  <span className={classes.team} data-strong={strong || undefined}>
    <span
      className={classes.teamDot}
      style={{ backgroundColor: getTeamColor(id) }}
    />
    {name}
  </span>
);

export const Points: React.FC<{ value: string }> = ({ value }) => (
  <span className={classes.points}>{value}</span>
);

export const PointsBar: React.FC<{
  value: string;
  max: number;
  color: string;
}> = ({ value, max, color }) => (
  <span className={classes.pointsBar}>
    <span className={classes.pointsTrack}>
      <span
        className={classes.pointsFill}
        style={{
          display: "block",
          width: `${max > 0 ? (Number(value) / max) * 100 : 0}%`,
          backgroundColor: color,
        }}
      />
    </span>
    <span className={classes.points}>{value}</span>
  </span>
);

export const SubText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={classes.sub}>{children}</div>;
