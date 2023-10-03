import React from "react";
import reactDom from "react-dom/client";

import App from "./components/app/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");
const root = reactDom.createRoot(rootElement);


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)