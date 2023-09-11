import React from "react";
import Image from "next/image";

const team = [
  { name: "John Doe", title: "Founder & CEO", image: "/person1.jpg" },
  { name: "Jane Smith", title: "Head of Data Science", image: "/person2.jpg" },
  { name: "Mike Johnson", title: "Lead AI Engineer", image: "/person3.jpg" },
  { name: "Sarah Brown", title: "Data Analyst", image: "/person4.jpg" },
];

const Team = () => {

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-purple-300 to-magenta-400"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* map over team array and display each member */}
          
          {team.map((member) => (
            <div className=" p-6 ">
              <Image
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                src={member.image}
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
