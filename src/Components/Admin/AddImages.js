import React, { useContext, useRef, useState } from 'react'
import CustomDropdown from '../CustomDropdown'
import dataContext from '../../Context/dataContext';
import { uploadMultipleImages } from '../../Firebase/Firebase';
import { toast } from 'react-toastify';

export default function AddImages() {

  const [selectedOption,setSelectedOption] = useState('');
  const [uploadedImages,setUploadedImages] = useState(null);
  const context = useContext(dataContext);
  const fileInput = useRef(null);

  const handleSelect = (option)=>{
      setSelectedOption(option);
    }
    
    const handleImageUpload = async (event) => {
      const files = event.target.files; 
      if (files.length > 10) {
        console.error("You can only upload up to 10 images.");
        return;
      }
      
      const fileArray = Array.from(files);
      setUploadedImages(fileArray);
      // console.log(fileArray)
    };
    
    const handleSubmitAdd = async(e)=>{
      e.preventDefault(); 

      if(selectedOption && uploadedImages)
      {
        toast.info("Uploading Images...");
      // console.log("Selected Service : "+selectedOption+"\n")
      // console.log(uploadedImages)
      const imageUrls = await uploadMultipleImages(uploadedImages);
      
      if (imageUrls.length > 0) {
        // console.log("Uploaded Image URLs:", imageUrls);
        const data = await context.insertImage({title:selectedOption,images:imageUrls});
        fileInput.current.value = "";
        setUploadedImages([]);

      } else {
        console.error("No images were uploaded successfully.");
      }
      toast.success("Uploaded Successfully!!!")
      }
      else {
        toast.error("Select the Data!!!");
      }
  }



  return (
    <div>
       <div className=' p-5 lg:p-10  bg-[var(--card)]'>
          <h1 className=' font-kanit text-2xl lg:text-3xl  font-semibold text-[var(--color1)]'>Add Or Delete Service Images</h1>
          <div className='my-5 relative'>
              <label htmlFor="" className="block my-2 text-sm font-oswald tracking-widest font-medium">
              Select Category To Insert Images
              </label>
              <CustomDropdown onSelectOption={handleSelect}/>
          </div>
          <div className=''>
            <h1 className=' font-kanit text-lg lg:text-2xl  font-semibold text-[var(--color1)]'>Add Images</h1>
            <form action="" onSubmit={handleSubmitAdd}>
              <div className=''>
                  <label htmlFor="" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                  Images
                  </label>
                  <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  ref={fileInput}
                  className="w-full my-2 bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                  placeholder="Service Cover Image"
                  onChange={handleImageUpload}
                  /> 
              </div>
              <div className="flex justify-start my-5">
                <button
                  type='submit'
                  name='addimgbtn'
                  id='addimgbtn'
                  className="hover:-skew-x-12 hover:text-[var(--color6)] transition-all duration-300 ease-in-out  hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white pt-1 pb-2 p-5  hover:border-[var(--color1)] bg-[var(--color1)]"
                  >
                  Add Images
                  </button>
              </div>
            </form>
          </div>

      </div>
    </div>
  )
}
