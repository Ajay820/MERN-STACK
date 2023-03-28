import ReactDOM from "react-dom/client"

import {BrowserRouter} from "react-router-dom"

import {App} from "./App.js"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BrowserRouter>
    <div>
        <App/>
    </div>
</BrowserRouter>)