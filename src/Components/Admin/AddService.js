import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import dataContext from '../../Context/dataContext';
import uploadMultipleImages from '../../Firebase/Firebase';

export default function AddService() {

  const [service,setService] = useState({
    title:"",tagline:"",description:"",coverImage:"",icon:""
  });

  const context = useContext(dataContext);

  const [selectedImage,setSelectedImage] = useState('');

  const [error,setError] = useState('');

  const handleChange = (e)=>{
    const inputText = e.target.value;

    if (inputText.length <= 200) {
      setService({...service,[e.target.name]:e.target.value})
      setError("");
    } else {
      setError("Input must be less than 200 characters.");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (service.title && service.tagline && service.description && service.coverImage && service.icon) {
      try {
        
        const exist = await context.getData({title:service.title})
        console.log(exist)
        if (exist && exist.dataE) {
          toast.error("Service already exists");
        } else {
           
            toast.info("Uploading images...");
            const uploadedImages = await uploadMultipleImages([service.coverImage, service.icon]);

            if (uploadedImages && uploadedImages.length === 2) {
                const updatedService = {
                    ...service,
                    coverImage: uploadedImages[0],
                    icon: uploadedImages[1],
                };

                console.log("Uploaded images:", updatedService);

                const response = await context.createData(updatedService);

                if (response) {
                    setService({ title: "", tagline: "", description: "", coverImage: "", icon: "" });
                    toast.success("Service Added Successfully!");
                }
            } else {
                toast.error("Image upload failed. Please try again.");
            }
        }
      } catch (error) {
        console.error("Error uploading images:", error);
        toast.error("An error occurred while uploading images.");
      }
    } else {
      toast.error("All fields are required!");
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
        <div className='flex items-center   flex-col lg:flex-row py-5'>
          <form className="space-y-5 lg:w-[50%]" onSubmit={handleSubmit}>

             <div className=''>
                  <label htmlFor="title" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                  Title
                  </label>
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
                  onChange={handleImageChange}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                  placeholder="Service Icon"
                  />
              </div>

              <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-oswald tracking-widest font-medium">
                  Message
                  </label>
                  <textarea
                  id="description"
                  name='description'
                  rows="4"
                  value={service.description}
                  onChange={handleChange}
                  className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit    "
                  placeholder="Service descriptionription"
                  ></textarea>
              </div>
              <div className='flex flex-col lg:flex-row lg:gap-5'>
                <p>{service.description.length}/200</p>
                {error && <p className=' text-red-600 font-kanit  '>{error}</p>}

              </div>

              <div className="flex justify-start">
                  <button
                  type='submit'
                  className="hover:-skew-x-12 hover:text-[var(--color6)] transition-all duration-300 ease-in-out  hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white pt-1 pb-2 p-5  hover:border-[var(--color1)] bg-[var(--color1)]"
                  >
                  Send Message
                  </button>
              </div>
          </form>

        <div className='lg:w-[50%] p-5 flex justify-center items-center'>
            {
              (service.title) ? (
              <div className="bg-[var(--bg)] flex p-4 w-[50%] text-[var(--text)] md:h-[45vh] hover:scale-105 lg:h-[55vh] h-auto shadow-xl rounded-md transition-all duration-300  ">
                <div className="flex flex-col justify-evenly items-center  ">
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <img src={selectedImage.icon} className='w-16' alt="" />
                        <h1 className="text-2xl font-oswald font-semibold">{service.title}</h1>
                        <span className='lg:h-[2px] h-[1px] w-32 bg-[var(--color1)]' ></span>
                    </div>
                    <div className='space-y-5  '>
                        <h2 className="text-lg text-center font-kanit ">{service.tagline}</h2>
                        <p className="text-[15px] text-center text-[var(--color7)] font-kanit font-extralight mt-4 px-4">{service.description}</p>
                    </div>
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
  )
}
