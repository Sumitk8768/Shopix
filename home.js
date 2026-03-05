const cardContainer = document.querySelector(".best-seller-container")
const main = document.querySelector("main")
const navLink = document.querySelectorAll('nav ul li')
const productPage = document.querySelector('.products-page')
const productsContainer = document.querySelector('.products-container')

const products = [
  {
    id: 1,
    name: "Eclipse Sneakers",
    category: "Sneakers",
    price: 430,
    oldPrice: 450,
    currency: "USD",
    rating: 4.3,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a0368f03f08bf146a04fde_eclipse.png"
  },
  {
    id: 2,
    name: "Grvity Oxford Shoe",
    category: "Formal",
    price: 400,
    oldPrice: 420,
    currency: "USD",
    rating: 4.3,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a036160123c0be15af5bb7_oxford-2.png"
  },
  {
    id: 3,
    name: "Flexora Boot",
    category: "Boots",
    price: 520,
    oldPrice: 530,
    currency: "USD",
    rating: 4.1,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a036b612965524103dc627_f-boot.png"
  },
  {
    id: 4,
    name: "Boltrek Sports Shoe",
    category: "Sports",
    price: 320,
    oldPrice: 350,
    currency: "USD",
    rating: 4.3,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a0370a1a953b87bd54b59d_shoe-2.png"
  },
  {
    id: 5,
    name: "Formal Movo Shoe",
    category: "Formal",
    price: 430,
    oldPrice: 440,
    currency: "USD",
    rating: 4.1,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a037b8ebc8cd2d4b3a6578_formal-movo.png"
  },
  {
    id: 6,
    name: "Flexora High Neck",
    category: "Boots",
    price: 460,
    oldPrice: 480,
    currency: "USD",
    rating: 4.2,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03805667e031c13a3e7cc_f-hight-neck.png"
  },
  {
    id: 7,
    name: "Runx Running Shoe",
    category: "Running",
    price: 460,
    oldPrice: 480,
    currency: "USD",
    rating: 4.4,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a0385b89e3d0f08c4744e7_running-2.png"
  },
  {
    id: 8,
    name: "Yono Loafers",
    category: "Loafers",
    price: 510,
    oldPrice: 520,
    currency: "USD",
    rating: 4.5,
    image: "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03981177dc57b2dcc9112_loafer-2.png"
  }
];



function renderCard(){
  let sum = '';
  products.forEach((e)=>{
   sum += `
        <div class="best-seller-card">
            <div class="img-conatiner">
                        <img src="${e.image}"
                        alt="">
            </div>
                    <h3>${e.name}<span><i class="ri-star-s-fill"></i><span>${e.rating}</span></span></h3>
                    <p>₹ ${e.price}<span>₹ ${e.oldPrice}</span></p>
        </div>
   `
})

cardContainer.innerHTML = sum;
productsContainer.innerHTML = sum;
}

renderCard()

const shopNow = document.querySelectorAll(".shop-now")

shopNow.forEach((e)=>{
  e.addEventListener("click",()=>{
    main.style.display = "none"
    productPage.style.display = "block"
  })
})


navLink.forEach((e)=>{
  e.addEventListener('click',()=>{
   if(e.textContent === 'Home'){
    main.style.display = "block"
    productPage.style.display = "none"
   }
   else if(e.textContent === 'Products'){
      main.style.display = "none"
    productPage.style.display = "block"
   }
   console.log("clicked")
})
})

