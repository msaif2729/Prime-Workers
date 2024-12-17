import React from 'react';

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden  ">
      <div className="w-[90%]  bg-gray-100 h-[90%] rounded-lg shadow-lg ">
        {/* Header */}
        <div className="fixed w-[90%] rounded-t-lg px-5 lg:px-10 py-3 bg-gray-100 ">
            <div className='flex justify-between items-center text-center '>
                <h2 className="text-2xl font-kanit text-[var(--color1)] font-bold">
                    {content.title}
                </h2>
                <button
                    className="text-[var(--color1)] hover:text-gray-800 text-3xl"
                    onClick={onClose}
                >
                    &times;
                </button>

            </div>
        </div>

        {/* Content */}
        <div className=' mt-14 h-[90%] overflow-auto px-6 py-4'>
            {/* <img src={content.images[1]} alt="" /> */}

          {content.images && content.images.length > 0 ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 ">
              {content.images.map((image, index) => (
                <div
                  key={index}
                  className=" bg-center bg-cover rounded-lg shadow overflow-hidden"
                  // style={{ backgroundImage: `url(${image})` }}
                >
                  <img src={image} alt={`Uploaded`} className="w-[50vh] h-[40vh] "  />
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-center text-gray-600 font-kanit">No images available</h1>
          )}
        </div>
      </div>
    </div>
  );
}
