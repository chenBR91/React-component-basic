const allProducts = [
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    price: 99,
    category: 'Winter Jacket',
  }
]


const Header =() =>{
  return (
    <div>
        <nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select>
              <option value="/">All Jackets</option>
              <option value="/">2016</option>
              <option value="/">jacket</option>
              <option value="/">Jackets</option>
              <option value="/">layers</option>
              <option value="/">Obermeyer</option>
              <option value="/">Roxy</option>
              <option value="/">womens</option>
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}


const Products = () =>{
  return(
    <div>
      <section className="products">
        {allProducts.map((product, index)=> <Product key={index} product={product} />
          )}
      </section>
    </div>
  );
}

const Product = (props) => {
  const {product} = props
  console.log(product);
  return(
    <div className="product-card">
        <div className="product-image">
          <img
            src={product.imgSrc}
          />
        </div>
        <div className="product-info">
          <h5>{product.category}</h5>
          <h6>${product.price}</h6>
        </div>
      </div>
  )
}



const Main = () => {
  console.log('main');
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
}


ReactDOM.render(<Main />, document.getElementById('app'));