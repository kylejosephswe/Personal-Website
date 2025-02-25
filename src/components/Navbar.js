//Library imports.
import { Link } from "react-router-dom";
function Navbar() {
  let pathName = window.location.pathname;

  return (
    <div className="nav-flex">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <svg
            styles="color: white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="nav-infinity-logo"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394A3.166 3.166 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.484 3.484 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a2.958 2.958 0 0 1-.298 1.102 2.257 2.257 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.255 2.255 0 0 1-.763-.88 2.958 2.958 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a1.958 1.958 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a1.958 1.958 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.482 3.482 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5c-.149 0-.352-.145-.352-.145l-.004-.004a3.482 3.482 0 0 0-.58-.417A3.166 3.166 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.482 3.482 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0zM6.577 2.123c-2.833.5-4.99 2.458-5.474 4.854A4.124 4.124 0 0 1 3 6.5c.806 0 1.48.25 1.962.511a9.706 9.706 0 0 1 .344-2.358c.242-.868.64-1.765 1.271-2.53zm-.615 4.93A4.16 4.16 0 0 1 8 6.5a4.16 4.16 0 0 1 2.038.553 8.688 8.688 0 0 0-.307-2.13C9.434 3.858 8.898 2.83 8 2.117c-.898.712-1.434 1.74-1.731 2.804a8.687 8.687 0 0 0-.307 2.131zm3.46-4.93c.631.765 1.03 1.662 1.272 2.53.233.833.328 1.66.344 2.358A4.14 4.14 0 0 1 13 6.5c.77 0 1.42.23 1.897.477-.484-2.396-2.641-4.355-5.474-4.854z"
              fill="white"
            ></path>{" "}
          </svg>
        </Link>
      </div>
      <div className="nav-flex-internal">
        <Link to="/" style={{ textDecoration: "none" }}>
          {pathName === "/" ? (
            <h4
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
              className="nav-text"
            >
              About
            </h4>
          ) : (
            <h4 className="nav-text">About</h4>
          )}
        </Link>
        <Link to="/experience" style={{ textDecoration: "none" }}>
          {pathName === "/experience" ? (
            <h4
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
              className="nav-text"
            >
              Experience
            </h4>
          ) : (
            <h4 className="nav-text">Experience</h4>
          )}
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          {pathName === "/projects" ? (
            <h4
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
              className="nav-text"
            >
              Projects
            </h4>
          ) : (
            <h4 className="nav-text">Projects</h4>
          )}
        </Link>
        <a
          className="a-link resume"
          href="https://drive.google.com/file/d/1So5jdSa_0EyeOPFRY2T6hxD4hJC3jFNh/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="nav-text resume">Resume</h4>
        </a>
        <a
          className="a-link resume"
          href="https://beacons.ai/softwarebykyle"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="nav-text resume">Content</h4>
        </a>
        <a
          href="https://www.linkedin.com/in/kylejosephswe/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              fill="white"
            ></path>{" "}
          </svg>
        </a>
        <a
          href="https://github.com/kylejosephswe"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              fill="white"
            ></path>{" "}
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
