const initialState = {
  // eslint-disable-next-line no-sparse-arrays
  productDetail: {},
  dataItem: [
    {
      id: 1,
      image: "http://34.253.31.99/site/upload/product_image/1653661614-0.jpg",
      tag: "30 %", //discounts
      name: "Nike Sportswear",
      price: "$39.99",
    },
    {
      id: 2,
      image: "http://34.253.31.99/site/upload/product_image/1653662640-0.jpg",
      tag: "",
      tag: "", //discounts
      name: "Romper for Men",
      price: "$38.99",
    },
    {
      id: 3,
      image: "http://34.253.31.99/site/upload/product_image/1653661702-0.jpg",
      tag: "",
      name: "Basic Slim Fit T-Shirt",
      price: "$79.99",
    },
    {
      id: 4,
      image: "http://34.253.31.99/site/upload/product_image/1653661507-0.jpg",
      tag: "",
      name: "Nike Tracksuit",
      price: "$99.99",
    },
    {
      id: 5,
      image: "http://34.253.31.99/site/upload/product_image/1653660135-0.jpg",
      tag: "",
      name: "Adidas Men essential gradient logo Short",
      price: "$29.99",
    },
    ,
    {
      id: 6,
      image: "http://34.253.31.99/site/upload/product_image/1653662471-0.jpg",
      tag: "",
      name: "Giordano Trouser",
      price: "$16.99",
    },
    {
      id: 7,
      image: "http://34.253.31.99/site/upload/product_image/1653658363-0.jpg",
      tag: "",
      name: "Exploration Polo",
      price: "$39.6",
    },
    {
      id: 8,
      image: "http://34.253.31.99/site/upload/product_image/1653661419-0.jpg",
      tag: "",
      name: "Navy Blue Tracksuit",
      price: "$89.99",
    },
    {
      id: 9,
      image: "http://34.253.31.99/site/upload/product_image/1653662307-0.jpg",
      tag: "",
      name: "Royal Tag Jacket",
      price: "$38.99",
    },
    {
      id: 10,
      image: "http://34.253.31.99/site/upload/product_image/1653659155-0.jpg",
      tag: "",
      name: "Nike Air Zoom",
      price: "$128.99",
    },
    {
      id: 11,
      image: "http://34.253.31.99/site/upload/product_image/1653661614-0.jpg",
      tag: "30 %", //discounts
      name: "Nike Sportswear",
      price: "$39.99",
    },
    {
      id: 12,
      image: "http://34.253.31.99/site/upload/product_image/1653662640-0.jpg",
      tag: "",
      tag: "", //discounts
      name: "Romper for Men",
      price: "$38.99",
    },
  ],
  dataItem2: [
    {
      image: "http://34.253.31.99/site/upload/product_image/1653660135-0.jpg",
      tag: "",
      name: "Adidas Men essential gradient logo Short",
      price: "$29.99",
    },
    ,
    {
      image: "http://34.253.31.99/site/upload/product_image/1653662471-0.jpg",
      tag: "",
      name: "Giordano Trouser",
      price: "$16.99",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653658363-0.jpg",
      tag: "",
      name: "Exploration Polo",
      price: "$39.6",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653661419-0.jpg",
      tag: "",
      name: "Navy Blue Tracksuit",
      price: "$89.99",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653662307-0.jpg",
      tag: "",
      name: "Royal Tag Jacket",
      price: "$38.99",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653659155-0.jpg",
      tag: "",
      name: "Nike Air Zoom",
      price: "$128.99",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653661702-0.jpg",
      tag: "",
      name: "Basic Slim Fit T-Shirt",
      price: "$79.99",
    },
    {
      image: "http://34.253.31.99/site/upload/product_image/1653661507-0.jpg",
      tag: "",
      name: "Nike Tracksuit",
      price: "$99.99",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_DETAIL":
      const detailedProduct = state.dataItem.filter(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        productDetail: detailedProduct[0],
      };

    default:
      return state;
  }
}
