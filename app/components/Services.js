import React from 'react';

const Services = () => {
  return (
    <section style={{ boxShadow: '1px 2px 9px grey' }} id="services" className="py-20 bg-[#45118b]"> 
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-[#420e83] rounded-lg p-8 shadow-md">
            <div className="text-5xl text-purple-600 mb-4">
              <i className="fa fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">AI Analytics</h3>
            <p className="text-white">
              We provide cutting-edge AI analytics solutions to help you gain
              valuable insights from your data.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#420e83] rounded-lg p-8 shadow-md">
            <div className="text-5xl text-purple-600 mb-4">
              <i className="fa fa-database"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Data Management</h3>
            <p className="text-white">
              Our data management services ensure that your data is organized,
              secure, and readily accessible.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#420e83] rounded-lg p-8 shadow-md">
            <div className="text-5xl text-purple-600 mb-4">
              <i className="fa fa-code"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Custom Solutions</h3>
            <p className="text-white">
              We create tailor-made AI and analytics solutions to meet your
              specific business needs.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#420e83] rounded-lg p-8 shadow-md">
            <div className="text-5xl text-purple-600 mb-4">
              <i className="fa fa-microchip"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Innovative Technologies</h3>
            <p className="text-white">
              Stay ahead of the competition with our innovative technologies and
              AI-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
