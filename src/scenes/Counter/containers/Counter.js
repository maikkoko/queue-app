import { connect } from 'react-redux'

import Counters from '../components/Counters'
import * as actionCreators from '../../../store/reducers/counter'

const createActionDispatchers = actionCreators => dispatch =>
  Object.keys(actionCreators).reduce((actionDispatchers, name) => {
    var actionCreator = actionCreators[name]
    if (typeof actionCreator == 'function') {
      actionDispatchers[name] = (...args) => dispatch(actionCreator(...args))
    }
    return actionDispatchers
  }, {})

const mapStateToProps = state => ({
  routes: state.routes,
  countersState: state.counter // gives our component access to state through props.countersState
})

const mapDispatchToProps = createActionDispatchers(actionCreators)

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
