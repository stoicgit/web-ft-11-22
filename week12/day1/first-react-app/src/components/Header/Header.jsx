import "./Header.css";
export const Header = (props) => {
  return (
    <div className="headerBody">
      <h2>Header</h2>
      <p>This is a header component</p>
      <h2>{props.student2}</h2>
      <h2>This is Apps counter: {props.counter}</h2>
    </div>
  );
};

export default Header;
