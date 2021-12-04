import { GlobalStyles } from '@mui/styled-engine';
import { ScrollToTop } from './components/ScrollToTop';
import { Router } from './routes';
import ThemeConfig from './theme';

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}

export default App;
