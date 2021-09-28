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
        backgroundColor: ["#3CB774", "#5682FF", "#DE3D33", "#F9B800"],
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
