
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/CounterActions';

export default function counter (state = { count: 0, loading: false }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { count: state.count + 1, loading: false };
    case DECREMENT_COUNTER:
      return { count: state.count - 1, loading: false };
  }
  return state;
}
