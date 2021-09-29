import { Container, Grid } from "@mui/material";
import DashboardChart from "../components/dashboard/DashboardChart";
import DisplayCount from "../components/dashboard/DisplayCount";
import RecentActivities from "../components/dashboard/RecentActivities";
import MainLayout from "../layout/MainLayout";
import {ReactComponent as IcProductIn} from '../assets/icons/ic_productin.svg'
import {ReactComponent as IcProductOut} from '../assets/icons/ic_productout.svg'
import {ReactComponent as IcStockOpName} from '../assets/icons/ic_stock_opname.svg'
import {ReactComponent as IcDataAdjutment} from '../assets/icons/ic_data_adjutment.svg'

function Dashboard() {
  return (
    <MainLayout>
      {/* Display Count */}
      <Grid container justifyContent="space-between" spacing={2} mt={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Import"
            count={1300}
            ContainerColor="#3CB774"
            BoxIconColor="#5ECE91"
            icon={<IcProductIn/>}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Export"
            count={990}
            ContainerColor="#DE3D33"
            BoxIconColor="#ED554B"
            icon={<IcProductOut />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Stock Opname"
            count={1500}
            ContainerColor="#F9B800"
            BoxIconColor="#FFCB38"
            icon={<IcStockOpName />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DisplayCount
            name="Data Adjusment"
            count={1100}
            ContainerColor="#5682FF"
            BoxIconColor="#82A2FF"
            icon={<IcDataAdjutment />}
          />
        </Grid>
      </Grid>

      {/* Recent Activities */}
      <Grid container mt={4}>
        <RecentActivities />
      </Grid>

      {/* Chart */}
      <Grid container my={4}>
        <DashboardChart />
      </Grid>
    </MainLayout>
  );
}

export default Dashboard;
