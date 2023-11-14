import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNIN_REQUEST, VINN_REQUEST, SIGNUP_REQUEST } from '../actions/types';
import { signIn, vinnIn, signUp,profileData } from '../../api/users';
import { userActions, notificationActions, vinnActions } from '../actions';
import { ToastContainer, toast } from 'react-toastify';



function* signUpRequest(action) {
  try {
    const user = yield call(signUp, action.payload.user);
    const { data } = user;
    action.payload.navigate('/')
    localStorage.setItem('token', data.info);
    yield put(userActions.signUpSuccess(data.info));
  } catch (error) {
    toast.error(
      `${error?.response?.data?.errors?.non_field_errors}`
      , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    yield put(notificationActions.addNotification(error.response.data));
    yield put(userActions.signUpSuccess({}));
  }
}

function* signInRequest(action) {
  try {
    const user = yield call(signIn, action.payload.user);
    const { data } = user;

    localStorage.setItem('token', data.token);
   
    // const profile = yield call(profileData, data.token);
    localStorage.setItem('profile_image', data?.profile?.image);  
    localStorage.setItem('profile', data?.profile?.name);
    localStorage.setItem('profile_id', data?.profile?.id);
    
    action.payload.navigate('/dashboard')
    window.location.reload();
    console.log("data--------->> ",data.info)
    
    yield put(userActions.signInSuccess(data.profile));
  } catch (error) {
    console.log("eroororo==>> ",error)
    toast.error(
      `${error?.response?.data?.errors?.non_field_errors}`
      , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    yield put(notificationActions.addNotification(error.response.data));
    yield put(userActions.signInSuccess({}));
  }
}

function* vinnInRequest(action) {
try {
  const number = yield call(vinnIn, action.payload.number?.numb);
  localStorage.setItem("vinnData", JSON.stringify(number))
  console.log("kdsjfkldjfskjdfs",number)
  // localStorage.setItem('token', localStorage.getItem("temptoken"));
  // action.payload.navigate('/Service')
  action.payload.navigate("/vehicleData")
  
  window.location.reload();
  yield put(vinnActions.vinInSuccess(number.data));
} catch (error) {
  toast.error(
    `${error?.response?.data?.message}`
    , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  yield put(notificationActions.addNotification(error?.response?.data));
  yield put(vinnActions.vinInSuccess({}));
}
}

function* userWatcher() {
  yield takeEvery(SIGNUP_REQUEST, signUpRequest);
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
  yield takeEvery(VINN_REQUEST, vinnInRequest);
}

export { userWatcher };