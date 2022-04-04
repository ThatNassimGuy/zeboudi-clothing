import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collectionPreview/collection-preview.component";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}>
        {" "}
      </CollectionPreview>
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview);