import VueRouter from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/movies/Movie";
import Actors from "@/components/actors/Actors";
import ActorDetail from "@/components/actors/ActorDetail";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/movies-hunter/",
      name: "home",
      component: Home,
    },

    {
      path: "/movies-hunter/movie/:id",
      name: "movie",
      component: Movie,
    },

    {
      path: "/movies-hunter/actors",
      name: "actors",
      component: Actors,
    },

    {
      path: "/movies-hunter/actor/:id",
      name: "actorDetail",
      component: ActorDetail,
    },
  ],
});

export default router;
