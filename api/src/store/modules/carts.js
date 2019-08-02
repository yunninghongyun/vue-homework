const carts = {
  state: {
    goods: [
      {
        id: '1',
        img: '../assets/scar-goods.png',
        title: '龙之谷六周年限定礼包Boos冰龙款男士T恤',
        price: '88.00'
      },
      {
        id: '2',
        img: '../assets/scar-goods.png',
        title: '龙之谷六周年限定礼包Boos冰龙款男士T恤',
        price: '88.00'
      },
      {
        id: '3',
        img: '../assets/scar-goods.png',
        title: '龙之谷六周年限定礼包Boos冰龙款男士T恤',
        price: '88.00'
      },
      {
        id: '4',
        img: '../assets/scar-goods.png',
        title: '龙之谷六周年限定礼包Boos冰龙款男士T恤',
        price: '88.00'
      },
      {
        id: '5',
        img: '../assets/scar-goods.png',
        title: '龙之谷六周年限定礼包Boos冰龙款男士T恤',
        price: '88.00'
      }
    ]
  },
  mutations: {
    addcart(state, payload) {
      state.goods.push(payload)
    }
  }
}

export default carts
