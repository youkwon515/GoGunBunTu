import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import AbtiPage from "./abti";
import TestSitePage from "./testSite";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/abti" element={<AbtiPage />} />
        <Route path="/testSite" element={<TestSitePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;