import {
  mdiTable,
    mdiAccount,
  mdiSquareEditOutline,
  mdiMonitor
} from "@mdi/js";

export default [
  {
    to: "/accounttable",
    label: "Manage Accounts",
    icon: mdiAccount,
  },
  {
    to: "/posttable",
    label: "Manage Posts",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/dashboard",
    label: "Manage Shows",
    icon: mdiMonitor,
  },
  {
    to: "/tables",
    label: "Wallet",
    icon: mdiTable,
  },

];
