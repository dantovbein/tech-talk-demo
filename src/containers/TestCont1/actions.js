/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:25:46hs */

import axios from "axios";
import { TEST_CONT1 } from "../../constants/index";
import {ENVIRONMENTS, SERVER_ENVIRONMENT_MODE} from "../../env";

export const SAMPLE_REQUEST_ACTION = "SAMPLE_REQUEST_ACTION"; // TODO remove or rename

export const setNameToComponent = (componentName) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    //const { testCont1Reducer } = getState();
    return resolve(dispatch({
      type: TEST_CONT1,
      payload: {
        name: componentName
      }
    }));
  })
  .then((payload) => Promise.resolve({...payload}))
  .catch((error) => Promise.reject({...error}));
};

