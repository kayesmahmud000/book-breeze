import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import { BsArrowLeft } from 'react-icons/bs';

const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log(service);

    return (
        <div className=''>
            {/* Page Heading Section */}
            <div className="relative w-full h-[600px] mb-10 overflow-hidden ">
                <img
                    src={service.photo}
                    alt={service.service}
                    className="w-full h-full object-cover brightness-105 order-none"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-20 text-white text-center">
                    <PageHeading title={service.service} subtitle="" />
                </div>
            </div>

            {/* Service Information Section */}
            <div className="p-12 rounded-lg border max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold mb-5 text-gray-800">{service.service}</h2>
                <p className="mb-5">{service.description}</p>

                {/* Service Features Section */}
                <table className="table-auto w-full text-left border-collapse border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="font-medium p-3 border">Service Features</td>
                            <td className="p-3 border">
                                {/* Correctly mapping through the features object */}
                                <ul className="list-disc ml-6">
                                    {Object.entries(service.features).map(([key, value]) => (
                                        <li key={key} className="text-lg">{value}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-medium p-3 border">
                                Availability
                            </td>
                            <td>
                                {service.availability
                                   
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Call to Action Button */}
              <Link to={"/"}>
               <button className='btn btn-md mt-20 bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'> <BsArrowLeft></BsArrowLeft> Back Home  </button>
              </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
