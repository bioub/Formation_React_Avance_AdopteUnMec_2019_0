import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UsersAdd } from '../components/UsersAdd/UsersAdd';
import { userCreateRequested } from '../actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      userCreateRequested,
    },
    dispatch,
  );
}

export const UsersAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAdd);
