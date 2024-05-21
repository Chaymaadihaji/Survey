import * as React from "react";
import "../index.css";
import Nav from  "./layouts/navbar";
import homeImage from "../public/home2.png";
import Card from "./layouts/card";
import chaymae_dihaji from "../public/chaymae_dihaji.jpg"
import mohamed_berrahou from "../public/mohamed_berrahou.jpg"
import mohamed_boudrrar from "../public/mohamed_boudrrar.jpg"
import amine_mansouri from "../public/amine_mansouri.jpg"


import img from "../public/img.png";

function Home() {
  const profiles = [
    {
      name: 'Chaymae Dihaji',
      position: 'Software Engineer',
      githubLink: 'https://github.com/Chaymaadihaji',
      linkedinLink: 'https://www.linkedin.com/in/chaymae-dihaji/',
      imageUrl: chaymae_dihaji
      
    },
    {
      name: 'Mohamed Boudrar',
      position: 'Software Engineer',
      githubLink: 'https://github.com/mohamedbd2003',
      linkedinLink: 'https://www.linkedin.com/in/mohamed-boudrar-667383223/',
      imageUrl: mohamed_boudrrar
    
    },
    {
      name: 'Mohamed Berrahou',
      position: 'Software Engineer',
      githubLink: 'https://github.com/Mohamedberraho',
      linkedinLink: 'https://www.linkedin.com/in/mohamed-berraho-666213240/',
      imageUrl: mohamed_berrahou
     
    },
    {
      name: 'Amine Mansour',
      position: 'Software Engineer',
      githubLink: 'lien_github_de_Amine_Mansour',
      linkedinLink: 'https://www.linkedin.com/in/amine-mansour4955/',
      imageUrl: amine_mansouri
    }
  ];

  return (
    <>
      <div>
        <Nav />
        <div className="bg-gray-100">
          <div className="container flex flex-wrap mx-auto py-20">
          <div className="max-w-[550px] max-h-[550px] ml-10"><img src={homeImage}/></div>

            <div className="text-center mt-40">
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
                {profiles.map((profile, index) => (
                  <div key={index} className="w-1/4 p-4">
                    <Card
                      name={profile.name}
                      position={profile.position}
                      githubLink={profile.githubLink}
                      linkedinLink={profile.linkedinLink}
                      image={profile.imageUrl}
                    />
                  </div>
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