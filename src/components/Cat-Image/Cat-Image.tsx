import Cat from "../../assets/Cat.png";
import "./Cat-Image.css";
function CatImg(): JSX.Element {
  return (
    <>
      <div id="image-container">
        <img src={Cat} alt="Картинка кота" id="catImage" />
        <div id="text-overlay">
          <p className="first-paragraph">Lorem Ipsum is simply</p>
          <p className="second-paragraph">Lorem Ipsum is simply</p>
        </div>
      </div>
    </>
  );
}

export default CatImg;
