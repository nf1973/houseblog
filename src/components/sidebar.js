import { Container } from "@/components/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Milestones from "./milestones";
import ConstructionDates from "./constructiondates";
import HouseDetails from "./housedetails";

export default function Sidebar() {
  return (
    <div>
      <div className="container ms-0 ms-md-5 mt-5">
        <div className="row mb-5">
          <h2 className="">Construction Dates</h2>
          <ConstructionDates />
        </div>
        <div className="row mb-5">
          <h2 className="">House Details</h2>
          <HouseDetails />
        </div>
        <div className="row">
          <h2>Milestones / Posts</h2>
          <Milestones />
        </div>
      </div>
    </div>
  );
}
