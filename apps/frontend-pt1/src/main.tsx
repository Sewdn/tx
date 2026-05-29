import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@tx/ui/globals.css"
import "./index.css"
import App from "./App.tsx"

document.documentElement.setAttribute("data-theme", "gittenberg")
document.documentElement.classList.add("light")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
