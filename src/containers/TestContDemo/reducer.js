/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:16hs */

import { TEST_CONT_DEMO } from "../../constants/";
import {TEST_CONT_DEMO} from "./actions";

export const initialState = {
  name: ""
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case TEST_CONT_DEMO: {
      return {
        ...state,
        name: action.payload.name
      };
    }

    case `${TEST_CONT_DEMO}_REQUEST`: {
      return {
        ...state
      }
    }

    case `${TEST_CONT_DEMO}_SUCCESS`: {
      return {
        ...state
      }
    }

    case `${TEST_CONT_DEMO}_FAILED`: {
      return {
        ...state
      }
    }

    default:
      return state;
  }
}
