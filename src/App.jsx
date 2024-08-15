import {RecoilRoot} from "recoil";
import {useNavigate,BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "./Components/Landing";
import Todos from "./Components/Todos";

export default function App(){
return (<>
<RecoilRoot>
  <BrowserRouter>
  <AppBar/>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/Todos" element={<Todos/>}/>
  </Routes>
  </BrowserRouter>
</RecoilRoot>
</>
)
}



function AppBar(){
  const navigate = useNavigate();
  return(<>
  <button onClick={()=>{navigate("/")}}>Home Page</button>
  <button onClick={()=>{navigate("/Todos")}}>Todos</button>
  </>)
}