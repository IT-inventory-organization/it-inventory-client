import { ReactComponent as IcDashboard } from "../../assets/icons/ic_dashboard.svg";
import { ReactComponent as IcInventory } from "../../assets/icons/ic_inventory.svg";
import { ReactComponent as IcSetup } from "../../assets/icons/ic_setup.svg";

const ListsMenu = [
  {
    name: "Dahsboard",
    path: "/",
    icon: <IcDashboard />,
  },
  {
    name: "PLB",
    path: "/plb",
    icon: <IcInventory />,
  },
  {
    name: "PPFTZ",
    path: "/ppftz",
    icon: <IcInventory />,
  },
  {
    name: "Setup",
    path: "/setup",
    icon: <IcSetup />,
  },
];

export default ListsMenu;
