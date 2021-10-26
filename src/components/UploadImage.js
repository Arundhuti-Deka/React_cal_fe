import React , {useState} from 'react';
import { uploadFile } from 'react-s3';


const S3_BUCKET ='react-cal-101';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIASECZANIPQTSNGDE6';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImage = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return(
        <div>
        <div className="pt-7  block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 ">
        <div className="text-left">React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button className="bg-gray-600 text-white px-6 py-1.5 flex flex-col mt-4" onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
    </div>
    
    ) 
}

export default UploadImage;