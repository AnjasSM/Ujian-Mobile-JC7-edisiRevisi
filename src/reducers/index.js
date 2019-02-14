import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import photoForm from './photoForm';
import photoList from './photoList';
export default combineReducers({
   auth: AuthReducer,
   photoForm: photoForm,
   photoList
});