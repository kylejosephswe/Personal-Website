import laptop from './images/Laptop.png'
import singlePhone from './images/SinglePhone.jpg'
function Work() {
  return (
    <div className="work-flex-container">
      <div className="work-image-text-row">
        <div>
          <img width="500" height="460" src={laptop} alt='Laptop' />
        </div>
        <div className="work-text-column">
          <h4>Software Engineer Intern</h4>
          <h1>Siemens EDA</h1>
          <p>Description</p>
        </div>
      </div>
      <div className="work-image-text-row extra-right-padding">
        <div>
          <img width="500" height="460" src={singlePhone} alt='Single Phone' />
        </div>
        <div className="work-text-column">
          <h4>Frontend Engineer</h4>
          <h1>SunnySide</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default Work