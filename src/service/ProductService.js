const products = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "The Islamic Chamber of Commerce and Industry Uganda (ICCIU) is a Company Limited by Guarantee incorporated in 2010 in Uganda as a member of OIC. The Chamber is affiliated to the Islamic Chamber of Commerce and industry (ICCI) of Karachi, which is a private sector arm of the Organisation of Islamic Cooperation of 57-Member States.....",
    description: [],
    image: "slide1.jpeg",
    price: 65,
    category: "#mandate",
    quantity: 24,
    inventoryStatus: "Read More",
    rating: 5,
  },
  {
    id: "1001",
    code: "asd321sa",
    name: "Our Vision is a sustainably transformed public private sector championing global trade.",
    description: [],
    image: "slide2.jpeg",
    price: 120,
    category: "#about",
    quantity: 15,
    inventoryStatus: "See More",
    rating: 4,
  },
  {
    id: "1002",
    code: "qwe123qw",
    name: "Among our Strategic Objectives:",
    description: [
      "We aim to Promote a vibrant private sector that is compliant to Ethical and Sustainable regulatory frameworks",
      "To foster Collaboration with affiliate organizations through public-private-partnerships",
      "To promote access to affordable and sustainable finance, markets, Tourism, Research and Innovation",
    ],
    image: "slide3.jpeg",
    price: 90,
    category: "#services",
    quantity: 10,
    inventoryStatus: "See More",
    rating: 5,
  },
  {
    id: "1003",
    code: "zxc456zx",
    name: "You can join Us through one of these membership Categories",
    description: [
      "Small medium enterprises (SMEs)",
      "Corporate Companies",
      "Manufactures",
      "Civil society Organizations (CSOs)",
      "Foreign Direct Investments (FDIs)",
      "Ministries, Departments and Agencies (MDAs)",
    ],
    image: "slide4.jpeg",
    price: 25,
    category: "/join",
    quantity: 50,
    inventoryStatus: "Join Now",
    rating: 3,
  },
];

// ./service/ProductService.js

// Define ProductService object
const ProductService = {
  // Define getProductsSmall method
  getProductsSmall: async function () {
    try {
      // Simulate asynchronous behavior by wrapping in a Promise
      return new Promise((resolve) => {
        // Return the predefined products array
        resolve(products);
      });
    } catch (error) {
      // Handle any errors that occur
      console.error("Error fetching products:", error);
      throw error; // Throw the error to be caught by the caller
    }
  },
};

// Export ProductService object
export { ProductService };
