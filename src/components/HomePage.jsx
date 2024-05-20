import React from "react";
import "../index.css";
import homeImg from "../public/home2.png"
import Card from "./layouts/card";
import Nav from "./layouts/navbar";

function Home() {
  const profiles = [
    {
      id: 1,
      name: 'Chaymae Dihaji',
      position: 'Software Engineer',
      image: 'https://via.placeholder.com/150', // Add image URLs or paths
    },
    {
      id: 2,
      name: 'Mohamed Boudrar',
      position: 'Software Engineer',
      image: 'https://via.placeholder.com/150', // Add image URLs or paths
    },
    {
      id: 3,
      name: 'Mohamed Berrahou',
      position: 'Software Engineer',
      image: 'https://via.placeholder.com/150', // Add image URLs or paths
    },
    {
      id: 4,
      name: 'Amine Mansour',
      position: 'Software Engineer',
      image: 'https://via.placeholder.com/150', // Add image URLs or paths
    }
  ];

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen">
        <div className="container flex flex-wrap mx-auto py-20">
        <div className="max-w-[550px] max-h-[550px] ml-10"><img src={homeImg}/></div>
          <div className="text-center mt-40 ">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">Welcome to Survey App</h1>
            <p className="text-lg text-gray-700 mb-8">Start taking surveys and gather valuable feedback from your audience.</p>
            <a href="/createSondage" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out">Get Started</a>
          </div>
          
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8">We provide a simple and efficient way to create and conduct surveys, allowing you to gather valuable insights from your audience.</p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Meet our team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {profiles.map(profile => (
                <Card
                  key={profile.id}
                  image={profile.image}
                  name={profile.name}
                  position={profile.position}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
