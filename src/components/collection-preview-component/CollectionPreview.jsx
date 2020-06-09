import React from "react";
import { connect } from "react-redux";

import "./CollectionPreview.scss";
import PreviewExplore from "../../components/preview-explore/PreviewExplore";

const CollectionPreview = ({ sections }) => (
  <>
    <div>
      {Object.entries(sections).map((collection) => (
        <PreviewExplore {...collection[1]} />
      ))}
    </div>
  </>
);

const mapStateToProps = ({ directory: { sections } }) => ({
  sections,
});

export default connect(mapStateToProps)(CollectionPreview);
