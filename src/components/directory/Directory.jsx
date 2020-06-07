import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySections } from "../../redux/directory-utils";

const Directory = ({ directory }) => {
  return (
    <>
      <div className="directory-menu">
        {directory.map(({ title, imageUrl, id, size, link }) => (
          <MenuItem
            key={id}
            title={title}
            image={imageUrl}
            size={size}
            link={link}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
