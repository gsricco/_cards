import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Error404, Path } from 'common';
import {
  CheckEmail,
  ForgotPassword,
  Login,
  NewPassword,
  Profile,
  Registration,
} from 'features';

export const RoutesPage: FC = () => {
  const routes = [
    { path: Path.LOGIN, component: <Login /> },
    { path: Path.REGISTRATION, component: <Registration /> },
    { path: Path.PROFILE, component: <Profile /> },
    { path: Path.FORGOT_PASSWORD, component: <ForgotPassword /> },
    { path: `${Path.NEW_PASSWORD}/:token`, component: <NewPassword /> },
    { path: Path.CHECK_EMAIL, component: <CheckEmail /> },
    { path: '*', component: <Error404 /> },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={Path.LOGIN} />} />
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
};
