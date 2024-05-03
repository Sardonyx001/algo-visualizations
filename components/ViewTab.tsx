"use client";
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ViewTab() {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 1000 }, () => ({
          x: faker.number.int({ min: -1000, max: 1000 }),
          y: faker.number.int({ min: -1000, max: 1000 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div className="">
      <Scatter options={options} data={data} />
    </div>
  );
}
