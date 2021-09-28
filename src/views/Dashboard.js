import { Container, Grid, Paper } from "@mui/material";
import DashboardChart from "../components/dashboard/DashboardChart";
import DisplayCount from "../components/dashboard/DisplayCount";
import RecentActivities from "../components/dashboard/RecentActivities";

function Dashboard() {
  return (
    <Container>
      {/* Display Count */}
      <Grid container justifyContent="space-between" spacing={2} mt={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Import"
            count={1300}
            ContainerColor="#3CB774"
            BoxIconColor="#5ECE91"
            icon={require("../assets/icons/ic_productin.svg").default}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Export"
            count={990}
            ContainerColor="#DE3D33"
            BoxIconColor="#ED554B"
            icon={require("../assets/icons/ic_productout.svg").default}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Stock Opname"
            count={1500}
            ContainerColor="#F9B800"
            BoxIconColor="#FFCB38"
            icon={require("../assets/icons/ic_stock_opname.svg").default}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Data Adjusment"
            count={1100}
            ContainerColor="#5682FF"
            BoxIconColor="#82A2FF"
            icon={require("../assets/icons/ic_data_adjutment.svg").default}
          />
        </Grid>
      </Grid>

      {/* Recent Activities */}
      <Grid container mt={4}>
        <RecentActivities />
      </Grid>

      {/* Chart */}
      <Grid container mt={4}>
        <DashboardChart />
      </Grid>
    </Container>
  );
}

export default Dashboard;
