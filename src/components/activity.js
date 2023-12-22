import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import sportTypeIcons from "./sportTypeIcons";

export const ActivityRow = ({
  name,
  start_date,
  type,
  elapsed_time,
  distance,
  average_heartrate,
  id,
}) => {
  return (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{start_date.slice(0, 10)}</TableCell>
      <TableCell>{sportTypeIcons(type)}</TableCell>
      <TableCell>
        {elapsed_time > 3600
          ? moment.utc(elapsed_time * 1000).format("HH:mm:ss")
          : moment.utc(elapsed_time * 1000).format("mm:ss")}
      </TableCell>
      <TableCell>
        {distance ? (distance / 1000).toFixed(2) + " km" : "- -"}
      </TableCell>
      <TableCell>
        {average_heartrate
          ? Math.floor(average_heartrate) + " BPM"
          : "Unvailable"}
      </TableCell>
    </TableRow>
  );
};
