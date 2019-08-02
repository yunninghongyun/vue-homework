const shopping = {
  state: {
    allchecked: true,
    carts: [
      {
        id: 1,
        price: 79.0,
        num: 1,
        src:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        style: 'iphone 5',
        size: 'XXL',
        show: false,
        checked: true
      },
      {
        id: 2,
        price: 79.0,
        num: 1,
        src:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        style: 'iphone 5',
        size: 'XXL',
        show: false,
        checked: true
      },
      {
        id: 3,
        price: 79.0,
        num: 1,
        src:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        style: 'iphone 5',
        size: 'XL',
        show: false,
        checked: true
      },
      {
        id: 4,
        price: 79.0,
        num: 4,
        src:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        style: 'iphone 5',
        size: 'XXL',
        show: false,
        checked: true
      }
    ]
  },
  mutations: {
    addcart(state, payload) {
      state.carts.push(payload)
    },
    addNum(state, id) {
      state.carts.find(item => item.id === id).num++
    },
    subNum(state, id) {
      if (state.carts.find(item => item.id === id).num > 1) {
        state.carts.find(item => item.id === id).num--
      }
    },
    delCart(state, id) {
      state.carts = state.carts.filter(item => item.id != id)
    },
    showDel(state, id) {
      state.carts.find(item => item.id === id).show = !state.carts.find(
        item => item.id === id
      ).show
    },
    checked(state, id) {
      state.carts.find(item => item.id === id).checked = !state.carts.find(
        item => item.id === id
      ).checked
      if (state.carts.find(item => item.id === id).checked === false) {
        state.allchecked = false
      } else {
        if (state.carts.every(ele => ele.checked)) {
          state.allchecked = true
        }
      }
    },
    changeAll(state) {
      state.allchecked = !state.allchecked

      state.carts = state.carts.map(item => {
        return {
          id: item.id,
          price: item.price,
          num: item.num,
          src:
            'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
          title: item.title,
          style: item.style,
          size: item.szie,
          show: item.show,
          checked: state.allchecked
        }
      })
    }
  },
  getters: {
    total(state) {
     
      return state.carts.reduce((res, item) => {
        return res + item.price * item.num
      }, 0)
    }
  }
}

export default shopping
