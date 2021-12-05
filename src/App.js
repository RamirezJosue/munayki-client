import { GlobalStyles } from '@mui/styled-engine';
import { Provider } from 'react-redux';
import { ScrollToTop } from './components/ScrollToTop';
import { Router } from './routes';
import { store } from './store/store';
import ThemeConfig from './theme';

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Provider store={ store }>
        <Router />
      </Provider>
    </ThemeConfig>
  );
}

export default App;
