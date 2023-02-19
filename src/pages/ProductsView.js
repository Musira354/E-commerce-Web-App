import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const ProductsView = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [demoData, setdemoData] = React.useState([]);
  const [pageCount, setpageCount] = React.useState(0);
  const [items, setItems] = React.useState([]); //the items on one page
  const [num, setNum] = [1, 2, 4, 5, 6, 7, 8, 9];

  // const [dataItem, setDataItem] = React.useState([]);
  // const [dataItem2, setDataItem2] = React.useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODFkMmY4OWViYWRjMTAzMTcwZmQyYzg5MmUxOWU1YjExYzMyM2E2YTg5NjAzNDU3NjdkZDBmN2Q5ZTEzMTIyNjJhN2Y2YjZkM2FhM2VjNmIiLCJpYXQiOjE2NTcwODkyNTguNDk1ODczLCJuYmYiOjE2NTcwODkyNTguNDk1ODc4LCJleHAiOjE2ODg2MjUyNTguNDYzNTY4LCJzdWIiOiIyMCIsInNjb3BlcyI6W119.S65e-JJ0IZN-6SDWsM3enY6rjDygflH63Q47Bk_8monFrI-FS83Pd5D3M2z472rSK_xooC7F3z_wUt84fCrVUdCCRDV-qvkM8wzeduOxLID_dAA0KSZKGvhg28dRKXKNLNkwzoVvQ_VEgG-ufRO9ugWwUZADHkbEloR_QVu_AWR2dbT5UIHSULLjJcb2oCNSE5cfg2UT9AtudaWIpIbIxijgUrc1345QQHfmx8f5bdssZ7os21Z4_1x8dEwVN5j-m_UI3DjdRPLbj94mFquMZ44_j6pNTQdOIW_GMn21YZZ2Gil7KfeEIzmyd4wch7VTld52vYsDKe7yiQSaYiKuBvWKZvMK2hS91nowz2ZxAWL5SA9NX9I81w6mPE56EAAFKX2xt6ZYShG6ssLS-J1ErkE6ivyE2P31SS32LQyuy5YHF081m2lhzM9eg1QE_3Wc6zcpE3vVd3PtUIEVtnl3vnng8wQgEshbTFY7cwyqaIXNZ0i1eBi0CLYu7-bsAUW5rubYLlDaHyTsGuVO_7S4HLrnLsyHWhKQhFmw4EieLsHszubg220sPvPlixRfi2NQ6bVtvHaOFcT9JxRc2o05VHY3p3Ja-CeuQelSQZqaBMrfZdQNg_mmb2tFivGFptbcm5GYKrmLDQ01I5ht1BQxYFa791Si6VyO4d0QtnKmbIw";
  const url = "http://34.253.31.99/api/recommended-products-list";
  axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;

  const dataItem2 = [
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
  ];

  const dataItem = [
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
  ];
  const tokenPayload = () => {
    axios
      .post(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log("arra", data);
        console.log("res", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    tokenPayload();
    setItems(dataItem);
    window.scrollTo(0, 0);
  }, []);

  const getObjects = async (currentPage) => {
    var page = currentPage + 1;
    var end = 12;
    var start = currentPage;

    var objects = [];
    console.log("page", currentPage);
    console.log("end", end);
    for (let step = start; step < end + 1; step++) {
      // Runs 5 times, with values of step 0 through 4.
      console.log("Walking east one step");
      objects.push(dataItem[step]);
      console.log(dataItem[step]);
    }
    dataItem = objects;

    console.log("objects", objects);
    setData(objects);
    console.log("data", data);

    return objects;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;
    console.log("page number", currentPage);
    if (currentPage == 2) {
      setItems(dataItem2);
      window.scrollTo(0, 0);
    }
    if (currentPage == 1) {
      setItems(dataItem);
    }

    // scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div class="productsSection">
        <div class="productSectionHeader">
          <div>
            <span class="type">Men's Tops</span>
            <span class="number">(113)</span>
          </div>

          <div class="itemLimit">
            <div class="text">Show Products:</div>
            <select className="collectionCardBtn">
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="productCardSpacing">
          <Row gutter={[48,48]} >
            {items.map((product) => (
              <Col xxl={3} xl={4} lg={4} md={4} sm={4} xs={12}>
                <div className="productCard">
                  <span>00</span>
                  <img
                    className="productCardImg"
                    src={product.image}
                    alt=""
                    onClick={() => navigate(`/${product.id}/product-detail`)}
                  />

                  <div className="productCardFooter">
                    <div className="productCardHeadingWrap">
                      <span className="productCardHeading">{product.name}</span>
                      <span className="cart">
                        <ShoppingCartOutlinedIcon />
                      </span>
                    </div>

                    <p className="productCardText">{ product.price}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          <ReactPaginate
            previousLabel={"PREVIOUS"}
            nextLabel={"NEXT"}
            breakLabel={"..."}
            pageCount={3}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </Row>
      </div>
    </div>
  );
};

export default ProductsView;
