import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home.tsx';
import Create from './components/Create.tsx';
// import MyItem from './components/MyItem.jsx';
// import MyPurchases from "./components/Mypurchases.jsx";
import Nav from './components/Nav.tsx';
import First from './components/First.tsx';
// import { useCounterContract } from './hooks/useMainContract.ts';

function App() {

  return (
   
    <BrowserRouter>
     <ToastContainer/>
    <div className="App gradient-bg-welcome">
      <Nav/>
      {
          <Routes>
            <Route path='/' element={<First />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/create'  element={<Create/>}/>
          {/* <Route path='/my-listed-nfts' element={<MyItem marketplace={marketplace}  account={account} />}/> */}
          {/* <Route path='/my-purchases' element={<MyPurchases marketplace={marketplace} nft={nft} account={account} />} /> */}
          {/* <Route path='/my-purchases' element={<Purchaes marketplace={marketplace}  account={account} />} /> */}
        </Routes>
        }
    
    </div>
    </BrowserRouter>
  );
}

export default App;