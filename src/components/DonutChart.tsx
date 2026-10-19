import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Electronics", "Clothes", "Books", "Other"],
    datasets: [
      {
        data: [300, 150, 100, 50],
        backgroundColor: ["#3b82f6", "#22c55e", "#facc15", "#ef4444"],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom", // ✅ reconnu correctement
    },
  },
};

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
