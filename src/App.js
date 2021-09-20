import React, { useState } from 'react';
import './style.css';

const Star = (props) => {
  const { id, rated, hovered, onMouseEnter, onMouseLeave, onClick } = props;
  const ID = id.split('_')[1];
  const rateId = rated.split('_')[1];
  const hoverId = hovered.split('_')[1];
  let fillColor = 'lightgray';
  if (ID <= hoverId || ID <= rateId) fillColor = 'yellow';
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg width="200" height="200">
        <polygon
          points="100,10 40, 198 190,78 10,78 160,198"
          style={{ fill: fillColor }}
        />
      </svg>
    </div>
  );
};
export default function App() {
  const [rated, setRated] = useState('');
  const [hovered, setHovered] = useState('');
  const starId = ['id_1', 'id_2', 'id_3', 'id_4', 'id_5'];
  return (
    <div>
      <h1>Star Rating Component!</h1>
      <div className="star-container">
        {starId.map((id) => (
          <Star
            key={id}
            onMouseEnter={(e) => {
              setRated('');
              setHovered(id);
            }}
            onMouseLeave={(e) => {
              setHovered('');
            }}
            onClick={(e) => {
              if (rated !== '') {
                setRated('');
              } else setRated(id);
            }}
            id={id}
            rated={rated}
            hovered={hovered}
          />
        ))}
      </div>
    </div>
  );
}
