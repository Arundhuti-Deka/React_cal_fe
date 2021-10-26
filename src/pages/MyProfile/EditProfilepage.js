// import React, { useState, useEffect } from "react";
// import UploadImage from "../../components/UploadImage";
// import { useSelector } from 'react-redux';
// import instance from "../../services/index";
// import { useFormValidation } from "../Authinticate/hooks/useFormValidation"

// const EditProfilepage = () => {
//   const [profile, setProfile] = useState("");

//   useEffect(() => {
//     studentMe();
//   }, []);

  

//   const studentMe = async () => {
    

//     if (localStorage.getItem("token")) {
//       try {
//         const res = await instance.get("/user/userProfile");
//         console.log("editprofile", res.data);
//         setProfile(res.data);
//       } catch (error) {
//         console.log(error.res);
//       }
//     }
//   };

//   console.log('profile',profile.firstName)





//   const state = useSelector(state => state.me)
//     console.log(" me ", state)
//     const submit = async () => {
//         try {
//             const res = await instance.post("/student/edit", {
//                 ...data
//             })
//            // setValues(data)
//         }
//         catch (error) {
//             console.log(error.response)
//         }
//     }
//     const { data, errors, handleChange, handleSubmit, setValues } = useFormValidation({
//         initialValues: {
//             firstname: '',
//             lastname: '',
//             email: '',
//             phone: '',
//             profilePicture: ''
//         },
//         validationSchema: {
//             firstname: {
//                 required: {
//                     value: true,
//                     message: "cannot be empty",
//                 },
//             },
//             lastname: {
//                 required: {
//                     value: true,
//                     message: "cannot be empty",
//                 },
//             },
//             email: {
//                 required: {
//                     value: true,
//                     message: "cannot be empty",
//                 },
//             },
//             phone: {
//                 required: {
//                     value: true,
//                     message: "cannot be empty",
//                 },
//             },
            
//         },
//         submit: submit
//     });
//     useEffect(() => {
//         console.log(state);
//         if (state) {
//             setValues(state);
//         }
//     }, [state])





//   return (
//     <div className="flex flex-row justify-center">
//       <div>
//       <UploadImage />
//       </div>   




//       <div className="">
//             <form onSubmit={handleSubmit}>
                
//                 <div className="flex  text-thin  mb-6 pt-8 ">
//                     <input
//                         onChange={handleChange("firstname")}
//                         placeholder="Firstname"
//                         value={data.firstname}
//                         type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
//                     />
//                     {errors && errors.firstname && (
//                         <p className=" text-red-400 md:ml-16">{errors.firstname}</p>
//                     )}
//                 </div >
//                 <div className="flex  text-thin  pb-8 "  >
//                     <input
//                         onChange={handleChange("lastname")}
//                         placeholder="Lastname"
//                         value={data.lastname}
//                         type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
//                     />
//                     {errors && errors.lastname && (
//                         <p className="text-red-400 md:ml-16">{errors.lastname}</p>
//                     )}
//                 </div>
//                 <div className="flex  text-thin  pb-8 ">
//                     <input
//                         onChange={handleChange("email")}
//                         placeholder="Email Id"
//                         value={data.email}
//                         type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
//                     />
//                     {errors && errors.email && (
//                         <p className="text-red-400 md:ml-16">{errors.email}</p>
//                     )}
//                 </div>
//                 <div className="flex  text-thin  pb-8  ">
//                     <input
//                         onChange={handleChange("phone")}
//                         placeholder="Phone"
//                         value={data.phone}
//                         type="number"
//                         className="border-b-2 w-1/2 hover:border-gray-900 outline-none  "
//                     />
//                     {errors && errors.phone && (
//                         <p className="text-red-400 md:ml-16">{errors.phone}</p>
//                     )}
//                 </div >
                
//             </form>
//         </div>


      
//       <div className="text-left pt-6">
//         <div>
//           <label htmlFor="name">Firstname: </label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Enter name"
//             value={profile.firstName}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="name">Lastname: </label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Enter name"
//             value={profile.lastName}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter email"
//             value={profile.email}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="phone">Phone number: </label>
//           <input
//             id="phone"
//             type="number"
//             placeholder="Enter phone number"
//             value={profile.phoneNo}
//           ></input>
//         </div>
//       </div>
    
//     </div>
//   );
// };

// export default EditProfilepage;
