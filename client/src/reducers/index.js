const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_EMPLOYEES':
           return { ...state, loading: true };
      case 'EMPLOYEES_RECEIVED':
           return { ...state, employees: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;