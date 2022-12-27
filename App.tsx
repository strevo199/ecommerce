import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import Navigation from "./src/navigation";


const Main = () => {
  return(
    <ThemeProvider theme={"light"}>
        <Navigation/>
    </ThemeProvider>
  )
}

const App = () => {

  return (
    <Main/>
  )
}
export default App;