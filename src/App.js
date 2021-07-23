import Header from './component/Header';
import './App.css';
import MainPage from './component/MainPage';
import { useState } from 'react';
import catalogData from './assets/catalog.json'
import Footer from "./component/Footer";



function App() {
  const [breadCrumbs, setbreadCrumbs] = useState([
   ]);
   const [selectedCategory, setselectedCategory] = useState({});
   const [selectedSubCategory, setSelectedSubCategory] = useState([]);
   const [CurrentPage, setCurrentPage] = useState('HOME');
      
  return (
    <div className="App fluid">
      <Header catalogData={catalogData.data} setbreadCrumbs={setbreadCrumbs} setselectedCategory={setselectedCategory} setCurrentPage={setCurrentPage} />
      <MainPage breadCrumbs={breadCrumbs} setbreadCrumbs={setbreadCrumbs} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory} CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} />
      <Footer/>
    </div>
  );
}

export default App;
