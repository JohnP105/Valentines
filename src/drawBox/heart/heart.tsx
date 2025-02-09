import "./heart.css"; // Make sure to import the CSS file

function Heart() {
  return (
    <div className="valentine-container">
      <div className="heart-container">
        <div className="heart"></div>
        <div className="valentine-title">
          <h1>Will you be my</h1>
          <h1>Valentine?</h1>
        </div>
      </div>
    </div>
  );
}

export default Heart;
