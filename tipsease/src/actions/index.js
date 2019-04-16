import axios from 'axios'

//SERVICE WORKERS
export const FETCHING_SERVICE_WORKER = "FETCHING_SERVICE_WORKER";
export const FETCHING_SERVICE_WORKER_SUCCESS = "FETCHING_SERVICE_WORKER_SUCCESS";
export const FETCHING_SERVICE_WORKER_ERROR = "FETCHING_SERVICE_WORKER_ERROR";

export const ADDING_SERVICE_WORKER = "ADDING_SERVICE_WORKER";
export const ADDING_SERVICE_WORKER_SUCCESS = "ADDING_SERVICE_WORKER_SUCCESS";
export const ADDING_SERVICE_WORKER_ERROR = "ADDING_SERVICE_WORKER_ERROR";

export const DELETING_SERVICE_WORKER = "DELETING_SERVICE_WORKER";
export const DELETING_SERVICE_WORKER_SUCCESS = "DELETING_SERVICE_WORKER_SUCCESS";
export const DELETING_SERVICE_WORKER_ERROR = "DELETING_SERVICE_WORKER_ERROR";


// CUSTOMERS
export const FETCHING_CUSTOMER = "FETCHING_CUSTOMER";
export const FETCHING_CUSTOMER_SUCCESS = "FETCHING_CUSTOMER_SUCCESS";
export const FETCHING_CUSTOMER_ERROR = "FETCHING_CUSTOMER_ERROR";

export const ADDING_CUSTOMER = "ADDING_CUSTOMER";
export const ADDING_CUSTOMER_SUCCESS = "ADDING_CUSTOMER_SUCCESS";
export const ADDING_CUSTOMER_ERROR = "ADDING_CUSTOMER_ERROR";

export const DELETING_CUSTOMER = "DELETING_CUSTOMER";
export const DELETING_CUSTOMERR_SUCCESS = "DELETING_CUSTOMER_SUCCESS";
export const DELETING_CUSTOMER_ERROR = "DELETING_CUSTOMER_ERROR";

// USERTYPE
export const GET_TYPE_START = "GET_TYPE_START"
export const GET_TYPE_SUCCESS = "GET_TYPE_SUCCESS"
export const GET_TYPE_ERROR = "GET_TYPE_ERROR"

//GETS SERVICE WORKER
export const getServiceWorkers = () => dispatch => {
    dispatch({ type: FETCHING_SERVICE_WORKER });
    axios
      .get("https://buildtipease.herokuapp.com/auth/serviceWorkers")
      .then(res => {
        dispatch({ type: FETCHING_SERVICE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_SERVICE_WORKER_ERROR, payload: err });
      });
  };
  
  //ADDS SERVICE WORKER
  export const addServiceWorkers = serviceWorker => dispatch => {
    dispatch({ type: ADDING_SERVICE_WORKER });
    axios
      .post("https://buildtipease.herokuapp.com/auth/serviceWorkers/register", serviceWorker)
      .then(res => {
        dispatch({ type: ADDING_SERVICE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADDING_SERVICE_WORKER_ERROR, payload: err });
      });
  };
  //DELETES SERVICE WORKER 
  export const deleteServiceWorkers = id => dispatch => {
    dispatch({ type: DELETING_SERVICE_WORKER,payload: id });
    axios
      .delete(`https://buildtipease.herokuapp.com/auth/serviceWorkers/${id}`)
      .then(res => {
        dispatch({ type: DELETING_SERVICE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETING_SERVICE_WORKER_ERROR, payload: err });
      });
  };



//   CUSTOMERS

//GETS CUSTOMERS
export const getCustomers = () => dispatch => {
    dispatch({ type: FETCHING_CUSTOMER });
    axios
      .get("https://buildtipease.herokuapp.com/auth/users")
      .then(res => {
        dispatch({ type: FETCHING_CUSTOMER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_CUSTOMER_ERROR, payload: err });
      });
  };
  
  //ADDS CUSTOMERS
  export const addCustomers = users => dispatch => {
    dispatch({ type: ADDING_CUSTOMER });
    axios
      .post("https://buildtipease.herokuapp.com/auth/serviceWorkers/register", users)
      .then(res => {
        dispatch({ type: ADDING_SERVICE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADDING_SERVICE_WORKER_ERROR, payload: err });
      });
  };
  //DELETES CUSTOMERS
  export const deleteCustomers = id => dispatch => {
    dispatch({ type: DELETING_CUSTOMER,payload: id });
    axios
      .delete(`https://buildtipease.herokuapp.com/users/${id}`)
      .then(res => {
        dispatch({ type: DELETING_SERVICE_WORKER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETING_SERVICE_WORKER_ERROR, payload: err });
      });
  };


  //gets TYPE
  export const getType = type => {
    console.log(type);
    return { type: GET_TYPE_SUCCESS, payload: type};
  }