import React from 'react';
import PropTypes from 'utils/propTypes';

import { Media } from 'reactstrap';

import { AiFillNotification } from "react-icons/ai";

const AnnouncementMedia = ({ id, title, content, onActive, ...restProps }) => {
  return (
    <Media {...restProps} onClick={() => {onActive(id)}}>
      <Media left>
        <AiFillNotification className={"m-r-10"} size={35}></AiFillNotification>
      </Media>
      <Media body className="overflow-hidden">
        <Media heading tag="h6" className="text-truncate">
          {title}
        </Media>
        <p className="text-muted text-truncate">{content}</p>
      </Media>
    </Media>
  );
};

AnnouncementMedia.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default AnnouncementMedia;
