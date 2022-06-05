import "../Styles/analytics.css";
import chtmlimg from "../Images/chtml-rbg.png";
import cup from "../Images/cup.png";
import tick from "../Images/correct.png";
import board from "../Images/text.png";
import { useEffect } from "react";
import { AuthConext } from "../App";
import { useContext } from "react";
import Graph from "./Graph";
import P from "./Pie";
import ProgressBar from "@ramonak/react-progress-bar";

let Analytics = (props) => {
  let value = useContext(AuthConext);

  return (
    <div className="analytics">
      <div className="header"></div>

      <div className="analysis">
        <div className="left-part">
          <div className="test-part">
            <div className="html-title">
              <div className="html-img">
                <img src={chtmlimg} alt="" />
              </div>
              <div className="html-text">
                <h3>Hypertext Markup Language</h3>
                <p>
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <div className="btn">
              <button onClick={() => props.setState(true)}>Update</button>
            </div>
          </div>

          <div className="stats-part">
            <div className="stats-heading">
              <h2>Quick Statistics</h2>
            </div>

            <div className="stats-score">
              <div className="stats-rank">
                <div className="rank-icon ssi">
                  <img src={cup} alt="" />
                </div>
                <div className="rank-desp ssd">
                  <h2>{value.resState.rank}</h2>
                  <p>YOUR RANK</p>
                </div>
              </div>
              <div className="stats-percentile">
                <div className="percetile-icon ssi">
                  <img src={board} alt="" />
                </div>
                <div className="percetile-des ssd">
                  <h2>{value.resState.percentile}%</h2>
                  <p>PERCENTILE</p>
                </div>
              </div>
              <div className="stats-answer">
                <div className="answer-icon ssi">
                  <img src={tick} alt="" />
                </div>
                <div className="answer-des ssd">
                  <h2>{value.resState.marks} / 15</h2>
                  <p>CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="comp-part">
            <Graph></Graph>
          </div>
        </div>
        <div className="right-part">
          <div className="syll-part">
            <div className="syll-head">
              <h2>Syllabus wise Analysis</h2>
            </div>
            <div className="syll-item1 syi">
              <div className="syi-text">
                <h4>HTML Tools, Forms, History</h4>
              </div>
              <div className="syi-progress">
                <div className="progress-bar">
                  <ProgressBar
                    className="pg-bar"
                    completed="80"
                    baseBgColor="#ECF3FE"
                    bgColor="#438AF6"
                    animateOnRender="true"
                    labelColor="#438AF6"
                  />
                </div>
                <div className="progress-percentage">
                  <h4>80%</h4>
                </div>
              </div>
            </div>
            <div className="syll-item2 syi">
              <div className="syi-text">
                <h4>Tags & References in HTML</h4>
              </div>
              <div className="syi-progress">
                <div className="progress-bar">
                  <ProgressBar
                    className="pg-bar"
                    completed="60"
                    baseBgColor="#FFF4EC"
                    bgColor="#FF9142"
                    animateOnRender="true"
                    labelColor="#FF9142"
                  />
                </div>
                <div className="progress-percentage">
                  <h4 style={{color:"#FF9142"}}>60%</h4>
                </div>
              </div>
            </div>
            <div className="syll-item3 syi">
              <div className="syi-text">
                <h4>Tables & CSS Basics</h4>
              </div>
              <div className="syi-progress">
                <div className="progress-bar">
                  <ProgressBar
                    className="pg-bar"
                    completed="24"
                    baseBgColor="#FFEFEF"
                    bgColor="#FB5E5E"
                    animateOnRender="true"
                    labelColor="#FB5E5E"
                  />
                </div>
                <div className="progress-percentage">
                  <h4 style={{color:"#FB5E5E"}}>24%</h4>
                </div>
              </div>
            </div>
            <div className="syll-item4 syi">
              <div className="syi-text">
                <h4>Tables & CSS Basics</h4>
              </div>
              <div className="syi-progress">
                <div className="progress-bar">
                  <ProgressBar
                    className="pg-bar"
                    completed="96"
                    baseBgColor="#EAFAF1"
                    bgColor="#2EC971"
                    animateOnRender="true"
                    labelColor="#2EC971"
                  />
                </div>
                <div  className="progress-percentage">
                  <h4 style={{color:"#2EC971"}}>96%</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="pie-part">
            <div className="pie-text">
              <div className="pt-head">
                <h3 style={{ fontSize: "17px", marginLeft: "12px" }}>
                  Question Analysis
                </h3>
                <h4 style={{ fontSize: "17px", color: "blue" }}>
                  {value.resState.marks} / 15
                </h4>
              </div>
              <div className="pt-para">
                <p style={{ marginTop: "0", marginLeft: "16px" }}>
                  <b color="#EBF0F5">
                    You scored {value.resState.marks} question correct out of 15
                  </b>
                  . However it still needs some improvements
                </p>
              </div>
            </div>
            <div className="pie-chart">
              <P></P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
