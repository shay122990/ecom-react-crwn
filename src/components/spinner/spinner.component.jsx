import "./spinner.styles.scss";

const Spinner = ({ width = "50px", height = "50px" }) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" style={{ width, height }}></div>
    </div>
  );
};

export default Spinner;
