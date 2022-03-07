import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { globalStyle } from "./components/ions/styles";
import { Global } from "@emotion/react";

ReactDOM.render(
	<React.StrictMode>
		<Global styles={globalStyle} />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
