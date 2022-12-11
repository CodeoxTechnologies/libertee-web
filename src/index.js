import ReactDOM from "react-dom";
import App from "./App";
import { StateContext } from "./utils/StateContext";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <SnackbarProvider autoHideDuration={2000}>
    <StateContext>
      <App />
    </StateContext>
  </SnackbarProvider>,
  document.getElementById("root")
);
