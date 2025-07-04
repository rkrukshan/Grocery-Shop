const products = [
  {
    id: 1,
    name: "Spinach",
    category: "vegetables",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "bunch",
  },
  {
    id: 2,
    name: "Red Onions",
    category: "vegetables",
    price: 220.0,
    image:
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "kg",
  },
  {
    id: 3,
    name: "Bananas (Ambul)",
    category: "fruits",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "dozen",
  },
  {
    id: 4,
    name: "Chicken (Whole)",
    category: "meat",
    price: 850.0,
    image:
      "https://images.unsplash.com/photo-1672787380741-6fe6c7450668?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 5,
    unit: "kg",
  },
  {
    id: 5,
    name: "Fresh Milk (Highland)",
    category: "dairy",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "1L",
  },
  {
    id: 6,
    name: "White Bread",
    category: "bakery",
    price: 130.0,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 20,
    unit: "loaf",
  },
  {
    id: 7,
    name: "Dhal (Mysoor)",
    category: "grains & pasta",
    price: 240.0,
    image:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "kg",
  },
  {
    id: 8,
    name: "Chili Powder",
    category: "spices & condiments",
    price: 320.0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "100g",
  },
  {
    id: 9,
    name: "Coconut Oil",
    category: "spices & condiments",
    price: 580.0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 6,
    unit: "500ml",
  },
  {
    id: 10,
    name: "Eggs (White)",
    category: "dairy",
    price: 50.0,
    image:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "each",
  },
  {
    id: 11,
    name: "Rice (Samba)",
    category: "grains & pasta",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "kg",
  },
  {
    id: 12,
    name: "Potatoes",
    category: "vegetables",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "kg",
  },
  {
    id: 13,
    name: "Tomatoes",
    category: "vegetables",
    price: 250.0,
    image:
      "https://images.unsplash.com/photo-1592841200221-a6895fdfa1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "kg",
  },
  {
    id: 14,
    name: "Coconut",
    category: "vegetables",
    price: 70.0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 20,
    unit: "each",
  },
  {
    id: 15,
    name: "Green Chilies",
    category: "vegetables",
    price: 300.0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "100g",
  },
  {
    id: 16,
    name: "Mangoes",
    category: "fruits",
    price: 200.0,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "kg",
  },
  {
    id: 17,
    name: "Pineapple",
    category: "fruits",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "each",
  },
  {
    id: 18,
    name: "Papaya",
    category: "fruits",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 6,
    unit: "each",
  },
  {
    id: 19,
    name: "Beef",
    category: "meat",
    price: 1200.0,
    image:
      "https://images.unsplash.com/photo-1618841507238-4f5c6b2b5c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 5,
    unit: "kg",
  },
  {
    id: 20,
    name: "Pork",
    category: "meat",
    price: 950.0,
    image:
      "https://images.unsplash.com/photo-1618841507238-4f5c6b2b5c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 4,
    unit: "kg",
  },
  {
    id: 21,
    name: "Fish (Salmon)",
    category: "seafood",
    price: 1800.0,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 3,
    unit: "kg",
  },
  {
    id: 22,
    name: "Prawns",
    category: "seafood",
    price: 1200.0,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 4,
    unit: "kg",
  },
  {
    id: 23,
    name: "Cheese (Kotmale)",
    category: "dairy",
    price: 450.0,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "200g",
  },
  {
    id: 24,
    name: "Yogurt",
    category: "dairy",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "500g",
  },
  {
    id: 25,
    name: "Butter",
    category: "dairy",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 6,
    unit: "250g",
  },
  {
    id: 26,
    name: "Buns",
    category: "bakery",
    price: 80.0,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "pack of 4",
  },
  {
    id: 27,
    name: "Cake",
    category: "bakery",
    price: 650.0,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 5,
    unit: "500g",
  },
  {
    id: 28,
    name: "Biscuits",
    category: "bakery",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "pack of 10",
  },
  {
    id: 29,
    name: "Ice Cream",
    category: "frozen foods",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "1L",
  },
  {
    id: 30,
    name: "Frozen Vegetables",
    category: "frozen foods",
    price: 280.0,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "500g",
  },
  {
    id: 31,
    name: "Coca Cola",
    category: "beverages",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "1.5L",
  },
  {
    id: 32,
    name: "Orange Juice",
    category: "beverages",
    price: 220.0,
    image:
      "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "1L",
  },
  {
    id: 33,
    name: "Tea Bags",
    category: "beverages",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "pack of 25",
  },
  {
    id: 34,
    name: "Coffee",
    category: "beverages",
    price: 450.0,
    image:
      "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "200g",
  },
  {
    id: 35,
    name: "Potato Chips",
    category: "snacks",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "pack of 1",
  },
  {
    id: 36,
    name: "Chocolate",
    category: "snacks",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "100g",
  },
  {
    id: 37,
    name: "Biscuits (Marie)",
    category: "snacks",
    price: 90.0,
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    unit: "pack of 10",
  },
  {
    id: 38,
    name: "Sardines",
    category: "canned goods",
    price: 220.0,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "can",
  },
  {
    id: 39,
    name: "Baked Beans",
    category: "canned goods",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "can",
  },
  {
    id: 40,
    name: "Tuna",
    category: "canned goods",
    price: 250.0,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "can",
  },
  {
    id: 41,
    name: "Wheat Flour",
    category: "grains & pasta",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "kg",
  },
  {
    id: 42,
    name: "Pasta",
    category: "grains & pasta",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "500g",
  },
  {
    id: 43,
    name: "Curry Powder",
    category: "spices & condiments",
    price: 280.0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "100g",
  },
  {
    id: 44,
    name: "Turmeric Powder",
    category: "spices & condiments",
    price: 320.0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 6,
    unit: "100g",
  },
  {
    id: 45,
    name: "Mustard",
    category: "spices & condiments",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "100g",
  },
  {
    id: 46,
    name: "Corn Flakes",
    category: "breakfast foods",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 8,
    unit: "500g",
  },
  {
    id: 47,
    name: "Oats",
    category: "breakfast foods",
    price: 280.0,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "500g",
  },
  {
    id: 48,
    name: "Honey",
    category: "breakfast foods",
    price: 450.0,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 6,
    unit: "500g",
  },
  {
    id: 49,
    name: "Tomato Sauce",
    category: "sauces & spreads",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    unit: "500g",
  },
  {
    id: 50,
    name: "Mayonnaise",
    category: "sauces & spreads",
    price: 220.0,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    unit: "500g",
  },
];

export default products;
