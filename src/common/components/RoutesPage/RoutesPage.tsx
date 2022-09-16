import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Error404 } from '../Error404/Error404';

import { Path } from 'common/enums/path';
import { Login } from 'features/auth/Login/Login';
import { Profile } from 'features/auth/Profile/Profile';
import { Registration } from 'features/auth/Registration/Registration';
import { Cards } from 'features/cards/Cards/Cards';
import { CheckEmail } from 'features/forgot/CheckEmail/CheckEmail';
import { ForgotPassword } from 'features/forgot/ForgotPassword/ForgotPassword';
import { NewPassword } from 'features/forgot/NewPassword/NewPassword';
import { Learn } from 'features/learn/Learn';
import { Packs } from 'features/packs/Packs/Packs';

export const RoutesPage: FC = () => {
  const routes = [
    { path: Path.LOGIN, component: <Login /> },
    { path: Path.REGISTRATION, component: <Registration /> },
    { path: Path.PROFILE, component: <Profile /> },
    { path: Path.FORGOT_PASSWORD, component: <ForgotPassword /> },
    { path: `${Path.NEW_PASSWORD}/:token`, component: <NewPassword /> },
    { path: Path.CHECK_EMAIL, component: <CheckEmail /> },
    { path: Path.ERROR_404, component: <Error404 /> },
    { path: Path.PACKS, component: <Packs /> },
    { path: `${Path.CARDS}/:id`, component: <Cards /> },
    { path: `${Path.LEARN}/:id`, component: <Learn /> },
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
