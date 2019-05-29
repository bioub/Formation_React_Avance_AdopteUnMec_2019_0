import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList/UsersList';
import { selectUsersItems, selectUsersLoading } from '../selectors';
import { bindActionCreators } from 'redux';
import { userFetchRequested } from '../actions';

function mapStateToProps(state) {
  return {
    users: selectUsersItems(state),
    loading: selectUsersLoading(state),
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userFetchRequested,
}, dispatch);

export const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);
