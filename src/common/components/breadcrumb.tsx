import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { FORMAT_BREADCRUMB } from '../constant';

type BreadcrumbProps = {
  style?: string;
  routes: { title: string }[];
};

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ style, routes = [] }) => {
  const previousPage = (route, index) => (
    <Fragment key={index}>
      <li className="cursor-pointer capitalize hover:underline hover:decoration-primary-light hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-primary-dark">
        <Link href={`/${route.link}`} passHref>
          <p type="button">{route.title}</p>
        </Link>
      </li>
      {FORMAT_BREADCRUMB}
    </Fragment>
  );

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
        {previousPage({ title: 'home', link: '' }, -1)}
        {routelinks}
      </ul>
    </div>
  );
};

export default Breadcrumb;
