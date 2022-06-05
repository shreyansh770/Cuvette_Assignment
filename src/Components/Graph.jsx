import "../Styles/Graph.css";
import g from "../Images/g.png";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
} from "recharts";
import { AuthConext } from "../App";
import { useContext } from "react";
let Graph = () => {
  let res = useContext(AuthConext);

  // ChartJS.register(Legend);

  const linedata = [
    {
      percentile: 0,
      uv: 0,
    },
    {
      percentile: 20,
      uv: 500,
    },
    {
      percentile: 40,
      uv: 800,
    },
    {
      percentile: 60,
      uv: 400,
    },
    {
      percentile: 80,
      uv: 1213,
    },
    {
      percentile: 100,
      uv: 0,
    },
  ];

  function MytoolTip({ payload, label, active }) {
    if (active) {
      return (
        <div className="my-tooltip">
          <p className="label">{`${label} Percentile`}</p>
          <p>YOUR SCORE</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="graph-desp">
      <div className="graph-head">
        <div className="gh-text">
          <h3>Comparision Graph</h3>
          <p>
            <b>You scored 37% percentile</b> which is lower than the
          </p>
          <p style={{ marginTop: "0.3rem" }}>
            average percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="gh-img">
          <img src={g} alt="" />
        </div>
      </div>
      <div className="graph">
      <LineChart className="graph_" width={1200} height={300} data={linedata}>
          <Line type="monotone" dataKey="uv" stroke="#C8D6E5" />
          <XAxis type="number" dataKey="percentile" />
          <ReferenceLine
            x={res.resState.percentile}
            label={res.resState.percentile}
            strokeDasharray="5 5"
            stroke="#438AF6"
          />
          <ReferenceArea
            x1={res.resState.percentile-5}
            x2={res.resState.percentile}
            fill="#438AF6"
          />
          <ReferenceLine
            x={72}
            label="72"
            strokeDasharray="5 5"
            stroke="#FF9142"
            className="ref_avg"
          />
          <Tooltip content={<MytoolTip />} />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
