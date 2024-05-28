import { createStore } from 'redux';
import Reducer from './Reducer/Reducer'; // Assuming your reducer file is located here

const Store = createStore(Reducer);

export default Store;
