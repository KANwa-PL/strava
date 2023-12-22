import { CgGym } from "react-icons/cg";
import { FaRunning } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
const sportTypeIcons = (type) => {
  switch (type) {
    case "WeightTraining":
      return <CgGym />;
    case "Run":
      return <FaRunning />;
    case "Ride":
      return <IoIosBicycle />;
    default:
      return <FiActivity />;
  }
};

export default sportTypeIcons;
