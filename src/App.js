import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [conuntries,setCountries] = useState([]);
  const [error,setError]= useState(false);
  const [isLoading,setIsloading]= useState(false);
  const [filtercountries,setFiltercountries]= useState(conuntries);

  const fetchData = async(url)=>{
    setIsloading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFiltercountries(data);
      setIsloading(false);
    }catch(error){
      setIsloading(false);
      setError(error.message);
    }

  }
  const searchHandle = (searchText)=>{
    let value = searchText.toLowerCase();
    const newCountries = conuntries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFiltercountries(newCountries);
  }
  useEffect(()=>{
    fetchData(url);
  },[]);
  return (
    <>
      <Header />
      <Main loading={isLoading} error={error} countries={filtercountries} onSearch={searchHandle}/>
      <Footer />
    </>
  );
}

export default App;
