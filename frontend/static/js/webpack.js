import Study from "./pages/Study.js";
import NotFound from "./pages/NotFound.js";
import Main from "./pages/Main.js";
import AnimationFunciton from "./animation/animation.js";
const navigateTo = async (href) => {
  history.pushState(null, null, href);
  const routes = await setRouterObjectHandler();
  const match = potentialMatches(routes).find((val) => val.isMatch);
  const view = new match.route.view();
  document.querySelector("#root").innerHTML = await view.getHtml();
  AnimationFunciton();
};

const potentialMatches = (routes) => {
  return routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
};

const setRouterObjectHandler = async () => {
  const routes = [
    { path: "/", view: Main },
    { path: "/study", view: Study },
    { path: "/404", view: NotFound },
  ];
  return routes;
};

//DOM is already loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  navigateTo(window.location.pathname);
});
