import React, {useMemo} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const isSigned = false;

  const ActiveRoutes = useMemo(() => {
    if (isSigned) {
      return AppRoutes;
    }
    return AuthRoutes;
  }, [isSigned]);

  return <ActiveRoutes />;
};

export default Routes;
