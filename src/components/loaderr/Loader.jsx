import "./style.css";

function Loader() {
  return (
    <>
      <div className="body absolute left-[50%] top-[50px]">
        <div className="atom">
          <div className="center"></div>
          <div className="orbit orbit1">
            <div className="electron elector1"></div>
          </div>
          <div className="orbit orbit2">
            <div className="electron electron2"></div>
          </div>
          <div className="orbit orbit3">
            <div className="electron electron3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
