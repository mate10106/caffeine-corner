const products = [
  {
    category: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Rich and bold, the perfect shot of energy",
        price: "$3.50",
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Cappuccino",
        description: "Smooth espresso with velvety steamed milk",
        price: "$4.50",
        image:
          "https://images.pexels.com/photos/4790060/pexels-photo-4790060.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Latte",
        description: "Creamy and smooth with your choice of flavor",
        price: "$4.75",
        image:
          "https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Cold Brew",
        description: "Refreshingly smooth, steeped for 24 hours",
        price: "$5.00",
        image:
          "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    category: "Pastries",
    items: [
      {
        name: "Croissant",
        description: "Buttery, flaky, and freshly baked every morning",
        price: "$3.75",
        image:
          "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Chocolate Muffin",
        description: "Decadent double chocolate with a moist center",
        price: "$4.25",
        image:
          "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Blueberry Scone",
        description: "Light and crumbly with fresh blueberries",
        price: "$3.95",
        image:
          "https://images.pexels.com/photos/5949893/pexels-photo-5949893.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Cinnamon Roll",
        description: "Sweet, gooey, and topped with cream cheese frosting",
        price: "$4.50",
        image:
          "https://images.pexels.com/photos/3776950/pexels-photo-3776950.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      {
        name: "Turkey & Avocado",
        description: "Roasted turkey, fresh avocado, and crisp lettuce",
        price: "$8.50",
        image:
          "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Caprese Panini",
        description: "Fresh mozzarella, tomato, basil, and balsamic glaze",
        price: "$8.95",
        image:
          "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Classic BLT",
        description: "Crispy bacon, lettuce, tomato on toasted bread",
        price: "$7.95",
        image:
          "https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Veggie Delight",
        description: "Grilled vegetables with hummus spread",
        price: "$7.50",
        image:
          "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso and mascarpone",
        price: "$6.50",
        image:
          "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Cheesecake",
        description: "Creamy New York style with berry compote",
        price: "$6.25",
        image:
          "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Brownie Sundae",
        description: "Warm brownie with vanilla ice cream and chocolate sauce",
        price: "$7.00",
        image:
          "https://images.pexels.com/photos/12737654/pexels-photo-12737654.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Fruit Tart",
        description: "Buttery crust filled with pastry cream and fresh fruits",
        price: "$5.95",
        image:
          "https://images.pexels.com/photos/6607386/pexels-photo-6607386.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
];

const offersSection = document.querySelector(".offers-section");

products.forEach(({ category, items }) => {
  const categoryContainer = document.createElement("div");
  categoryContainer.className = "category-container";

  const title = document.createElement("h3");
  title.className = "category-title";
  title.textContent = category;
  categoryContainer.appendChild(title);

  const itemsContainer = document.createElement("div");
  itemsContainer.className = "items-container";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "offer-card";
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="offer-image" />
        <div class="offer-info">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <span class="price">${item.price}</span>
        </div>
      `;
    itemsContainer.appendChild(card);
  });

  categoryContainer.appendChild(itemsContainer);
  offersSection.appendChild(categoryContainer);
});
