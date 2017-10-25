//boilerplate code

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

//*****************************************


import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// Action Types
const GOT_STUDENTS = 'GOT_STUDENTS';
const WRITE_STUDENT = 'WRITE_STUDENT';
const GOT_NEW_STUDENT_FROM_SERVER = 'GOT_NEW_STUDENT_FROM_SERVER';

// Action Creators
export function gotStudents(students) {
  return {
    type: GOT_STUDENTS,
    students
  };
}

export function writeStudent(inputContent) {
  return {
    type: WRITE_STUDENT,
    newStudentEntry: inputContent
  };
}

export function gotNewStudentFromServer(student) {
  return {
    type: GOT_NEW_STUDENT_FROM_SERVER,
    student
  };
}

// Thunk creator
export function fetchMessages() {
  // Thunk
  return function thunk (dispatch, getState) {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(gotStudents(students));
    });
  };
}

export function postStudent(studentData) {
  return function thunk(dispatch, getState) {
    axios.post('/api/students', studentData)
    .then(res => res.data)
    .then(student => {
      dispatch(gotNewStudentFromServer(student));
    });
  };
}

// Initial State
const initialState = {
  students: [],
  newStudentEntry: {
    name: '',
    email: '',
    campusId: ''
  }
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_STUDENTS:
      return Object.assign({}, state, { students: action.students });
    case WRITE_STUDENT:
      return Object.assign({}, state, {
        newStudentEntry: action.newStudentEntry
      });
    case GOT_NEW_STUDENT_FROM_SERVER:
      return Object.assign({}, state, {
        students: [...state.students, action.student]
        // this is same as above
        // students: state.students.concat(action.student)
      });
    default:
      return state;
  }
}

const logger = createLogger({
  // ...options
});
const middleware = applyMiddleware( thunkMiddleware);
// Store
const store = createStore(reducer, middleware);
export default store;
