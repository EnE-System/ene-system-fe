import React from "react";
import {
  CalendarClock,
  CircleDashed,
  CircleCheckBig,
  Vegan,
  Award,
  ChevronRight,
  SquareScissors,
  Zap,
  Medal,
  HandHelping,
} from "lucide-react";
import { Line, Pie } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";

Chart.register(
  ArcElement,
  Tooltip,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const DashboardPage = () => {
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex items-center space-x-8 mb-4">
          <Zap className="text-gray-400" />
          <h3 className="text-xl font-bold">Audit Summary</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <StatusCard icon={CircleCheckBig} title="Completed" count={15} color="green" />
          <StatusCard icon={CircleDashed} title="Ongoing" count={10} color="blue" />
          <StatusCard icon={CalendarClock} title="Pending" count={3} color="red" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <SquareScissors className="text-gray-400" />
            <h3 className="text-xl font-bold">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <QuickActionCard icon={Vegan} title="New Audit" color="blue-500" bgColor="bg-blue-100" />
            <QuickActionCard icon={Award} title="View Reports" color="green-600" bgColor="bg-gray-100" />
            <QuickActionCard icon={ChevronRight} title="Recommendations" color="white" bgColor="bg-blue-500" tColor="white" />
          </div>
        </div>

        <div className="lg:col-span-9">
          <Benchmarking />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow my-4">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
          <div style={{ position: "relative", display: "inline-block" }}>
            <HandHelping className="text-gray-400" size={50} style={{ position: "relative", top: "5px" }} />
            <Zap
              className="text-gray-400"
              size={20}
              style={{
                position: "absolute",
                top: "-22px",
                left: "50%",
                transform: "translateX(-50%)",
                border: "2px solid #9CA3AF",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            />
          </div>
          <h3 className="text-xl font-bold">Energy Savings</h3>
        </div>
        <div className="h-64 md:h-80">
          <Line data={energySavingsData} options={energySavingsOptions} />
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ icon: Icon, title, count, color }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col items-center border border-gray-300">
      {/* Count (Top) */}
      <span className={`text-2xl font-bold text-${color}-600`}>{count}</span>

      {/* Icon + Title (Bottom, on one line) */}
      <div className="flex items-center gap-2 mt-2">
        <Icon className={`text-${color}-600 text-3xl`} />
        <h3 className={`text-lg font-semibold text-${color}-600`}>{title}</h3>
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon: Icon, title, color, bgColor, tColor = "text-gray-900" }) => {
  return (
    <div className={`flex flex-col items-center p-4 rounded-2xl shadow-md ${bgColor}`}>
      {/* Icon on top */}
      <div className="p-3 rounded-full">
        <Icon className={`text-${color} text-4xl`} />
      </div>
      {/* Title below */}
      <h3 className={`text-lg font-semibold ${tColor} mt-2`}>{title}</h3>
    </div>
  );
};

const Benchmarking = () => {
  const data = {
    labels: ["Your Facility", "Industrial Average"],
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ["#34C759", "#007AFF"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 12,
        },
        anchor: "outside",
        align: "start",
        offset: 100,
        formatter: (value, context) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}%`;
        },
        listeners: {
          draw: (ctx) => {
            const chart = ctx.chart;
            const meta = chart.getDatasetMeta(0);
            const dataset = chart.data.datasets[0];
            ctx.ctx.save();
            ctx.ctx.strokeStyle = "#666";
            ctx.ctx.lineWidth = 5;
            dataset.data.forEach((data, index) => {
              const element = meta.data[index];
              if (!element) return;
              const { x, y } = element.tooltipPosition();
              const offsetX = x > chart.width / 2 ? 50 : -50;
              ctx.ctx.beginPath();
              ctx.ctx.moveTo(x, y);
              ctx.ctx.lineTo(x + offsetX, y - 10);
              ctx.ctx.stroke();
            });
            ctx.ctx.restore();
          },
        },
      },
    },
    cutout: "3%",
    responsive: true,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center space-x-3 mb-4">
        <Medal className="text-gray-400" />
        <h3 className="text-lg font-semibold">Benchmarking</h3>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="w-40 h-40 relative">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center mt-2">
        <span className="text-blue-600">Your Facility: 65%</span> <br />
        <span className="text-green-600">Industrial Average: 35%</span>
      </div>
    </div>
  );
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const energySavingsData = {
  labels,
  datasets: [
    {
      label: "Energy Savings",
      data: labels.map(() => Math.floor(Math.random() * (600 - 100 + 1)) + 100),
      borderColor: "green",
      backgroundColor: "rgba(0, 128, 0, 0.3)",
      tension: 0.0,
      pointRadius: 0,
      pointBackgroundColor: "green",
      pointBorderColor: "#fff",
      pointBorderWidth: 0.4,
    },
  ],
};

const energySavingsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Energy Savings Over 12 Months",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 150,
      },
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
    },
  },
};

export default DashboardPage;
