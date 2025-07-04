const categories = [
  {
    name: "fruits",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "vegetables",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "dairy",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "meat",
    image:
      "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "bakery",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "frozen foods",
    image:
      "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "beverages",
    image:
      "https://images.unsplash.com/photo-1578664279522-644eace14e48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "snacks",
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "canned goods",
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "grains & pasta",
    image:
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "spices & condiments",
    image:
      "https://images.unsplash.com/photo-1669154780598-ef833944a9ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "breakfast foods",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "sauces & spreads",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "baking supplies",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "organic",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "baby products",
    image:
      "https://images.unsplash.com/photo-1716972065613-c578b93f24ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "pet food",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "cleaning supplies",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "personal care",
    image:
      "https://plus.unsplash.com/premium_photo-1661780487986-975651f6a233?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "household essentials",
    image:
      "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ready to eat",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "international foods",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "health & wellness",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default categories;
