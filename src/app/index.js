import Vue from "vue";
import VueRouter from "vue-router";
import { VueRedux } from "vue2-redux";
import App from "./App";
import Store from "./store";
import Routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueRedux(Store));

const router = new VueRouter({ routes: Routes });

export default () => new Vue({ el: "#root", router, ...App });
