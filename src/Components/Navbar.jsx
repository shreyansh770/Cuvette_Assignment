import "../Styles/Nav.css";
import navimg from "../Images/cuvette-rbg.png";
import cuimg from "../Images/user.png"

let Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-img">
        <img src={navimg} alt="" />
      </div>
      <div className="nav-user">
        <div className="nav-user-details">
          <div className="nav-user-img">
              <img src={cuimg} alt="" />
          </div>
          <div className="nav-user-name">Siddharth Jain</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
