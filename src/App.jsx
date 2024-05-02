import React from "react";
import LandingPage from "./stores/pages/LandingPage";
import Mobilepage from "./stores/pages/Mobilepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ComputersPage from "./stores/pages/ComputersPage";
import WatchesPage from "./stores/pages/WatchesPage";
import Mensware from "./stores/pages/MenswarePage";
import WomanwearPage from "./stores/pages/WomanwearPage";
import Books from "./stores/pages/BooksPage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/kitchenPage";
import FridgePage from "./stores/pages/FridgePage";
import SpeakersPage from "./stores/pages/SpeakersPage";
import AcPage from "./stores/pages/AcPage";
import TvPage from "./stores/pages/Tv'sPage";
import MobileSingle from "./singlePage/MobilleSingle";
import { CartProvider } from "./stores/context/CartContext";
import UserCart from "./stores/cart/UserCart";
import ComputerSingle from "./singlePage/CmputersSinglePage";
import WatchesSingle from "./singlePage/WatchesSingle";
import MenSingle from "./singlePage/MensSingle";
import WomenSingle from "./singlePage/WomenSingle";
import BookSingle from "./singlePage/BookSingle";
import FurnitureSingle from "./singlePage/FurnitureSingle";
import KitchenSingle from "./singlePage/KitchenSingle";
import FridgeSingle from "./singlePage/FridgeSingle";
import SpeakersSingle from "./singlePage/SpeakersSingle";
import AcSingle from "./singlePage/AcSinglepage";
import TvSingle from "./singlePage/Tvsingle";
import LoginPage from "./stores/pages/LoginPage";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='/mobiles' element={<Mobilepage></Mobilepage>}></Route>
            <Route path='/computers' element={<ComputersPage></ComputersPage>}></Route>
            <Route path='/watches' element={<WatchesPage></WatchesPage>}></Route>
            <Route path='/mensware' element={<Mensware></Mensware>}></Route>
            <Route path='/womenwear' element={<WomanwearPage></WomanwearPage>}></Route>
            <Route path='/books' element={<Books></Books>}></Route>
            <Route path='/furniture' element={<FurniturePage></FurniturePage>}></Route>
            <Route path="/kitchen" element={<KitchenPage></KitchenPage>}></Route>
            <Route path="/fridge" element={<FridgePage></FridgePage>}></Route>
            <Route path='/speakers' element={<SpeakersPage></SpeakersPage>}></Route>
            <Route path='/ac' element={<AcPage></AcPage>}></Route>
            <Route path='/tv' element={<TvPage></TvPage>}></Route>
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>


            <Route path='/mobiles/:id' element={<MobileSingle></MobileSingle>}></Route>
            <Route path='/computers/:id' element={<ComputerSingle></ComputerSingle>}></Route>
            <Route path='/watches/:id' element={<WatchesSingle></WatchesSingle>}></Route>
            <Route path='/mensware/:id' element={<MenSingle></MenSingle>}></Route>
            <Route path='/womenwear/:id' element={<WomenSingle></WomenSingle>}></Route>

            <Route path='/books/:id' element={<BookSingle></BookSingle>}></Route>
            <Route path='/furniture/:id' element={<FurnitureSingle></FurnitureSingle>}></Route>
            <Route path='/kitchen/:id' element={<KitchenSingle></KitchenSingle>}></Route>
            <Route path='/fridge/:id' element={<FridgeSingle></FridgeSingle>}></Route>
            <Route path='/speakers/:id' element={<SpeakersSingle></SpeakersSingle>}></Route>
            <Route path='/ac/:id' element={<AcSingle></AcSingle>}></Route>
            <Route path='/tv/:id' element={<TvSingle></TvSingle>}></Route>






            <Route path='/cart' element={<UserCart></UserCart>}></Route>


          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App;