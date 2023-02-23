import boomer from './images/Boomer.gif'
import boomer2 from './images/Boomer2.gif'
function Work() {
  return (
    <div className="work-flex-container">
      <div className="work-image-text-row">
        <div>
          <img className="work-img-design" width="500" height="460" src={boomer2} alt='Laptop' />
        </div>
        <div className="work-text-column work-text-width-evening">
          <h3 className="job-title">Software Engineer Intern</h3>
          <h2 className="company-name">Siemens EDA</h2>
          <p className="work-desc">TBD</p>
        </div>
      </div>
      <div className="work-image-text-row">
        <div>
          <img className="work-img-design" width="500" height="460" src={boomer} alt='Single Phone' />
        </div>
        <div className="work-text-column">
          <h3 className="job-title">Frontend Engineer</h3>
          <h2 className="company-name">SunnySide</h2>
          <p className="work-desc">Contributed to the SunnySide app in preparation for the official launch by implementing in-app screens, and features needed for a seamless user experience.</p>
        </div>
      </div>
    </div>
  )
}

export default Work