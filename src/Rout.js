import {BrowserRouter , Routes, Route} from "react-router-dom";
import { Header } from "./module/index";
import { DashboardPage, AboutUsPage, Contact } from "./page/index";



 function Rout(props) {
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route exact path="/" element={<DashboardPage/>} ></Route>
       <Route exact path="/about" element={< AboutUsPage 
       values={props.val} 
       values1={props.val1}
       values2={props.shead}
       bios={props.bio}
       langs={props.lang}
       list={props.langList}
       down={props.downlod}
       para={props.content}
        />}></Route>
       <Route exact path="/contact" element={< Contact />}></Route>

</Routes>
      </BrowserRouter>
    );
  }
  export default Rout;