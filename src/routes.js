import VueRouter from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/movies/Movie";
import Actors from "@/components/actors/Actors";
import ActorDetail from "@/components/actors/ActorDetail";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
    },

    {
      path: "/actors",
      name: "actors",
      component: Actors,
    },

    {
      path: "/actor/:id",
      name: "actorDetail",
      component: ActorDetail,
    },
  ],
});

export default router;
