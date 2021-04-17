import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;  // stała id Listy
  const filteredLists = state.lists.filter(list => list.id == id); // wyszukujemy właściwości listy
  const listParams = filteredLists[0] || {}; // zapisujemy wyszukany wcześniej obiekt do stałej listParams i od razu na wypadek, gdyby w stanie aplikacji nie było listy o id z adresu strony, dodamy || {}, czyli "lub użyj pustej tablicy", aby nie spotkać się z błędem.

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);