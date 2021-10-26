import React, { useState, useEffect } from "react";
import UploadImage from "../../components/UploadImage";
import instance from "../../services/index";


const ProfileDetails = () => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    studentMe();
  }, []);

  

  const studentMe = async () => {
    

    if (localStorage.getItem("token")) {
      try {
        const res = await instance.get("/user/userProfile");
        // console.log("editprofile", res.data);
        setProfile(res.data);
      } catch (error) {
        console.log(error.res);
      }
    }
  };

  console.log('profile',profile.firstName)
  return (
    <div>
      <form>      
    <div className="flex flex-row justify-center">
      <div>
      <UploadImage />
      </div>   

      <div className="pt-7">
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">Firstname: </label>
          </div>
          <div className="md:w-2/3">
          <input
            id="name"
            type="text" 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter name"
            value={profile.firstName}
          ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">Lastname: </label>
          </div>
          <div className="md:w-2/3">
          <input
            id="name"
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter name"
            value={profile.lastName}
          ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">Email: </label>
          </div>
          <div className="md:w-2/3">
          <input
            id="email"
            type="email"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter email"
            value={profile.email}
          ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phone">Phone number: </label>
          </div>
          <div className="md:w-2/3">
            <input
            id="phone"
            type="number"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter phone number"
            value={profile.phoneNo}
          ></input>
          </div>
        </div>
      </div>
      {/* <div className="flex mb-14">
                    <button onClick={submit}
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4" >Submit</button>
                </div> */}
      {/* </form> */}
    </div>
    </form>
    </div>
  );
};

export default ProfileDetails;
