import { previousPage } from "../helpers";

function Breadcrumb({ routes = [], style }) {
  const routelinks = routes.map((route, index) => {
    if (routes.length - 1 === index) {
      return (
        <li className="font-semibold capitalize" key={route.title}>
          {route.title}
        </li>
      );
    }
    return previousPage(route, index);
  });

  return (
    <div className={`${style} mx-8 my-4 w-max`}>
      <ul className="flex items-center">
        {previousPage({ title: "home", link: "" }, -1)}
        {routelinks}
      </ul>
    </div>
  );
}

export default Breadcrumb;
