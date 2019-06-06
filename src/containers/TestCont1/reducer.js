/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:25:46hs */

import { TEST_CONT1 } from "../../constants/";
//import {TEST_CONT1} from "./actions";

export const initialState = {
  name: ""
}

export default function reducer(state=initialState, action) {
  console.log(action.type, TEST_CONT1);
  switch(action.type) {
    case TEST_CONT1: {
      console.log("???");
      return {
        ...state,
        name: action.payload.name
      };
    }

    case `${TEST_CONT1}_REQUEST`: {
      return {
        ...state
      }
    }

    case `${TEST_CONT1}_SUCCESS`: {
      
      return {
        ...state
      }
    }

    case `${TEST_CONT1}_FAILED`: {
      return {
        ...state
      }
    }

    default:
      return state;
  }
}
