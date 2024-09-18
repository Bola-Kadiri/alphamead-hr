import { createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom";
import Layout from "./Layout/Layout";

import Joblist from "./pages/joblist/Joblist";
import Home from "./component/Home/Home";



export const router =  createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={<Layout/>}>
              <Route path="/" element={ <Home/>}/>
              <Route path="/job-list" element={ <Joblist/>}/>
        </Route>
    
       
        
    )
  );