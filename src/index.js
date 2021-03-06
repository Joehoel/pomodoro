import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { CountdownProvider } from "./lib/contexts/CountdownContext";

const GlobalStyle = createGlobalStyle`
	@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic);

	:root {
		--primary-color: #FF8900;
		--width: 80%;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Roboto Mono", sans-serif;
	}

	html,
	body {
		position: fixed;
		overflow: hidden;
		width: 100vw;
	}

	#root {
		height: 100vh;11
		width: 100%;
		background: #ededed;
    overflow-y: hidden;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<CountdownProvider>
			<GlobalStyle />
			<App />
		</CountdownProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
