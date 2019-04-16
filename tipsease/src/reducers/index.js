import {
    FETCHING_SERVICE_WORKER,
    FETCHING_SERVICE_WORKER_SUCCESS,
    FETCHING_SERVICE_WORKER_ERROR,

    ADDING_SERVICE_WORKER,
    ADDING_SERVICE_WORKER_SUCCESS,
    ADDING_SERVICE_WORKER_ERROR,

    DELETING_SERVICE_WORKER,
    DELETING_SERVICE_WORKER_SUCCESS,
    DELETING_SERVICE_WORKER_ERROR,

    FETCHING_CUSTOMER,
    FETCHING_CUSTOMER_SUCCESS,
    FETCHING_CUSTOMER_ERROR,

    ADDING_CUSTOMER,
    ADDING_CUSTOMER_SUCCESS,
    ADDING_CUSTOMER_ERROR,

    DELETING_CUSTOMER,
    DELETING_CUSTOMER_SUCCESS,
    DELETING_CUSTOMER_ERROR,

    GET_TYPE_START,
    GET_TYPE_SUCCESS,
    GET_TYPE_ERROR

} from "../actions";
const initialState = {
    serviceWorkers: [],
    users: [],
    error: '',
    type: ''
  }
  
  const serviceWorker = (state = initialState, action) => {
    switch(action.type) {
      case FETCHING_SERVICE_WORKER_SUCCESS:
        return {
          ...state,
          staff: action.payload
        }
      case FETCHING_SERVICE_WORKER_ERROR:
        return {
          ...state,
          error: action.payload
        }
      case FETCHING_CUSTOMER_SUCCESS:
        return {
          ...state,
          patrons: action.payload
        }
      case FETCHING_CUSTOMER_ERROR:
        return {
          ...state,
          error: action.payload
        }
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
      default:
        return state;
    }
  }
  
  export default serviceWorker