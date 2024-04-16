import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img 
         className='home_image'
         src = "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"
         alt= "Home"
        />

        <div className='home_row'>
         <Product
         id="12345435"
         tittle="WireLess Headphones With bluethooth Conneted in very Cheap Price"
         price={29.99}
         image="https://pngimg.com/d/headphones_PNG101984.png"
         rating={5} />
         <Product
         id="2321432"
         tittle="Dell Laptop 9th Generation i7 Pro 64 bit Operating System in a very Cheap Price"
         price={299.99}
         image="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-Free-Download-PNG.png"
         rating={4}
         />

<Product
         id="4567342" 
         tittle="Hoodie, T-Shirt in a very Smooth Clothing Order any Size "
         price={49.99}
         image="https://static.vecteezy.com/system/resources/previews/008/847/343/original/isolated-blue-front-sweater-free-png.png"
         rating={3}
        />
       
        </div>

        <div className='home_row'>
        <Product 
         id="435456"
         tittle="Hoodie, T-Shirt in a very Smooth Clothing Order any Size "
         price={49.99}
         image="https://freepngimg.com/thumb/clothes/3-2-clothes-transparent.png"
         rating={3}
        />
        <Product
        id="2321432"
         tittle="Dell Monitor HD Graphics 9 64 bit Operating System in a very Cheap Price"
         price={299.99}
         image="https://pngimg.com/d/laptop_PNG5872.png"
         rating={4}
         />
        <Product
        id="435456"
         tittle="WireLess Headphones With bluethooth Conneted in very Cheap Price"
         price={29.99}
         image="https://static.vecteezy.com/system/resources/previews/024/558/941/original/blue-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png"
         rating={5} />
        </div>
      
        <div className='home_row'>
        <Product
         id="4567342" 
         tittle="Hoodie, T-Shirt in a very Smooth Clothing Order any Size "
         price={49.99}
         image="https://static.vecteezy.com/system/resources/previews/008/847/343/original/isolated-blue-front-sweater-free-png.png"
         rating={3}
        />
        </div>
  
      </div>
    </div>
  )
}

export default Home