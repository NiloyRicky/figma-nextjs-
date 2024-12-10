import React from "react";
import "./MainProduct.css";

function MainProduct() {
  return (
    <div className="main_products">
      <div className="main_products_title">
        <p className="main_articles">Ces produits pourraient vous intéresser</p>
        <p className="main_collection">Voir toute la collection</p>
      </div>

      <div className="main_products_images">
        
        <div className="color_table">
          <div className="heart">
            <div className="heart_img">
              <img src="./images/heart.png" />
            </div>
            <div className="heart_para">
              <p>Art de la table</p>
            </div>
          </div>
          <div className="table">
            <img src="./images/Table.png" />
          </div>

          <div className="table_des">
            <div className="table_title">
              <div style={{ width: "283px", height: "30px" }}>
                <p className="zero_title">Title</p>
              </div>
              <div style={{ width: "27px", height: "30px" }}>
                <p className="zero_euro">0€</p>
              </div>
            </div>

            <div className="table_price">
              <div className="prices">
                <p className="table_price_p">0,35€/Pièce · RÉF : VABGN5</p>
              </div>
              <div className="table_pieces">
                <p className="pieces">20 pièces</p>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="color_table">
          <div className="heart">
            <div className="heart_img">
              <img src="./images/heart.png" />
            </div>
            <div className="heart_para">
              <p>Art de la table</p>
            </div>
          </div>
          <div className="table">
            <img src="./images/Table.png" />
          </div>

          <div className="table_des">
            <div className="table_title">
              <div style={{ width: "283px", height: "30px" }}>
                <p className="zero_title">Title</p>
              </div>
              <div style={{ width: "27px", height: "30px" }}>
                <p className="zero_euro">0€</p>
              </div>
            </div>

            <div className="table_price">
              <div className="prices">
                <p className="table_price_p">0,35€/Pièce · RÉF : VABGN5</p>
              </div>
              <div className="table_pieces">
                <p className="pieces">20 pièces</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="color_table">
          <div className="heart">
            <div className="heart_img">
              <img src="./images/heart.png" />
            </div>
            <div className="heart_para">
              <p>Art de la table</p>
            </div>
          </div>
          <div className="table">
            <img src="./images/Table.png" />
          </div>

          <div className="table_des">
            <div className="table_title">
              <div style={{ width: "283px", height: "30px" }}>
                <p className="zero_title">Title</p>
              </div>
              <div style={{ width: "27px", height: "30px" }}>
                <p className="zero_euro">0€</p>
              </div>
            </div>

            <div className="table_price">
              <div className="prices">
                <p className="table_price_p">0,35€/Pièce · RÉF : VABGN5</p>
              </div>
              <div className="table_pieces">
                <p className="pieces">20 pièces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;