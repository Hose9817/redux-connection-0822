import {connect} from "react-redux";

function App(props) {
  console.log(props.cards)

  return (
    <div>
      <button onClick={props.addCard}>Add new card</button>
      {props.cards.map(el => <li
      key={el.id}>
       <strong>{el.name}</strong>
          <button onClick={() => props.deleteCard(el.id)}>DELETE</button>
      </li>)}
      &nbsp;
      {props.columns.map(el => <li
      key={el.id}>
        <i>{el.status}</i>
      </li>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
