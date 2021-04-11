import shortid from 'shortid';

// selectors  -- funkcja wybierająca karty z danej listy
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

// action name creator
const reducerName = 'cards';  // zapisuje nażwę właściwości stanu nad którym pracujemy w stałej
const createActionName = name => `app/${reducerName}/${name}`; // funkcja służąca do zamiany nazwy akcji na dłuższy identyfikator - nie zmieniamy jej! `app/${reducerName}/${name}` to krótsza wersja 'app/' + reducerName + '/' + name

// action types  --  typy akcji, które będziemy wykorzystywać w operacjach na kartach
export const ADD_CARD = createActionName('ADD_CARD'); // dobrą praktyką jest zapisywanie nazwy akcji wielkimi literami a słowa rozdziela się _ W efekcie na tym etapie mamy: app/columns/ADD_CARD

// action creators - funkcja tworzaca akcję, akcja to obiekt w której mammy type (typ akcji) oraz payload czyli wszystkie dane niezbędne do wykonania akcji (w tym wypadku generowania nowych kolumn)
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer  -- funkcja czysta (oparta tylko na argumentach nie może korzystać z innych zmiennych!!!), która reaguje na dispatchowaną akcję
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}