import "../Styles/Sidebar.css";
import aimg from "../Images/award.png"
import dimg from "../Images/d.png"
import pimg from "../Images/page.png"

let Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="items">
        <div className="item-1">
          <div className="item-1-icon"><img src={dimg} alt=""  /></div>
          <h2 className="item-1-title">Dashboard</h2>
        </div>
        <div className="item-2">
          <div className="item-2-icon"><img src={aimg} alt="" /></div>
          <h2 className="item-2-title">Skill Test</h2>
        </div>
        <div className="item-3">
          <div className="item-3-icon"><img src={pimg} alt="" /></div>
          <h2 className="item-3-title">Internships</h2>
        </div>
      </div>
      <div className="empty_space"></div>
    </div>
  );
};

export default Sidebar;
