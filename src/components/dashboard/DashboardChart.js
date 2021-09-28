import React from "react";
import WrapSection from "../WrapSection";
import { Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

function DashboardChart() {
  const data = {
    labels: ["Import", "Export", "Stock Opname", "Data Adjustment"],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <WrapSection title="Chart">
      <Grid container style={{ marginTop: "1rem" }} spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Doughnut
            style={{ width: "300px", height: "300px" }}
            data={data}
            options={options}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}></Grid>
      </Grid>
    </WrapSection>
  );
}

export default DashboardChart;
