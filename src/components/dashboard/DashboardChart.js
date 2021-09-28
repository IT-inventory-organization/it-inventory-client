import React from "react";
import WrapSection from "../WrapSection";
import ChartistGraph from "react-chartist";

function DashboardChart() {
  var data = {
    series: [200, 100, 300, 400],
  };

  const type = "Pie";

  return (
    <WrapSection title="Chart">
      <ChartistGraph data={data} options={{ donut: true }} type={type} />
    </WrapSection>
  );
}

export default DashboardChart;
