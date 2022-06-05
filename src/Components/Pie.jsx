import { useContext } from "react";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "react-circular-progressbar/dist/styles.css";
import { AuthConext } from "../App";
import "../Styles/analytics.css";

let P = () => {
  let x = useContext(AuthConext);
  ChartJS.register(ArcElement);

  let options = {
    cutout: 170,
  };
  const plugins = [
    {
      afterDraw: (chart) => {
        let ctx = chart.ctx;
        ctx.save();
        let image = new Image();
        image.src = "images/target.png";
        let imageSize = 80;
        ctx.drawImage(
          image,
          chart.width / 2 - imageSize / 2,
          chart.height / 2 - imageSize / 2,
          imageSize,
          imageSize
        );
        ctx.restore();
      },
    },
  ];

  

  const data = {
    datasets: [
      {
        label: "",
        data: [x.resState.marks, 15 - x.resState.marks],
        backgroundColor: ["#438AF6", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 0,
        borderRadius: 1,
      },
    ],
  };



  return (
    <>
      <Doughnut data={data} className="dg" options={options} plugins={plugins} />
    </>
  );
};

export default P;
