import "./select.css";

const Select = ({ name }) => {
  return (
    <div className="select">
      <h3>{name}</h3>
      <span>╲╱</span>
    </div>
  );
};

export default Select;
