const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 65.0,
    category: "Footwear",
  },
  {
    name: "Yoga Mat",
    price: 20.0,
    category: "Fitness",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 15.5,
    category: "Accessories",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 99.99,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 45.0,
    category: "Accessories",
  },
  {
    name: "Digital Camera",
    price: 399.99,
    category: "Electronics",
  },
  {
    name: "Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
  },
  {
    name: "Sunglasses",
    price: 120.0,
    category: "Accessories",
  },
  {
    name: "Cookware Set",
    price: 250.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Toothbrush",
    price: 75.0,
    category: "Personal Care",
  },
  {
    name: "Office Chair",
    price: 150.0,
    category: "Furniture",
  },
  {
    name: "Coffee Maker",
    price: 85.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Kettle",
    price: 30.0,
    category: "Home & Kitchen",
  },
  {
    name: "Backpack",
    price: 60.0,
    category: "Accessories",
  },
  {
    name: "Standing Desk",
    price: 300.0,
    category: "Furniture",
  },
  {
    name: "Desk Lamp",
    price: 40.0,
    category: "Furniture",
  },
  {
    name: "Running T-shirt",
    price: 25.0,
    category: "Apparel",
  },
];

const categorizeProducts = (products) => {
  const categories = {};
  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });
  return categories;
};

const createProductListHTML = (categories) => {
  return Object.keys(categories)
    .map((category) => {
      const productsInCategory = categories[category];
      return `
      <h2>${category}</h2>
      <ul>
        ${productsInCategory
          .map((product) => `<li>${product.name} - $${product.price}</li>`)
          .join("")}
      </ul>
    `;
    })
    .join("");
};

const categories = categorizeProducts(products);
const html = createProductListHTML(categories);

document.getElementById("products").insertAdjacentHTML("beforeend", html);
