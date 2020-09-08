import './LessonList.css';
import React from 'react';
import LessonCard from './LessonCard';
import Draggable from 'react-draggable';

const LessonList = (props) => {
  const images = props.images.map((image) => {
    return <LessonCard key={image.id} image={image} />;
  });

  return (
    <Draggable>
      <div className="image-list">{images}</div>
    </Draggable>
  );
};

export default LessonList;
