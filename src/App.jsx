import React from "react"
import { useMediaQuery } from "react-responsive"
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
function App() {

  const isPc = useMediaQuery({
    query : "(min-width:767px)"
  });

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  

  return (
  <>
    
    {isPc && <Desktop />}
    {isMobile && <Mobile />}
  </>
  );
}

export default App;