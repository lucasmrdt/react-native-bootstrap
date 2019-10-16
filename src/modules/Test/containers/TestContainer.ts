import {connect} from 'react-redux';
import Test from '@/Test/components/Test';
import {test} from '@/Test/testActions';

import {DispatchProps, StateProps} from '@/Test/components/Test';
import {State} from 'src/types/Redux';

const mapStateToProps = (state: State): StateProps => ({
  status: state.testState.status,
});

const mapDispatchToProps: DispatchProps = {
  launchTest: test,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);
