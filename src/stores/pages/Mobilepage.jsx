import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Mobiledata } from '../data/Mobiles';
import Footer from '../components/Footer';

function Mobilepage() {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mobileitems) => {
    setSelectedProduct((currentSelected) => {
      if (currentSelected.includes(mobileitems)) {
        return currentSelected.filter(item => item !== mobileitems);
      } else {
        return [...currentSelected, mobileitems];
      }
    });
  };

  const uniqueCompanies = Array.from(new Set(Mobiledata.map(phone => phone.company)));
  const filterProduct = selectedProduct.length === 0
    ? Mobiledata
    : Mobiledata.filter(item => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className='full-page'>
        <div className='sidebar'>
          {uniqueCompanies.map((company) => (
            <div key={company}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandler(company)}
                />
                {company}
              </label>
            </div>
          ))}
        </div>
        <div className='pageSection'>
          {filterProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={`${item.company} ${item.model}`} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Mobilepage;
