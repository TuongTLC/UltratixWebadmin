import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/HomeView.vue";

const routes = [
  {
    meta: {
      title: "Select style",
    },
    path: "/style",
    name: "style",
    component: Home,
  },
  {

    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "AccountTables",
    },
    path: "/accounttable",
    name: "accounttable",
    component: () => import("@/views/AccountTable.vue"),
  },
  {
    meta: {
      title: "Posts",
    },
    path: "/posttable",
    name: "posttable",
    component: () => import("@/views/PostTable.vue"),
  },
  {
    meta: {
      title: "Wallet",
    },
    path: "/wallettable",
    name: "wallettable",
    component: () => import("@/views/WalletTable.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
