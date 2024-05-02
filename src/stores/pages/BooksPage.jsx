import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { booksData } from '../data/Books';
import Footer from '../components/Footer';

function BooksPage() {
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

  const uniqueCompanies = Array.from(new Set(booksData.map(phone => phone.title)));
  const filterProduct = selectedProduct.length === 0
    ?booksData
    :booksData.filter(item => selectedProduct.includes(item.title));

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
              <Link to={`/books/${item.id}`}>
                <div className="pageImg book-image">
                <img src={item.image} alt={`${item.title} by ${item.author}`} />
                </div>
              </Link>
              <div className="proModel">
                {item.title}, {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BooksPage;
