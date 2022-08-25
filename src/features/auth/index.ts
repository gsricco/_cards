export { Profile } from './Profile/Profile';
export { Login } from './Login/Login';
export { Registration } from './Registration/Registration';
export {
  authReducer,
  login,
  register,
  setIsLoggedIn,
  setIsRegistration,
  logout,
  setName,
  setEmail,
} from './auth-reduser';
export { getIsLoggedIn, getIsRegistration, getName, getEmail } from './auth-selectors';
