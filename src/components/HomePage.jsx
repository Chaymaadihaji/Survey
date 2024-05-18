import * as React from "react";
import "../index.css";
import Nav from "./components/navbar";
import homeImage from "../public/home1.jpg"
import Card from "./components/card";


function Home() {
  const profiles = [{
    name: 'Chaymae Dihaji',
    position: 'Software Engineer'
  },
  {
    name: 'Mohamed Boudrar',
    position: 'Software Engineer'
  },
  {
    name: 'Mohamed Berrahou',
    position: 'Software Engineer'
  },
  {
    name: 'Amine Mansour',
    position: 'Software Engineer'
  }
]
  
  return (
    <>
      <div>
      <Nav />
      <div className="bg-gray-100">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">Welcome to Survey App</h1>
            <p className="text-lg text-gray-700 mb-8">Start taking surveys and gather valuable feedback from your audience.</p>
            <a href="/createSondage" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block">Get Started</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8">We provide a simple and efficient way to create and conduct surveys, allowing you to gather valuable insights from your audience.</p>
          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Meet our team</h1>
            <div className="flex flex-wrap justify-center">
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
    </div>
    </>

  );
}
export default Home;
