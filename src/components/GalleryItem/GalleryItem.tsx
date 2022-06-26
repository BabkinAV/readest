import React, { FC } from 'react';
import  dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { StyledGalleryItem } from './GalleryItem.styles';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';
import emptyCover from '../../assets/images/emptyCover_sm.png';

type GalleryItemProps = {
  key: number;
  id: number;
  title: string;
  author: string;
  rating: number;
  isbn13: number;
  readDate: string;
};

const GalleryItem: FC<GalleryItemProps> = ({
  id,
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
          
          <Link to={`/book/${id}`}>
            <img
              src={`https://covers.openlibrary.org/b/isbn/${isbn13}-M.jpg?default=false`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=emptyCover;
              }}
              alt={`${title} cover`}
            />
          </Link>
          
        </div>
        <div className="gallery-item__title">
          <span>
            {title.length > 22 ? `${title.substring(0, 22)}...` : title}
          </span>
        </div>
        <div className="gallery-item__author">
          <span>{author}</span>
        </div>
          <StarRating rating={rating}/>
        <div className="gallery-item__readDate">
          <span>Read date: {dayjs(readDate).format('DD.MM.YYYY')}</span>
        </div>
      </div>
    </StyledGalleryItem>
  );
};

export default GalleryItem;
