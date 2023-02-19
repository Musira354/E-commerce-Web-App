const Cart = []

const handleCart = (state = Cart, action) => {
  const product = action.payload
  switch (action.type) {
    case 'ADDITEM':
      //check if product already exist
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        //Increase Quantity
        console.log('qty', exist.qty)
        return [
          ...state,
          {
            ...product,
            qty: product.qty+1,
          },
        ]
        

      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
      break

    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x,
        )
      }
      break
    default:
      return state
  }
}

export default handleCart
