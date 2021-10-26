import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import { meInfo, setIsLoggedIn } from "./Store/actions/userActions";
import instance from "./services/index";
import Inputform from './components/Inputform';
import Auth from "./pages/Authinticate/auth";
import Header from "./pages/Header";
import ProfileDetails from "./pages/MyProfile/ProfileDetails";





function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state?.isLoggedIn);

  useEffect(() => {
    studentMe();
  }, []);

  const studentMe = async () => {
    if (localStorage.getItem("token")) {
      try {
        const res = await instance.get("/user/userProfile");
        dispatch(setIsLoggedIn(true));
        dispatch(meInfo(res));
      } catch (error) {
        console.log(error.res);
      }
    }
  };

 
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <Header />}

        <Switch>
          <Route path="/" exact render={() => {
            if(localStorage.getItem('token')) {
              <Inputform />
            }else {
              return <Auth />
            }
            }} />
          <Route path="/inputform" component={Inputform} />
          <Route path="/profiledetails" component={ProfileDetails} />         
          
        </Switch>

    {/* <UploadImage/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
