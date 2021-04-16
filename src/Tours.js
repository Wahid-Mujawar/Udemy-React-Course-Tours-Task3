import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
  return <section>
    <div className="title">
      <h2>Tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tours) => {
        return <Tour key={tours.id} {...tour}></Tour>
      })}
    </div>
    </section>;
};

export default Tours;