import React, { useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import dataContext from '../../Context/dataContext';
import {uploadMultipleImages} from '../../Firebase/Firebase';
import ServiceItem from '../ServiceItem';
import Preview2 from './Preview2';

export default function AddService() {

  const [service,setService] = useState({
    title:"",tagline:"",description:"",coverImage:"",icon:""
  });

  const context = useContext(dataContext);
  const [selectedImage,setSelectedImage] = useState('');
  const [changePreview,setChangePre] = useState(true);
  const [error,setError] = useState('');
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);

  const handleChange = (e) => {
    const inputText = e.target.value;
  
    if (e.target.name === 'description') {
      if (inputText.length > 200) {
        setError("Description must be less than or equal to 200 characters.");
      } else if (inputText.length < 100 && inputText.length > 0) {
        setError("Description must be at least 100 characters.");
      } else {
        setError("");
      }
    }
  
    setService({ ...service, [e.target.name]: inputText });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(error.length===0)
    {

      if (service.title && service.tagline && service.description && service.coverImage && service.icon) {
        try {
          
          toast.info("Uploading images...");
          const uploadedImages = await uploadMultipleImages([service.coverImage, service.icon]);
  
          if (uploadedImages && uploadedImages.length === 2) {
              const updatedService = {
                  ...service,
                  coverImage: uploadedImages[0],
                  icon: uploadedImages[1],
              };
  
              // console.log("Uploaded images:", updatedService);
  
              const response = await context.createData(updatedService);
  
              if (response) {
                  setService({ title: "", tagline: "", description: "", coverImage: "", icon: "" });
                  setSelectedImage({coverImage:"",icon:""})
                  fileInput1.current.value=""; 
                  fileInput2.current.value="";  
                  toast.success("Service Added Successfully!");
              }
          } else {
              toast.error("Image upload failed. Please try again.");
          }
        } catch (error) {
          console.error("Error uploading images:", error);
          toast.error("An error occurred while uploading images.");
        }
      } else {
        toast.error("All fields are required!");
      }
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          setService({...service,[event.target.name]:file})
          setSelectedImage({...selectedImage,[event.target.name]:reader.result})
      }
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className=' p-5 lg:p-10 bg-[var(--card)]'>
        <h1 className=' font-kanit text-2xl lg:text-3xl  font-semibold text-[var(--color1)]'>Add Service</h1>
        <div className='flex  flex-col lg:flex-row py-5'>
          <form className="space-y-5 lg:w-[50%]" onSubmit={handleSubmit}>

             <div className=''>
                <label htmlFor="title" className="block  text-sm font-oswald tracking-widest font-medium">
                Title
                </label>
                <div>
                    <input
                    type="text"
                    id="title"
                    name='title'
                    value={service.title}
                    onChange={handleChange}
                    className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                    placeholder="Service Title"
                    />
                </div>
              </div>

              <div className=''>
                  <label htmlFor="tagline" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                  Tagline
                  </label>
                  <input
                  type="text"
                  id="tagline"
                  name="tagline"
                  value={service.tagline}
                  onChange={handleChange}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                  placeholder="Service Tagline"
                  />
              </div>

              <div className=''>
                  <label htmlFor="coverImage" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                  Cover Image
                  </label>
                  <input
                  type='file'
                  accept='image/*'
                  id="coverImage"
                  name="coverImage"
                  onChange={handleImageChange}
                  ref={fileInput1}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                  placeholder="Service Cover Image"
                  />
              </div>

              <div className=''>
                  <label htmlFor="icon" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                  icon
                  </label>
                  <input
                  type='file'
                  accept='image/*'
                  id="icon"
                  name="icon"
                  ref={fileInput2}
                  onChange={handleImageChange}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                  placeholder="Service Icon"
                  />
              </div>

              <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-oswald tracking-widest font-medium">
                  Description
                  </label>
                  <textarea
                  id="description"
                  name='description'
                  rows="4"
                  value={service.description}
                  onChange={handleChange}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit    "
                  placeholder="Service description"
                  ></textarea>
              </div>
              <div className='flex flex-col lg:flex-row lg:gap-5'>
                <p>{service.description.length}/200</p>
                {error && <p className=' text-red-600 font-kanit  '>{error}</p>}

              </div>

              <div className="flex justify-start">
                <button
                  type='submit'
                  name='addbtn'
                  id='addbtn'
                  className="hover:-skew-x-12 hover:text-[var(--color6)] transition-all duration-300 ease-in-out  hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white pt-1 pb-2 p-5  hover:border-[var(--color1)] bg-[var(--color1)]"
                  >
                  Add Service
                  </button>
              </div>
          </form>

          
          {/* Preview */}
    
          <div className='lg:w-[50%] mt-5 lg:mt-0 relative  p-5 flex flex-col justify-center items-center ' >

            {service.title?(
            <div className=' absolute top-0 left-10 my-10 lg:my-0'>
                <button className={`${changePreview?"-skew-x-12 text-[var(--color6)] bg-transparent border-2 border-[var(--color1)] ":"border-transparent"} hover:-skew-x-12 hover:text-[var(--color6)] hover:border-[var(--color1)] hover:bg-transparent transition-all duration-300 ease-in-out border-2  rounded-sm font-kanit text-white pt-1 pb-2 p-5 bg-[var(--color1)]  `} onClick={()=>setChangePre(true)} > Preview 1</button>  
                <button className={`${changePreview===false?"-skew-x-12 text-[var(--color6)] bg-transparent border-2 border-[var(--color1)] ":"border-transparent"} mx-5 hover:-skew-x-12 hover:text-[var(--color6)] hover:border-[var(--color1)] hover:bg-transparent transition-all duration-300 ease-in-out border-2  rounded-sm font-kanit text-white pt-1 pb-2 p-5 bg-[var(--color1)]  `} onClick={()=>setChangePre(false)}> Preview 2</button>  
            </div>
            ):
            (<></>)
          }

            <div className='w-full flex mt-20 lg:mt-0 justify-center items-center'>
              
                {
                  (service.title) ? (
                  // <div className="bg-[var(--bg)] flex p-4 w-[50%] text-[var(--text)] md:h-[45vh] hover:scale-105 lg:h-[55vh] h-auto shadow-xl rounded-md transition-all duration-300  ">
                  //   <div className="flex flex-col justify-evenly items-center  ">
                  //       <div className='flex flex-col justify-center items-center space-y-4'>
                  //           <img src={selectedImage.icon} className='w-16' alt="" />
                  //           <h1 className="text-2xl font-oswald font-semibold">{service.title}</h1>
                  //           <span className='lg:h-[2px] h-[1px] w-32 bg-[var(--color1)]' ></span>
                  //       </div>
                  //       <div className='space-y-5  '>
                  //           <h2 className="text-lg text-center font-kanit ">{service.tagline}</h2>
                  //           <p className="text-[15px] text-center text-[var(--color7)] font-kanit font-extralight mt-4 px-4">{service.description}</p>
                  //       </div>
                  //   </div>
                  // </div>
                  <div className='flex justify-center items-center '>
                  
                    <div className='lg:w-[50%]'>
                    {
                      changePreview?(
                        <ServiceItem 
                            title={service.title} 
                            tagline={service.tagline} 
                            description={service.description} 
                            icon={selectedImage.icon} 
                          />   
                      ):(
                        <Preview2 
                          title={service.title} 
                          tagline={service.tagline} 
                          description={service.description} 
                          icon={selectedImage.coverImage} 
                          />
                      )
                    }
                      
                    </div>

                  </div>

                  ):
                  (
                    <h1 className=' font-kanit font-normal text-2xl lg:text-3xl  '>No Preview</h1>
                  )
                }
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
