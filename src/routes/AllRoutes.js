import { Routes, Route } from "react-router-dom";
import { Home, Hrana, Pice} from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hrana" element={<Hrana />} />
        <Route path="pice" element={<Pice />} />

    </Routes>
    
    </>
   
  )
}
