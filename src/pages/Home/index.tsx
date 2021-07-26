import React, { useState, useEffect } from 'react';
import { Container } from './style';

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCart = (index: number) => {
    const productsStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Produto-${index}`, productsStore);
  };

  return (
    <Container>
      <section>
        {data.map((prod, index) => (
          <div className="product-container" key={prod.id}>
            <img src={prod.photo} alt={prod.name} height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R${prod.price}</h6>
            <button onClick={() => handleCart(index)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Home;
