import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Count from "../components/Count";
import Fetch from "../components/Fetch";

const routes = createBrowserRouter([{
    path:'/',
    element: <App/>

},
{
path:'/counter',
element: <Count/>
},
{
    path:'/fatch',
    element:<Fetch/>
}
])

export default routes