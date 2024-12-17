import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./FirebaseConfig"
import { getStorage, deleteObject } from "firebase/storage";

async function uploadMultipleImages(files) {
  if (!Array.isArray(files) || files.length === 0) {
    console.error("No files provided or input is not an array");
    return;
  }

  const uploadPromises = files.map(async (file, index) => {
    const storageRef = ref(storage, `images/image_${Date.now()}_${index}_${file.name}`);
    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      // console.log(`File ${file.name} uploaded successfully at: `, downloadURL);
      return downloadURL;
    } catch (error) {
      console.error(`Error uploading file ${file.name}:`, error);
      return null;
    }
  });

  // Wait for all uploads to finish
  const downloadURLs = await Promise.all(uploadPromises);

  // Filter out any null values (failed uploads)
  const successfulUploads = downloadURLs.filter((url) => url !== null);

  // console.log("All uploaded image URLs:", successfulUploads);
  return successfulUploads;
}

const deleteImage = async (imageURL)=>{

  
  const imagestorage  = getStorage();

  imageURL.map((image,index)=>{
  
  const decodedPAth = decodeURIComponent(image.split('/o/')[1].split('?')[0]);
  const imageRef = ref(storage,decodedPAth);
  // console.log(imageRef);
  deleteObject(imageRef)
  .then(()=>{
    console.log("Image Deleted Successfully");
  })
  .catch((error)=>{
    console.log(error.message);
  })
  })
}
export {uploadMultipleImages,deleteImage};


// const handleImageUpload = async (event) => {
//     const files = event.target.files; // Files selected from file input
//     if (files.length > 10) {
//       console.error("You can only upload up to 10 images.");
//       return;
//     }
    
//     const fileArray = Array.from(files); // Convert FileList to Array
//     const imageUrls = await uploadMultipleImages(fileArray);
    
//     if (imageUrls.length > 0) {
//       console.log("Uploaded Image URLs:", imageUrls);
//       // You can now save these URLs to your database or use them as needed
//     } else {
//       console.error("No images were uploaded successfully.");
//     }
//   };
  
// <input
// type="file"
//  multiple
//  accept="image/*"
//  onChange={handleImageUpload}
///> 
