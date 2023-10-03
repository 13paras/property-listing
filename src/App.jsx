/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./utils/data.json";
import FilterTabs from "./components/FilterTabs";
import PropertyListing from "./components/PropertyListing";
import PropertyDetails from "./components/PropertyDetails";
import { useDispatch } from "react-redux";
import { setProperties } from "./redux/slices/propertiesSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProperties(data.properties));
  }, []);
  return (
    <div className='mx-auto my-10 max-w-[1250px]'>
      <header className='mx-auto w-[45%]'>
        <h2 className='text-4xl font-semibold'>Featured Listed Property</h2>
        <p className='pt-3 text-sm'>
          Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity. The value of real estate can be...
        </p>
      </header>
      <BrowserRouter>
        <FilterTabs />
        <Routes>
          <Route path='/' element={<PropertyListing />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
