// Users Lists //
if (!sessionStorage.getItem("users")) {
  const users = [
    {
      username: "Default",
      email: "default@gmail.com",
      password: "12345",
    },
  ];
  sessionStorage.setItem("users", JSON.stringify(users));
}
const users = JSON.parse(sessionStorage.getItem("users"));
//
//
//
//
//
// Products Lists //
const products = [
  {
    name: "Tech-Smart Performance T-Shirt",
    category: "T-shirts",
    price: 16.99,
    image: "images/t-shirt-2-c-1.jpg",
    image2: "images/t-shirt-2-c-2.jpg",
    image3: "images/t-shirt-2-c-3.jpg",
    image4: "images/t-shirt-2-c-4.jpg",
    colours: ["#000000", "#ebebeb"],
    description:
      "Stretchy, moisture-wicking fabric keeps you dry and comfortable all day.",
  },
  {
    name: "Kick Out Crop Mid Rise Jeans",
    category: "Jeans",
    price: 69.99,
    image: "images/jean-1-c-1.jpg",
    image2: "images/jean-1-c-2.jpg",
    image3: "images/jean-1-c-3.jpg",
    image4: "images/jean-1-c-4.jpg",
    colours: ["#000000", "#3399cc"],
    description:
      "With a saturated dark wash and a slim bootcut shape, these jeans are polished for day or night.",
  },
  {
    name: "Tiffany One-Shoulder Midi Dress",
    category: "Dresses",
    price: 148.99,
    image: "images/dress-2-c-1.jpg",
    image2: "images/dress-2-c-2.jpg",
    image3: "images/dress-2-c-3.jpg",
    image4: "images/dress-2-c-4.jpg",
    colours: ["#f0c04a", "#3399cc"],
    description:
      "Create a long, lean silhouette with the help of flattering seams.",
  },
  {
    name: "Corduroy Wide Leg Jeans",
    category: "Jeans",
    price: 39.99,
    image: "images/jean-2-c-1.jpg",
    image2: "images/jean-2-c-2.jpg",
    image3: "images/jean-2-c-3.jpg",
    image4: "images/jean-2-c-4.jpg",
    colours: ["#000000", "#3399cc"],
    description:
      "Faded details add a lived-in look to vintage-inspired jeans that kick out at the knees.",
  },
  {
    name: "V-Neck Short Sleeve Pocket T-Shirt",
    category: "T-shirts",
    price: 12.99,
    image: "images/t-shirt-1-c-1.jpg",
    image2: "images/t-shirt-1-c-2.jpg",
    image3: "images/t-shirt-1-c-3.jpg",
    image4: "images/t-shirt-1-c-4.jpg",
    colours: ["#000000", "#ebebeb"],
    description:
      "A soft slubbed knit adds subtle texture and a lightweight airiness to this classic pocket T-shirt.",
  },
  {
    name: "Flutter Sleeve Faux Wrap Midi Dress",
    category: "Dresses",
    price: 89.99,
    image: "images/dress-1-c-1.jpg",
    image2: "images/dress-1-c-2.jpg",
    image3: "images/dress-1-c-3.jpg",
    image4: "images/dress-1-c-4.jpg",
    colours: ["#f0c04a", "#3399cc"],
    description:
      "Puff sleeves frame this charming midi designed with a wrapped bodice and an open-and-tied back.",
  },
  {
    name: "Fianna Sneaker",
    category: "Sneakers",
    price: 59.99,
    image: "images/sneaker-1-c-1.jpg",
    image2: "images/sneaker-1-c-2.jpg",
    image3: "images/sneaker-1-c-3.jpg",
    image4: "images/sneaker-1-c-4.jpg",
    colours: ["#ebebeb", "#b87145"],
    description: "Heritage details meet modern attitude in a '70s.",
  },
  {
    name: "Virgin Wool Suit",
    category: "Suits",
    price: 399.99,
    image: "images/suit-1-c-1.jpg",
    image2: "images/suit-1-c-2.jpg",
    image3: "images/suit-1-c-3.jpg",
    image4: "images/suit-1-c-4.jpg",
    colours: ["#000000", "#3399cc"],
    description:
      "Italian craftsmanship couples with rich virgin wool to create this polished suit.",
  },
  {
    name: "Tavey Ankle Strap Sandal",
    category: "High-Heels",
    price: 59.99,
    image: "images/high-heel-2-c-1.jpg",
    image2: "images/high-heel-2-c-2.jpg",
    image3: "images/high-heel-2-c-3.jpg",
    image4: "images/high-heel-2-c-4.jpg",
    colours: ["#f0c04a", "#993333"],
    description:
      "Shimmery fabric highlights the slender straps on an event-ready sandal.",
  },
  {
    name: "Trim Fit Plaid Wool Blend Suit",
    category: "Suits",
    price: 299.99,
    image: "images/suit-2-c-1.jpg",
    image2: "images/suit-2-c-2.jpg",
    image3: "images/suit-2-c-3.jpg",
    image4: "images/suit-2-c-4.jpg",
    colours: ["#000000", "#3399cc"],
    description:
      "A charming plaid elevates this trim-fit suit tailored from a wool.",
  },
  {
    name: "Paily Braided Sandal",
    category: "High-Heels",
    price: 99.99,
    image: "images/high-heel-1-c-1.jpg",
    image2: "images/high-heel-1-c-2.jpg",
    image3: "images/high-heel-1-c-3.jpg",
    image4: "images/high-heel-1-c-4.jpg",
    colours: ["#f0c04a", "#993333"],
    description:
      "A classic stiletto adds leg-lengthening lift and timeless appeal to an elegant pointy-toe pump..",
  },
  {
    name: "Zina Sneaker",
    category: "Sneakers",
    price: 79.99,
    image: "images/sneaker-2-c-1.jpg",
    image2: "images/sneaker-2-c-2.jpg",
    image3: "images/sneaker-2-c-3.jpg",
    image4: "images/sneaker-2-c-4.jpg",
    colours: ["#ebebeb", "#b87145"],
    description:
      "An abstract display of geometric shapes rides along the bumper sole.",
  },
];
//
//
//
//
//
// Current Item //
if (!sessionStorage.getItem("currItem")) {
  const currItem = [];
  sessionStorage.setItem("currItem", JSON.stringify(currItem));
}
const currItem = JSON.parse(sessionStorage.getItem("currItem"));
//
//
//
//
//
// Cart Items //
if (!sessionStorage.getItem("cartItems")) {
  const cartItems = [];
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}
const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
//
//
//
//
//
// Cart Item Totals //
if (!sessionStorage.getItem("cartItemsTotal")) {
  const cartItemsTotal = [];
  sessionStorage.setItem("cartItemsTotal", JSON.stringify(cartItemsTotal));
}
const cartItemsTotal = JSON.parse(sessionStorage.getItem("cartItemsTotal"));
//
//
//
//
//
// Wishlist Items //
if (!sessionStorage.getItem("wishlistItems")) {
  const wishlistItems = [];
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
}
const wishlistItems = JSON.parse(sessionStorage.getItem("wishlistItems"));
//
//
//
//
//
// Log In Function //
function login() {
  const email = document.getElementById("logInEmail").value;
  const password = document.getElementById("logInPassword").value;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    window.location.href = "profile.html";
  } else {
    alert("Invalid username or password.");
  }
}
//
//
//
//
//
// Register Function //
function register() {
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  const existingUsername = users.find((user) => user.username === username);
  const existingEmail = users.find((user) => user.email === email);

  if (existingUsername) {
    alert("Username already exists.");
  }

  if (existingEmail) {
    alert("Email already registered! Try loggin in.");
  }
  if (!existingUsername && !existingEmail) {
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    users.push(newUser);
    sessionStorage.setItem("users", JSON.stringify(users));

    window.location.href = "profile.html";
  }
}
//
//
//
//
//
// Pagination Function //
function showProducts(pageNumber) {
  const products = document.querySelectorAll(".product");
  const productsPerPage = 6;
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  products.forEach((product, index) => {
    if (index >= startIndex && index < endIndex) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
function handlePaginationClick(event) {
  event.preventDefault();
  const pageNumber = parseInt(event.target.textContent);
  showProducts(pageNumber);
}
const paginationLinks = document.querySelectorAll(".pagination .page-link");
paginationLinks.forEach((link) => {
  link.addEventListener("click", handlePaginationClick);
});
showProducts(1);
//
//
//
//
//
// Search Bar Function //
function handleSearch(event) {
  if (event.key === "Enter") {
    searchProducts();
  }
}
function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const searchResultsContainer = document.getElementById("searchResults");
  const pagination = document.getElementById("pagination");

  if (searchInput === "") {
    showProducts(1);
    return;
  }

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();
    return (
      productName.includes(searchInput) || productCategory.includes(searchInput)
    );
  });

  if (filteredProducts.length === 0) {
    searchResultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  const resultHTML = filteredProducts
    .map(
      (product) => `
        <div class="col-6 col-md-4 col-lg-4 my-4">
          <div class="product">
            <figure class="product-media">
              <a href="#">
                <img src="${product.image}" alt="${product.name}" class="product-image">
              </a>
            </figure>
            <div class="product-body">
              <div class="product-cat">
                <a href="#">${product.category}</a>
              </div>
              <h3 class="product-title">
                <a href="#">${product.name}</a>
              </h3>
              <div class="product-price">${product.price}</div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  searchResultsContainer.innerHTML = resultHTML;
  pagination.innerHTML = "";
}
//
//
//
//
//
// Add to Cart Function //
function addCartItems(item) {
  cartItems.push(item);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Item Added to the Cart!");
}
function addCartItemsTotal(price) {
  cartItemsTotal.push(price);
  sessionStorage.setItem("cartItemsTotal", JSON.stringify(cartItemsTotal));
}
function generateCartItems(cartItems) {
  let addedItemIndex = 0;
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const { name, image, price, ...others } = item;

    const cartItemRow = document.createElement("div");
    cartItemRow.classList.add(
      "d-flex",
      "align-items-center",
      "mb-5",
      "cart-item"
    );

    cartItemRow.innerHTML = `
      <div class="flex-shrink-0">
        <img src="${image}" class="img-fluid" alt="" />
      </div>
      <div class="flex-grow-1 ms-3">
        <a href="#!" onclick="deleteCartItems(${addedItemIndex}); deleteCartItemsPrice(${addedItemIndex});" class="float-end text-black"><i class="fas fa-times"></i></a>
        <h5>${name}</h5>
        <div class="d-flex align-items-center">
          <p class="fw-bold mb-0 me-5 pe-3 cart-item-price">$${price}</p>
          <div class="def-number-input number-input safari_only">
            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
            <input class="quantity fw-bold text-black" min="0" name="quantity" value="1" type="number" />
            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
          </div>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItemRow);
    addedItemIndex++;
  });
}
function sumCartItemsprice(cartItemsTotal) {
  const cartTotal = document.getElementById("totalPrice");

  const sum = cartItemsTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  cartTotal.innerHTML = `$${sum.toFixed(2)}`;
}
function deleteCartItems(index) {
  cartItems.splice(index, 1);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  generateCartItems(cartItems);
}
function deleteCartItemsPrice(index) {
  cartItemsTotal.splice(index, 1);
  sessionStorage.setItem("cartItemsTotal", JSON.stringify(cartItemsTotal));
  sumCartItemsprice(cartItemsTotal);
}
//
//
//
//
//
// Add to Wishlist Function //
function addWishlistItems(item) {
  wishlistItems.push(item);
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  alert("Item Added to the Wishlist!");
}
function generateWishlistItems(wishlistItems) {
  let wishedItemIndex = 0;
  const wishlistItemsContainer = document.getElementById(
    "wishlistItemsContainer"
  );
  wishlistItemsContainer.innerHTML = "";

  wishlistItems.forEach((item) => {
    const { name, image, price, ...others } = item;

    const wishlistItemRow = document.createElement("div");
    wishlistItemRow.classList.add("card", "rounded-3", "mb-4");

    wishlistItemRow.innerHTML = `
    <div class="card-body p-4">
    <div
      class="row d-flex justify-content-between align-items-center"
    >
      <div class="col-md-2">
        <img
          src="${image}"
          class="img-fluid rounded-3"
          alt="T Shirt 1"
        />
      </div>
      <div class="col-md-3">
        <p class="lead fw-normal mb-2">
          ${name}
        </p>
      </div>

      <div class="col-md-3 text-center">
        <h5 class="mb-0 cart-item-price">$${price}</h5>
      </div>

      <div class="col-md-3 my-2">
        <button
          type="button"
          class="btn btn-primary btn-block btn-lg btn-add-to-cart" onclick="addCartItems(wishlistItems[${wishedItemIndex}]); addCartItemsTotal(wishlistItems[${wishedItemIndex}].price);
          "
        >
          ADD TO CART
        </button>
      </div>

      <div class="col-md-1 text-end">
        <a href="#!" onclick="deleteWishlistItems(${wishedItemIndex})" class="text-danger trash-can"
          ><i class="fas fa-trash fa-lg"></i
        ></a>
      </div>
    </div>
  </div>
    `;

    wishlistItemsContainer.appendChild(wishlistItemRow);
    wishedItemIndex++;
  });
}
function deleteWishlistItems(index) {
  wishlistItems.splice(index, 1);
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  generateWishlistItems(wishlistItems);
}
//
//
//
//
//
// Dynamic Item Page Function //
function currItemPage(product) {
  currItem.push(product);
  sessionStorage.setItem("currItem", JSON.stringify(currItem));
  window.location.href = "item.html";
}
function displayItemDesc() {
  const itemDescContainer = document.getElementById("itemDescContainer");
  itemDescContainer.innerHTML = "";

  const {
    name,
    category,
    price,
    image,
    image2,
    image3,
    image4,
    colours,
    description,
  } = currItem[currItem.length - 1];

  itemDescContainer.innerHTML = `
  <div class="col-lg-5 col-md-12 col-12 img-gallery">
          <img
            class="img-fluid pb-2 w-100"
            src=${image}
            alt=""
            id="mainImage"
          />

          <div class="small-img-group">
            <div class="small-img-col">
              <img
                src=${image}
                width="100%"
                class="small-img"
                alt=""
                onclick="changeImage('${image}')"
              />
            </div>
            <div class="small-img-col">
              <img
                src=${image2}
                width="100%"
                class="small-img"
                alt=""
                onclick="changeImage('${image2}')"

              />
            </div>
            <div class="small-img-col">
              <img
                src=${image3}
                width="100%"
                class="small-img"
                alt=""
                onclick="changeImage('${image3}')"

              />
            </div>
            <div class="small-img-col">
              <img
                src=${image4}
                width="100%"
                class="small-img"
                alt=""
                onclick="changeImage('${image4}')"

              />
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-12 col-12">
          <h3 class="py-4">${name}</h3>

          <h2>$${price}</h2>

          <select class="my-3">
            <option>Select Size</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>

          <div class="filter-colors">
            <span> Available Colors: </span>
            <a href="#" style="background: ${colours[0]}"></a>
            <a href="#" style="background: ${colours[1]}"></a>
          </div>

          <button
            class="btn-add-to-cart mt-3 mb-5"
            onclick="addCartItems(currItem[currItem.length - 1]); addCartItemsTotal(currItem[currItem.length - 1].price);
          "
          >
            ADD TO CART
          </button>
          <button
            class="btn-add-to-wishlist mt-3 mb-5"
            onclick="addWishlistItems(currItem[currItem.length - 1]);
          "
          >
            Add To Wishlist
          </button>

          <h4 class="my-3">Product Details</h4>
          <span
            >${description}</span
          >

          <hr class="mx-auto" />

          <div class="product-cat-filter">
            <span>Category:</span>
            <a href="#">${category}</a>
          </div>
        </div>`;
}
//
//
//
//
//
// Dynamic Image Gallery //
function changeImage(img) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = img;
}
