import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props),
});

const mapDispatchToProps = (dispatch, props) => title =>
  dispatch({
    columnId: props.id, 
    title,
  });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults); 