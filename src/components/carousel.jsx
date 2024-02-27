import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "../service/ProductService";
import AOS from "aos";

export default function MainSlide() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  useEffect(() => {
    // Call AOS.refresh() every 10 seconds
    const intervalId = setInterval(() => {
      AOS.refresh();
    }, 10000);

    // Clean up function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // const App = () => {};

  const changeSlide = (event) => {
    AOS.refresh();
  };

  const productTemplate = (product) => {
    // Function to chunk the items array into arrays of a specified size
    const chunkArray = (array, size) => {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
      }
      return chunkedArray;
    };

    // Chunk the items array into arrays of size 3
    const chunkedItems = chunkArray(product.description, 3);

    const backgroundImageUrl = "url(" + `/icciu_pics/${product.image}` + ")";
    const overlayStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      marginBottom: "5px",
      padding: "1%",
      // width: "100%",
      // height: "100%",
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
    };

    return (
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          height: "100vh", // vh units for height of the window
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "0%",
            margin: "2%",
          }}
        >
          <div
            data-aos="fade"
            data-aos-delay="1050"
            data-aos-duration="1000"
            style={overlayStyle}
          >
            <div>
              <h4 className="mb-1 text-white">{product.name}</h4>
              <div style={{ display: "flex" }}>
                {chunkedItems.map((column, columnIndex) => (
                  <div key={columnIndex} style={{ flex: 1, margin: "0 10px" }}>
                    <ul>
                      {column.map((item, index) => (
                        <li
                          data-aos="fade-up-right"
                          data-aos-delay={`${index * 1000}`}
                          data-aos-duration="1000"
                          className=" mb-1 text-white"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* <h6 className="mt-0 mb-3 text-white">${product.price}</h6> */}
              {/* <Tag
              value={product.inventoryStatus}
              severity={getSeverity(product)}
            ></Tag>
            <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
              <Button icon="pi pi-search" rounded />
              <Button icon="pi pi-star-fill" rounded severity="success" />
            </div> */}
            </div>
          </div>
          <a href={product.category}>
            <Button severity="success">{product.inventoryStatus}</Button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Carousel
        value={products}
        numVisible={1}
        autoplayInterval={10000}
        circular
        numScroll={1}
        // responsiveOptions={responsiveOptions}
        showIndicators={false}
        showNavigators={false}
        itemTemplate={productTemplate}
        onPageChange={changeSlide}
      />
    </div>
  );
}
