import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import img1 from '../assets/img/img1.png';
import Header from "./Header";
import "./style.css";

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
`;

function HomePage() {
  const handleDownload = () => {
    const fileUrl = "../assets/img/Benitha_Louange_IYUYISENGA.pdf"; // Replace with the actual file URL
    const fileName = "../assets/img/Benitha_Louange_IYUYISENGA.pdf"; // Replace with the desired file name

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.style.display = "none";

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };
  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <div className="div1 d-flex flex-column">
          <span className="he1 fw-bold">
            Benitha Louange IYUYISENGA
          </span>
          <span className="he2">
            Transforming concepts into code-driven realities as dedicated <span className="in-text">software developer</span>
          </span>
          <span className="he3">
            WE DEVELOP TOP-NOTCH SOFTWARE.
          </span>
          <div className="d-flex ml-5 buttons">
            <button className="btn">
              <span className="btn-text-one">Hire Me</span>
              <span className="btn-text-two">Great!</span>
            </button>
            <button className="button" onClick={handleDownload} type="button">
              <span className="button__text">Download My CV</span>
              {/* <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span> */}
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src={img1} 
            alt="Floating"
            className="floating-image"
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;

