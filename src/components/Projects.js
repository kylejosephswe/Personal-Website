//Local code files.
import Navbar from "./Navbar";
import Work from "./Work";

//Local images.
import Keshi from ".././images/keshiImage.jpg";
import NikeLogo from ".././images/Nike3.webp";
import animeImage from ".././images/animeImage1.jpg";
import pokemon from ".././images/pokemon.jpg";
//import googleImage5 from ".././images/GoogleImage.svg";
import googleImage6 from ".././images/googleImage.svg";
//import MelovernaLogo from '.././images/melovernaLogo.png'

function Projects() {
  return (
    <div>
      <h1 className="projects-header">Projects</h1>
      {/*
      <Work
        image={animeImage}
        altImage="Meloverna"
        jobTitle="Personal Project"
        companyName="Meloverna (Prototype)"
        workDesc="Meloverna is a platform for learning language through music"
        skills="SQL, Python, Flask, JavaScript, React, Jest, CSS, Git"
        redirect="https://meloverna-d69d4.web.app/"
      />
      */}
      <Work
        image={googleImage6}
        altImage="Google AI Hackathon"
        jobTitle="Personal Project"
        companyName="Google AI Hackathon 2024 Gemini Docs"
        workDesc="Featuring our AI chatbot, students have 24/7 access to a virtual assistant that will help provide answers to any questions they may have about their applications using Gemini Docs! We provide information, reminders, and a step-by-step guide on how to apply for college, FAFSA, and obtaining a Visa."
        skills="NextJS, TypeScript, Python, MongoDB, FastAPI, Gemini API, CSS"
        redirect="https://www.youtube.com/watch?v=7GioaAbDExk"
      />
      <Work
        image={NikeLogo}
        altImage="Nike Sneaker Gallery"
        jobTitle="Personal Project"
        companyName="Nike Sneaker Gallery"
        workDesc="Nike Sneaker Gallery is an e-commerce sneaker website I developed with the intention of improving my design skills"
        skills="TypeScript, React, Router, Context API, Firebase, CSS, Git"
        redirect="https://sneaker-gallery.web.app/"
      />
      {/*
      <Work
        image={pokemon}
        altImage="Pokedex"
        jobTitle="Personal Project"
        companyName="National Pokédex"
        workDesc="The National Pokédex was made with the intention of gaining experience using the REST API and learning to display that API data in a meaningful way"
        skills="React, JavaScript, PokéAPI, Context API, Firebase, CSS, Git"
        redirect="https://national-pokedex.web.app/"
      />
    */}
      <Work
        image={Keshi}
        altImage="Keshi"
        jobTitle="Personal Project"
        companyName="Artist Music Bracket"
        workDesc="Artist Music Bracket is a game I developed where you can choose a singer and find your favorite song by them through eliminating songs until you find your favorite"
        skills="React, JavaScript, React Router, Firebase, CSS, Git"
        redirect="https://keshi-music-bracket.web.app/"
      />
    </div>
  );
}

export default Projects;
