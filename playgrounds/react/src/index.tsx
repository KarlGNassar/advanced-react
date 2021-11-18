import React from "react";
import ReactDOM from "react-dom";

import { Color } from "@advanced-react/react";
import "@advanced-react/scss/lib/Button.css";
import "@advanced-react/scss/lib/Utilities.css";

ReactDOM.render(
  <Color hexCode="#000" width="lg" height="lg" />,
  document.querySelector("#root"),
);
