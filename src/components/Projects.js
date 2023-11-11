//Local code files.
import Navbar from './Navbar'
import Work from './Work'

//Local images.
import Keshi from '.././images/keshiImage.jpg'
import NikeLogo from '.././images/Nike3.webp'
import animeImage from '.././images/animeImage1.jpg'
import pokemon from '.././images/pokemon.jpg'
//import MelovernaLogo from '.././images/melovernaLogo.png'

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="projects-header">Projects</h1>
      <Work image={animeImage} altImage='Meloverna' jobTitle='Personal Project' companyName='Meloverna' workDesc='Meloverna is a platform for learning language through music' skills="SQL, Kotlin, Python, Flask, JavaScript, React.js, Jest, JUnit, CSS, Git" redirect='https://meloverna-d69d4.web.app/' />
      <Work image={NikeLogo} altImage='Nike Sneaker Gallery' jobTitle='Personal Project' companyName='Nike Sneaker Gallery' workDesc='Nike Sneaker Gallery is an E-commerce sneaker website I developed with the intention of improving my design skills' skills="TypeScript, React, Router, Context API, Firebase, CSS" redirect='https://sneaker-gallery.web.app/' />
      <Work image={pokemon} altImage='Pokedex' jobTitle='Personal Project' companyName='National Pokédex' workDesc='Displays the National Pokédex with the intention of gaining REST API experience and displaying the data in a meaningful way' skills="React, JavaScript, PokéAPI, Context API, Firebase, CSS" redirect='https://national-pokedex.web.app/' />
      <Work image={Keshi} altImage='Keshi' jobTitle='Personal Project' companyName='Keshi Music Bracket' workDesc='Keshi Music Bracket is a game I developed where you can eliminate songs until you find your favorite Keshi song' skills="TypeScript, Html, Firebase, CSS" redirect='https://keshi-music-bracket.web.app/' />
    </div>
  )
}

export default Projects