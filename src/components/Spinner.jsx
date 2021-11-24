import "../Styles/spinner.scss";
import { PulseLoader } from "react-spinners";

export function Spinner() {
  return (
    <div id="spinner">
      <div id="spin">
        <PulseLoader color="#999999" />
      </div>
    </div>
  );
}
