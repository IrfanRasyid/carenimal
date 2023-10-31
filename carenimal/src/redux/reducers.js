const initialState = {
    cart: [],
    paymentMethods: [],
    selectedPaymentMethod: '',
    methodPrice: 0,
    totalPrice: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PAYMENT_METHODS':
        return { ...state, paymentMethods: action.payload };
      case 'SET_SELECTED_PAYMENT_METHOD':
        return { ...state, selectedPaymentMethod: action.payload };
      case 'SET_METHOD_PRICE':
        return { ...state, methodPrice: action.payload };
      case 'SET_TOTAL_PRICE':
        return { ...state, totalPrice: action.payload };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.productName !== action.payload) };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  