import './LessonList.css';
import React from 'react';
import LessonCard from './LessonCard';

const LessonList = (props) => {
  const images = props.images.map((image) => {
    return <LessonCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default LessonList;
