import I from 'immutable';

const initialState = I.fromJS({
  productList: [
    {
      productName: 'Casio Erkek Saati',
      value: 102,
      size: 'l',
      id: 2,
    },
    {
      productName: 'Casio Kadın Saati',
      value: 145,
      size: 'm',
      id: 3,
    },
    {
      productName: 'Casio Cocuk Saati',
      value: 150,
      size: 's',
      id: 4,
    },
  ]
})

export default function reducers(store = initialState, action) {
  const data = I.fromJS(action.data);

  switch (action.type) {
    case 'ADD_PRODUCT':
      const productList = store.get('productList', I.List())
      const pushedProductList = productList.push(data);

      return store.set('productList', pushedProductList);
    case 'SET_NOTIFICATION_MESSAGE':
      console.log('data', data)
      return store.set('notificationMessage', I.fromJS({ message: data, id: Math.random() }));

    case 'SET_FILTER_VALUES':
      return store.set('filterValues', data);

    default:
      return store;
  }
}