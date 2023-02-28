//Local code files.
import Navbar from './Navbar'
import Work from './Work'

//Local images.
import Keshi from '.././images/keshiImage.jpg'
import animeImage1 from '.././images/animeImage1.jpg'
import teaImage from '.././images/teaImage.jpg'
import loveImage from '.././images/loveImage.jpg'
import triniImage from '.././images/triniImage.jpg'

function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="projects-header">Projects</h1>
      <Work image={Keshi} altImage='Keshi' jobTitle='Personal Project' companyName='Keshi Music Bracket' workDesc='Html, CSS, JavaScript, Bootstrap' redirect='https://keshi-music-bracket.web.app/' />
      <Work image={animeImage1} altImage='anime retriever' jobTitle='Personal Project' companyName='Anime Retriever' workDesc='React, Material UI, Firebase, Fetch API, CSS' redirect='https://anime-retriever.web.app/' />
      <Work image={teaImage} altImage='tea cozy' jobTitle='Personal Project' companyName='Tea Cozy Design' workDesc='Html, CSS' redirect='https://tea-cozy-2fba6.web.app/' />
      <Work image={loveImage} altImage='love probability generator' jobTitle='Personal Project' companyName='Love Probability Generator' workDesc='React, Router, Express, Axios, CSS' redirect='https://github.com/kylejosephswe/LoveProbabilityGenerator' />
      <Work image={triniImage} altImage='tasty trini' jobTitle='Personal Project' companyName='Tasty Trini!' workDesc='TypeScript, React Native, Expo, Android Studio, Context API, Native Navigation' redirect='https://github.com/kylejosephswe/Tasty-Trini' />
    </div>
  )
}

export default Projects