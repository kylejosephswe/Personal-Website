//Local code files.
import Navbar from './Navbar'
import Work from './Work'

//Local images.
import Keshi from '.././images/keshiImage.jpg'
import NikeLogo from '.././images/Nike3.webp'
import animeImage from '.././images/animeImage1.jpg'
import pokemon from '.././images/pokemon.jpg'

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="projects-header">Projects</h1>
      <Work image={animeImage} altImage='Meloverna' jobTitle='Personal Project' companyName='Meloverna' workDesc='SQL, Kotlin, Python, Flask, JavaScript, React.js, Jest, JUnit, CSS, Git' redirect='https://meloverna-d69d4.web.app/' />
      <Work image={NikeLogo} altImage='Nike Sneaker Gallery' jobTitle='Personal Project' companyName='Nike Sneaker Gallery' workDesc='TypeScript, React, Router, Context API, Firebase, CSS' redirect='https://sneaker-gallery.web.app/' />
      <Work image={pokemon} altImage='Pokedex' jobTitle='Personal Project' companyName='National Pokédex' workDesc='React, PokéAPI, Context API, Firebase, CSS' redirect='https://national-pokedex.web.app/' />
      <Work image={Keshi} altImage='Keshi' jobTitle='Personal Project' companyName='Keshi Music Bracket' workDesc='TypeScript, Html, Firebase, CSS' redirect='https://keshi-music-bracket.web.app/' />
    </div>
  )
}

export default Projects