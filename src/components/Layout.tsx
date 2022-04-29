import { Fragment, Suspense } from 'react';

import MainNavigation from './MainNavigation/MainNavigation';

interface ILayout{
    children: JSX.Element
}

const Layout: React.FunctionComponent<ILayout> = ({children}) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;