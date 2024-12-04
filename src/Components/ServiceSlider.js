import { useState } from 'react';
import Slider from 'react-slick';
import ServiceItem from './ServiceItem';
import ac from '../Assets/images/acservice.png';
import iron from '../Assets/images/ironservice.png';
import steel from '../Assets/images/steelservice.png';
import int from '../Assets/images/intservice.png';

// import ac from '../Assets/images/icons/acservice.png';
// import iron from '../Assets/images/icons/ironservice.png';
// import steel from '../Assets/images/icons/steelservice.png';
// import int from '../Assets/images/icons/intservice.png';

export default function ItemSlider() {

  const [services, setService] = useState([
    {
      title: "AC Service",
      tagline: "Our Service is a Breath of Fresh Air.",
      description:
        "Breathe easy and stay cool with our AC services – ensuring optimal comfort and efficiency for your home or business, no matter the season.",
      icon: ac
    },
    {
      title: "Iron Work",
      tagline: "Strength forged in every design",
      description:
        "Forging strength and durability, shaping iron with precision and expertise. Our iron works deliver timeless solutions that stand strong through the years, creating sturdy, enduring solutions that stand the test of time.",
      icon: iron
    },
    {
      title: "Interior Design",
      tagline: "Designing spaces, crafting dreams.",
      description:
        "Interior design is not just about creating a space that looks beautiful; it’s about creating a space that feels like you. Our home should tell the story of who you are, and be a collection of what you love.",
      icon: int
    },
    {
      title: "Steel Works",
      tagline: "Turning ideas into solid, lasting structures.",
      description:
        "Crafting excellence in steel – where innovation meets strength to build lasting solutions for every project. Our steel works transform ideas into solid, reliable structures that last.",
      icon: steel
    }
  ]);

  const settings = {
    infinite: true,
    slidesToShow: 3,  // Number of items visible on large screens
    slidesToScroll: 1,  // Number of items to scroll
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable:true,
    responsive: [
      {
        breakpoint: 1024,  // Large screens (tablet/laptop)
        settings: {
          slidesToShow: 2,  // Show 3 items on large screens
        }
      },
      {
        breakpoint: 600,  // Medium screens (tablet)
        settings: {
          slidesToShow: 1,  // Show 2 items on medium screens
        }
      },
      {
        breakpoint: 480,  // Small screens (mobile)
        settings: {
          slidesToShow: 1,  // Show 1 item on mobile
        }
      }
    ]
  };

  return (
    <div className="max-w-[375px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl   px-4 py-5 m-5  ">
      <div className=" px-5 mx-auto ">
        {services.length > 0 ? (
          <Slider {...settings} className='w-full'>
            {services.map((service, index) => (
              <div key={index} className="px-2 py-5">
                 <ServiceItem 
                  title={service.title} 
                  tagline={service.tagline} 
                  description={service.description} 
                  icon={service.icon} 
                 />
              </div>
            ))}
          </Slider>
        ) : (
          <p className='text-center font-extrabold text-3xl'>No Service Available.</p>
        )}
      </div>
    </div>
  );
}
