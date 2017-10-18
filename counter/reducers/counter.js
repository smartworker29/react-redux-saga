
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/CounterActions';

export default function counter (state = { count: 0, loading: false }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER.SELF:
      return { count: state.count + 1, loading: false };
    case DECREMENT_COUNTER.SELF: {
      return { count: state.count <= 0 ? 0 :  state.count - 1, loading: false };
    }
  }
  return state;
}
