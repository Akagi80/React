import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id), // filtrowanie kolumn o odpowiednim parapetrze, w pierwszym argumencie zawsze powinien przyjnować "state" czyli cały stan aplikacji
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);