import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 flex flex-row items-center justify-between">
      <div className="w-1/2 order-2">
        
        <h1 className="  text-3xl  mb-6">
          Welcome to AI Analytics, your trusted partner for cutting-edge AI and analytics solutions.
        </h1>
        <p className=" text-xl text-gray-700 mt-6">
          Our mission is to provide tailored AI solutions to meet your specific business needs, ensuring that your data is not only organized and secure but also readily accessible for strategic decision-making.
        </p>
      </div>
      <div className="w-1/2 order-1">
        <Image  src={"/gif.gif"} width={350} height={300}/>
      </div>
    </section>
  );
};

export default About;
