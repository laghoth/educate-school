import React, { useEffect, useState } from "react";

import Menu from "./menu";

function Gallery() {
  const [items, setItems] = useState(Menu);

  useEffect(() => {
    setItems(Menu);
  }, []);

  const filtreItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      if (categItem == "all") {
        return Menu;
      } else {
        return curElem.category === categItem;
      }
    });
    setItems(updatedItems);
  };

  return (
    <div className="gallery-page">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Gallery</h1>
      </div>
      <div className="content-page-gallery">
        <div className="category-links">
          <ul>
            {" "}
            <li onClick={() => filtreItem("all")}>
              <span>All</span>
            </li>
            <li onClick={() => filtreItem("cat1")}>
              <span>category 1</span>
            </li>
            <li onClick={() => filtreItem("cat2")}>
              <span>category 2</span>
            </li>
            <li onClick={() => filtreItem("cat3")}>
              <span>category 3</span>
            </li>
            <li onClick={() => filtreItem("cat4")}>
              <span> category 4</span>
            </li>
          </ul>
        </div>
        <div className="main-border-double"></div>
        <div className="categories-content">
          {/* ////////////////////////// */}
          {items.map((elem) => {
            const { id, image, name, category, price, description } = elem;
            return (
              <div className="category-part">
                <div className="grid-image">
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}

          {/* ////////////////////////// */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
