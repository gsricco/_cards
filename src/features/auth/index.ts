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
  setId,
} from './authReduser';
export {
  getIsLoggedIn,
  getIsRegistration,
  getName,
  getEmail,
  getId,
} from './authSelectors';
