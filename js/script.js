console.log("hello");

// https://dummyjson.com/products

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((dat) => {
    console.log(dat);
    productDetails(dat);
  });

function productDetails(data) {
    let brands = data.products[0];
    // console.log(brand);

    let items = `
      <div class="item">
      <h2 class="brand-name">${brands.title}</h2>
      <div class="brand-img">
        <img src=${brands.images[0]} alt="">
      </div>
      <p class="brand-price">${brands.price}</p>
      <p class="brand-description">${brands.description}</p>
      </div>
      `;

    let products = data.products;

    for (let i = 1; i < products.length; i++) {
        items += `
        <div class="item">
        <h2 class="brand-name">${products[i].title}</h2>
        <div class="brand-img">
          <img src=${products[i].images[0]} alt="">
        </div>
        <p class="brand-price">${products[i].price}</p>
        <p class="brand-description">${products[i].description}</p>
        </div>`;
    }


    document.getElementById("products").innerHTML = items;

}
