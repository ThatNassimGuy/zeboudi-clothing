import React from "react";
import "./shop.style.scss";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component"
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/collection.component";

const ShopPage = ({ match }) => ( 
  <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
  </div>
);

export default ShopPage;
