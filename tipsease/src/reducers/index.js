import {
    // FETCHING_SERVICE_WORKER,
    FETCHING_SERVICE_WORKER_SUCCESS,
    FETCHING_SERVICE_WORKER_ERROR,

    ADDING_SERVICE_WORKER,
    ADDING_SERVICE_WORKER_SUCCESS,
    ADDING_SERVICE_WORKER_ERROR,

    // DELETING_SERVICE_WORKER,
    // DELETING_SERVICE_WORKER_SUCCESS,
    // DELETING_SERVICE_WORKER_ERROR,

    // FETCHING_CUSTOMER,
    // FETCHING_CUSTOMER_SUCCESS,
    // FETCHING_CUSTOMER_ERROR,

    // ADDING_CUSTOMER,
    // ADDING_CUSTOMER_SUCCESS,
    // ADDING_CUSTOMER_ERROR,

    // DELETING_CUSTOMER,
    // DELETING_CUSTOMER_SUCCESS,
    // DELETING_CUSTOMER_ERROR,

    // GET_TYPE_START,
    GET_TYPE_SUCCESS,
    // GET_TYPE_ERROR,

    // FETCH_WORKERS_START,
    // FETCH_WORKERS_SUCCESS,
    // FETCH_WORKERS_FAILURE,

    // FETCH_WORKER_START,
    FETCH_WORKER_SUCCESS,
    // FETCH_WORKER_FAILURE,

    // ADDING_TIP_START,
    ADDING_TIP_SUCCESS,
    ADDING_TIP_FAILURE

} from "../actions";
const initialState = {
    serviceWorkers: [],
    users: [],
    error: '',
    type: ''
  }
  
  const reducers = (state = initialState, action) => {
    switch(action.type) {
      case FETCHING_SERVICE_WORKER_SUCCESS:
        return {
          ...state,
          serviceWorkers: action.payload
        }
      case FETCHING_SERVICE_WORKER_ERROR:
        return {
          ...state,
          error: action.payload
        }
      // case FETCHING_CUSTOMER_SUCCESS:
      //   return {
      //     ...state,
      //     patrons: action.payload
      //   }
      // case FETCHING_CUSTOMER_ERROR:
      //   return {
      //     ...state,
      //     error: action.payload
      //   }
      case ADDING_SERVICE_WORKER:
        return {
          ...state,
          type: 'serviceWorkers',
          error: ''
        }
      case ADDING_SERVICE_WORKER_SUCCESS:
        return {
          ...state,
          username: action.payload,
          password: false,
          type: 'serviceWorkers'
        }
      case ADDING_SERVICE_WORKER_ERROR:
        return {
          ...state,
          error: action.payload
        }
      case GET_TYPE_SUCCESS:
        return {
          ...state,
          userType: action.payload,
        }
      case FETCH_WORKER_SUCCESS:
        return {
          ...state,
          serviceWorker: action.payload
        }

        case ADDING_TIP_SUCCESS:
      return {
        ...state,
        payment: action.payload
      };
    case ADDING_TIP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

      default:
        return state;
    }
  }
  
  export default reducers