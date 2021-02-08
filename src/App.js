import './App.scss';
import Content from './components/Content';
import Basket from './components/Basket';

import { AppContextProvider } from './context/appContext';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Basket />
        <Content />
      </div>
    </AppContextProvider>
  );
}

export default App;
