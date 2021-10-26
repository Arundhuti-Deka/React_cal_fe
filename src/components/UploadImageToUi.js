// import React from 'react'
// import { withAuthenticator } from 'aws-amplify-react'

// const UploadImageToUi = () => {
//     const [image, setImage] = useState(
//         {
//           fileUrl: '',
//           file: '',
//           fileName: ''
//         }
//       )
    
//       handleChange = e => {
//           const file = e.target.files[0]
//           this.setState({
//               fileUrl: URL.createObjectURL(file),
//               file,
//               filename: file.name
//           })
//       }

//       saveFile = () => {
//           Storage.put(this.state.filename, this.state.file)
//           .then(() => {
//               console.log('successfully saved file!')
//               this.setState({ fileUrl:'', file:'', filename:''})
//           })
//           .catch(err=>{
//               console.log('error uploading file!', err)
//           })
//       }

//     return (
//         <div>
//             <input type='file' onChange={this.handleChange}/>
//             <img src={this.state.fileUrl}/>
//             <button onClick={this.saveFile}>Save File</button>
//         </div>
//     )
// }

// export default UploadImageToUi
