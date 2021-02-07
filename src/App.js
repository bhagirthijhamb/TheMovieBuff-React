import './App.scss';
import Content from './components/Content';
// import Sidebar from './components/Basket';

import { AppContextProvider } from './context/appContext';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        {/* <Sidebar /> */}
        <Content />
      </div>
    </AppContextProvider>
  );
}

export default App;
