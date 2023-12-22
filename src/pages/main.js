import { useDispatch, useSelector } from "react-redux";
import { setActivites } from "../reducers/activitySlice";
import { ActivityRow } from "../components/activity";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Main = () => {
  // Variables
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const activities = useSelector((state) => state.athlete.activities);
  const status = useSelector((state) => state.athlete.status);
  const navigate = useNavigate();

  //Actions
  useEffect(() => {
    dispatch(setActivites());
  }, []);

  // View
  return status === "idle" || status === "pending" ? (
    <div>
      <p>Hi, {token.athlete.firstname}!</p>
    </div>
  ) : (
    <div>
      <p>Hi, {token.athlete.firstname}!</p>
      <button
        onClick={() => {
          navigate("/new", { replace: true });
        }}
      >
        Create
      </button>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableHeader">
            <TableCell className="tableCell">Workout Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Elapsed Time</TableCell>
            <TableCell className="tableCell">Distance</TableCell>
            <TableCell className="tableCell">Avg HR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity) => {
            return (
              <ActivityRow
                name={activity.name}
                type={activity.type}
                start_date={activity.start_date}
                elapsed_time={activity.elapsed_time}
                distance={activity.distance}
                average_heartrate={activity.average_heartrate}
              ></ActivityRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Main;
