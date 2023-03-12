const initialState = [
  {
    name: 'apple',
    qty: 5,
    price: 10
  },
  {
    name: 'orange',
    qty: 5,
    price: 5
  },
  {
    name: 'strawberry',
    qty: 5,
    price: 15
  },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      const item = state.filter(item => item.name === action.payload.name);
      item[0].qty = item[0].qty + 1;
      return [...state]
    }
    case 'DEL': {
      const item = state.filter(item => item.name === action.payload.name);
      item[0].qty = item[0].qty - 1;
      return [...state]
    }
    default:
      return state;
  }
};

export default cartReducer;
