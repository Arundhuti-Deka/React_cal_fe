import React, { useState } from "react";

import { useHistory } from "react-router-dom"
import user1 from '../images/user1.png'

import { useDispatch, useSelector } from "react-redux";
import {FaSignOutAlt} from 'react-icons/fa'
import { setIsLoggedIn } from "../Store/actions/userActions";
const Header = () => {
    const history = useHistory()
    const [showProfile, setshowProfile] = useState(false)
    const state = useSelector(state => state.me)
    const dispatch=  useDispatch();
    const signout = () => {
        localStorage.removeItem("token");
        dispatch(setIsLoggedIn(false));
        history.push("/")
    }
    return (
        <React.Fragment>
            <div className="flex justify-between mx-36 items-center  ">
                <div className=" text-white px-3.5  flex justify-start items-center">
                    
                </div>
                <div className="  flex flex-row items-center  h-9 mt-6">
                    
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setshowProfile(!showProfile)} className="inline-flex justify-center w-full " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {/* <img src={state?.profilePicture} className="w-10 h-10 rounded-full" alt=""/> */}
                                <img src={user1} className="w-10 h-10 rounded-full" alt=""/>
                            </button>
                        </div>
                        {
                            showProfile && (<>
                        <div className="w-screen h-screen fixed top-0 left-0 zIndex-40 " onClick={() => setshowProfile(!showProfile)} />
                        <div className="origin-top-right absolute right-0 mt-2  h-32 w-44  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-300" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                               
                                  <div className="flex flex-wrap space-x-2 px-3 hover:bg-red-400">
                                      <div className="pl-8 pt-3.5" >
                                      <FaSignOutAlt/>
                                      
                                      </div>
                                      <div>
                                      <button type="submit" onClick={signout} className="text-gray-700  flex flex-justify-between  w-full text-left   py-4 -mt-2 font-semibold text-base" role="menuitem" tabIndex="-1" id="menu-item-1">
                                  Sign out
                                </button>
                                      </div>
                                  </div>
                            </div>
                        </div>
                        </>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;