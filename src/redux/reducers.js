import I from 'immutable';

export default function reducers(store = I.Map(), action) {
  const data = I.fromJS(action.data);

  switch (action.type) {
    case 'ADD_PRODUCT':
      const productList = store.get('productList', I.List())
      const pushedProductList = productList.push(data);

      return store.set('productList', pushedProductList);
    case 'SET_NOTIFICATION_MESSAGE':
      return store.set('notificationMessage', data);

    default:
      return store;
  }
}