import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducer';

const initValues = {
  'First': 0,
  'Second': 0,
  'Third': 20,
};

const test1 = store => next => action => {
	console.log('entry 1')

	next(action)

	console.log('back 1')

	return next(action)

	console.log('reback 1')
}

const test2 = store => next => action => {
	console.log('entry 2')

	next(action)

	console.log('back 2')

	return next(action)

	console.log('reback 2')
}

const store = createStore(reducer, initValues, applyMiddleware(test1, test2));

export default store;