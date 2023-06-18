import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { publicRoutes } from "~/routes/Layout.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Pages = route.component;
            return <Route key={index} path={route.path} element =  {<Pages/>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
