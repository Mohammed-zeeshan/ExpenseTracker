import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notificaion = useSelector(state => state.ui.notificaion);

  useEffect(() => {
    const sendCardData = async() => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }))
      const response = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok){
        throw new Error('Sending cart data failed.')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'Sent cart data successfully!',
      }))
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCardData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Sent cart data failed!',
        }))
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificaion && <Notification 
        status={notificaion.status} 
        title={notificaion.title} 
        message={notificaion.message} 
      />}
        <Layout>
          {showCart && <Cart />}
          <Products />
        </Layout>
    </Fragment>
  );
}

export default App;
