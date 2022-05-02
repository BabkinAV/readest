import React, { FC } from 'react';
import { StyledGalleryItem } from './GalleryItem.styles';

type GalleryItemProps = {
  key: number;
  title: string;
  author: string;
  rating: number;
  isbn13: number;
  readDate: string;
};

const GalleryItem: FC<GalleryItemProps> = ({
  title,
  author,
  rating,
  isbn13,
  readDate,
}) => {
  return (
    <StyledGalleryItem className="gallery-item">
      <div className="gallery-item__wrapper">
        <div className="gallery-item__image">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${isbn13}-M.jpg`}
            alt="book cover"
          />
        </div>
        <div className="gallery-item__title">
          <span>
            {title.length > 22 ? `${title.substring(0, 22)}...` : title}
          </span>
        </div>
        <div className="gallery-item__author">
          <span>{author}</span>
        </div>
        <div className="gallery-item__rating">
          <span>My rating: {rating}</span>
        </div>
        <div className="gallery-item__readDate">
          <span>Read date: {readDate}</span>
        </div>
      </div>
    </StyledGalleryItem>
  );
};

export default GalleryItem;
