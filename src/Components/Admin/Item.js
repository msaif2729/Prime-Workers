import React, { useContext } from 'react'
import {deleteImage} from '../../Firebase/Firebase'
import dataContext from '../../Context/dataContext';
import { toast } from 'react-toastify';

export default function Item(props) {

    const {title,description,tagline,images,coverImage,icon} = props;
    const context = useContext(dataContext);

    const handleClick = async()=>{
        // console.log(icon+"\n"+coverImage);
        await deleteImage([coverImage,icon]);
        // console.log(images)
        if(images)
        {
            await deleteImage(images);    
        }
        const deleted = await context.deleteData(title);
        if(deleted)
        {
            toast.success("Deleted Successfully!");
        }
        // console.log(deleted)
    }

  return (
    <div>
        <div className="bg-[var(--bg)]  relative p-4 text-[var(--text)] md:h-[45vh] lg:h-[55vh] h-auto flex hover:shadow-dark-bottom-right  rounded-md transition-all duration-500  ">
            <div className=' bottom-5 right-5  w-5 h-5 absolute'>
                <i className=" transition-all duration-300 text-xl hover:text-[var(--color4)] cursor-pointer text-[var(--card)] fa-solid fa-trash" onClick={handleClick}></i>
            </div>
            <div className="flex flex-col justify-evenly ">
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <img src={icon} className='w-16' alt="" />
                    <h1 className="text-2xl font-oswald font-semibold">{title}</h1>
                    <span className='lg:h-[2px] h-[1px] w-32 bg-[var(--color1)]' ></span>
                </div>
                <div className='space-y-5  '>
                    <h2 className="text-lg text-center font-kanit ">{tagline}</h2>
                    <p className="text-[15px] text-center text-[var(--color7)] font-kanit font-extralight mt-4 px-4">{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
