function Work({
  image,
  altImage,
  jobTitle,
  companyName,
  companyDate,
  workDesc,
  skills,
  redirect,
}) {
  return (
    <div>
      <div className="work-flex-container">
        <div className="work-image-text-row">
          <div>
            {redirect ? (
              <a
                className="project-links"
                href={redirect}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="work-img-design"
                  width="500"
                  height="460"
                  src={image}
                  alt={altImage}
                />{" "}
              </a>
            ) : (
              <img className="work-img-design" src={image} alt={altImage} />
            )}
          </div>
          <div className="work-text-column">
            <h3 className="job-title">{jobTitle}</h3>
            <a
              className="a-link"
              href={redirect}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="company-name">{companyName}</h2>
            </a>
            <h2 className="company-date">{companyDate}</h2>
            <p className="work-desc">{workDesc}</p>
            <p className="skills">{skills ? skills : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
