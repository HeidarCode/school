import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ScoreChart({ monthlyScores }) {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ];

  const data = {
    labels: persianMonths,
    datasets: [
      {
        label: "تغییرات نمره دانش‌آموز",
        data: monthlyScores,
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.25)",
        borderWidth: 3,
        tension: 0.35,
        pointRadius: 5,
        pointBackgroundColor: "#007bff"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        min: 0,
        max: 20,
        ticks: { stepSize: 2 }
      }
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "20px auto" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ScoreChart;
