/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:16hs */

import axios from "axios";
import { TEST_CONT_DEMO } from "../../constants/index";
import {ENVIRONMENTS, SERVER_ENVIRONMENT_MODE} from "../../env";

export const SAMPLE_REQUEST_ACTION = "SAMPLE_REQUEST_ACTION"; // TODO remove or rename

export const setNameToComponent = (componentName) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { testContDemoReducer } = getState();
    return resolve(dispatch({
      type: TEST_CONT_DEMO,
      payload: {
        name: componentName
      }
    }));
  })
  .then((payload) => Promise.resolve({...payload}))
  .catch((error) => Promise.reject({...error}));
};


/**
 * Action example for requests. Remove if it not necessary.
 */
export const getSomething = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const ACTION = SAMPLE_REQUEST_ACTION;
    // return checkAuth(getState)
      // .then(header => {
          // const {appStoreReducer: {environment:{ url }}} = getState();
          // if(!url) throw new Error(`URL Error`);
          dispatch({type: `${ACTION}_REQUEST`, payload: null});
          return axios.get(`${ENVIRONMENTS[SERVER_ENVIRONMENT_MODE].url}/something?a=sth1&b=sth2`, header)
             .then(payload => {
                return resolve(dispatch({
                  type: `${ACTION}_SUCCESS`,
                  payload: {...payload}
                }));                          
              })
            .catch(error => {
              return reject(dispatch({
                type: `${ACTION}_FAILED`,
                payload: {...error}
              }));
            }); 
        // })
        // .catch(error => {
        //   return reject(dispatch({
        //     type: `${ACTION}_FAILED`,
        //     payload: {...error}
        //   }));
        // });
    });
  };
};
