import "./Btn.css"

function BtnEl({ id = "", onClick = () => {}, text = "" }) {
  return (
    <>
      <button className="defaultButton" onClick={onClick} id={id}>
        <div className="btnText">{text}</div>
      </button>
    </>
  );
}

export default BtnEl