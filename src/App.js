import { GlobalStyles } from '@mui/styled-engine';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { ScrollToTop } from './components/ScrollToTop';
import { routes } from './routes';
import { startChecking } from './store/actions/auth';

import ThemeConfig from './theme';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(startChecking());
  }, [dispatch]);

  const { isLoggedIn, checking } = useSelector(state => state.auth);
  const routing = useRoutes(routes(isLoggedIn));
  
  if (checking) {
    return (<h5>Espere...</h5>);
  }
  
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
       {routing}
    </ThemeConfig>
  );
}

export default App;
