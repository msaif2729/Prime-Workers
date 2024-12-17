import React, { useContext } from 'react'
import dataContext from '../../Context/dataContext'
import { deleteImage } from '../../Firebase/Firebase';
import { toast } from 'react-toastify';

export default function ImageComponent(props) {

    const {title,image,onDelete} = props;

    const context = useContext(dataContext); 

    const handleClick = async () => {
        try {
            toast.info("Deleting Images...")
          await deleteImage([image]); // Delete from Firebase
          const deleted = await context.deleteImage({ title, image }); // Delete from database
          if (deleted) {
            onDelete(image); // Notify parent to remove the image from the list
            toast.info("Deleted Successfully.")
          }
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      };

  return (
    <div className='flex -z-50'>
      <div className=' bg-[var(--bg)]  rounded-2xl relative overflow-hidden hover:shadow-dark-bottom-right cursor-pointer '>
        <img src={image} alt={`Uploaded`} className="w-[40vh] h-[30vh] "  />
        <div className='absolute  bottom-5 right-3 w-5 h-5'>
            <i className="transition-all duration-300 text-xl hover:text-[var(--color4)] cursor-pointer text-[var(--card)] fa-solid fa-trash" onClick={handleClick}></i>
        </div>

        </div>
    </div>
  )
}
