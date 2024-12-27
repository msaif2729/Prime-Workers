import React, { useContext, useEffect, useState } from 'react';
import dataContext from '../../Context/dataContext';
import CustomDropdown from '../CustomDropdown';
import ImageComponent from './ImageComponent';

export default function DelImages() {
  const [images, setImages] = useState([]);
  const context = useContext(dataContext);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleImageDelete = (deletedImage) => {
    // Filter out the deleted image
    setImages((prevImages) => prevImages.filter((image) => image !== deletedImage));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedOption) {
        const data = await context.getData(selectedOption);
        // console.log(data.getData.images); 
        setImages(data.getData.images || []); 
      } else {
        setImages([]); 
      }
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div>
      <div className="p-5 lg:p-10 bg-[var(--card)]">
        <h1 className="font-kanit text-lg lg:text-2xl font-semibold text-[var(--color1)]">Delete Images</h1>
        <div className="my-5 relative">
          <label htmlFor="delimage" className="block my-2 text-sm font-oswald tracking-widest font-medium">
            Select Category To Delete Images
          </label>
          <CustomDropdown onSelectOption={handleSelect} />
        </div>
        <div className="flex justify-center items-center">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {images.map((image, index) => (
                <div key={index}>
                  <ImageComponent image={image} title={selectedOption}  onDelete={handleImageDelete} />
                </div>
              ))}
            </div>
          ) : (
            <p>No Images to Show</p> // Fallback message when there are no images
          )}
        </div>
      </div>
    </div>
  );
}
