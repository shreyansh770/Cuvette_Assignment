import "./Styles/Modal.css";
import htmlimg from "./Images/chtml-rbg.png";
import { useContext } from "react";
import { AuthConext } from "./App";

let Modal = (props) => {
  let value = useContext(AuthConext);

  let info = {
    rank: "",
    percentile: "",
    marks: "",
  };

  return (
    <div className="modaldiv">
      <div className="container">
        <div className="con-head">
          <div className="head-title">
            <h1>Update Scores</h1>
          </div>
          <div className="head-img">
            <img src={htmlimg} alt="" />
          </div>
        </div>
        <div className="con-body">
          <div className="up-rank up">
            <div className="rank-text txt">
              <div className="serial-text stxt">1</div>
              <div className="real-text rtxt">
                Update your <b>rank</b>
              </div>
            </div>
            <div className="rank-input ipt">
              <input
                onChange={(e) => {
                  info.rank = e.target.value;
                }}
                type="text"
              />
            </div>
          </div>
          <div className="up-percen up">
            <div className="percen-text txt ">
              <div className="serial-text stxt">2</div>
              <div className="real-text rtxt">
                Update your <b>percentile</b>
              </div>
            </div>
            <div className="percen-input ipt">
              <input
                onChange={(e) => {
                  info.percentile = e.target.value;
                }}
                type="text"
              />
            </div>
          </div>
          <div className="up-score up">
            <div className="score-text txt">
              <div className="serial-text stxt">3</div>
              <div className="real-text rtxt">
                Update your <b>current score (out of 15)</b>
              </div>
            </div>
            <div className="score-input ipt">
              <input
                onChange={(e) => {
                  info.marks = e.target.value;
                }}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="con-foot">
          <div className="cancel-btn">
            <button onClick={() => props.setState(false)}>CANCEL</button>
          </div>
          <div className="save-btn">
            <button
              onClick={() => {
                props.setState(false);
                value.resSetState(info);
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
