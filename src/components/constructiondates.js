import { Container } from "@/components/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Milestones from "./milestones";

export default function ConstructionDates() {
  return (
    <table className="table ms-2">
      <tbody>
        <tr>
          <th scope="row">Begin (Groundwork)</th>
          <td className="text-secondary">7th November 2016</td>
        </tr>
        <tr>
          <th scope="row">End (Handover)</th>
          <td className="text-secondary">19th April 2017</td>
        </tr>
      </tbody>
    </table>
  );
}
