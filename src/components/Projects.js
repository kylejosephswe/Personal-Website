//Local code files.
import Navbar from './Navbar'
import Work from './Work'

//Local images.
import Keshi from '.././images/keshiImage.jpg'
import NikeLogo from '.././images/Nike3.webp'
import animeImage1 from '.././images/animeImage1.jpg'
import teaImage from '.././images/teaImage.jpg'

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="projects-header">Projects</h1>
      <Work image={Keshi} altImage='Keshi' jobTitle='Personal Project' companyName='Keshi Music Bracket' workDesc='TypeScript, Html, CSS' redirect='https://keshi-music-bracket.web.app/' />
      <Work image={NikeLogo} altImage='Nike Sneaker Gallery' jobTitle='Personal Project' companyName='Nike Sneaker Gallery (Work in Progress)' workDesc='React, Router, Context API, Firebase, CSS' redirect='https://sneaker-gallery.web.app/' />
      <Work image={animeImage1} altImage='anime retriever' jobTitle='Personal Project' companyName='Anime Retriever' workDesc='React, Material UI, Fetch API, Firebase, CSS' redirect='https://anime-retriever.web.app/' />
      <Work image={teaImage} altImage='tea cozy' jobTitle='Personal Project' companyName='Tea Cozy Design' workDesc='Html, CSS' redirect='https://tea-cozy-2fba6.web.app/' />
    </div>
  )
}

export default Projects