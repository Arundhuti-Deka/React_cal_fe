import React, { useState } from "react";
import Editprofile from "./Editprofile"

const Profile = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  
  
  return (
    <div>
      <div>
        <div className="">
        <div className="">
          {/* <ul
            className="flex mb-0 bg-gray-200 list-none  pb-1"
          >
            <li className={`ml-32  text-center  border-b-4 border-transparent ${openTab === 1 && 'border-red-500'}  hover:border-red-500`}>
              <a
                className={
                  "text-lg  font-medium px-5 bg-gray-200 py-3  rounded block leading-normal hover:border-yellow-400  " +
                  (openTab === 1
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Edit Profile
              </a>
            </li>
          
            
          </ul> */}
          <h1>
          Edit Profile
          </h1>

          </div>

          <Editprofile /> 


          
        </div>
      </div>
    </div>
  );
};
export default Profile;