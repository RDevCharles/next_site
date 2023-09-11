import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team"  className="py-20 bg-gradient-to-b from-purple-300 to-magenta-400">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className=" p-6 ">
           
            <Image className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" src={"/person1.jpg"} width={150} height={150} />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className=" p-6 ">
          <Image className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" src={"/person2.jpg"} width={150} height={150} />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Head of Data Science</p>
            
          </div>

          {/* Team Member 3 */}
          <div className=" p-6 ">
          <Image className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" src={"/person3.jpg"} width={150} height={150} />
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-700">Lead AI Engineer</p>
            
          </div>

          {/* Team Member 4 */}
          <div className=" p-6 ">
          <Image className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" src={"/person4.jpg"} width={150} height={150} />
            <h3 className="text-xl font-semibold mb-2">Sarah Brown</h3>
            <p className="text-gray-700">Data Analyst</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
