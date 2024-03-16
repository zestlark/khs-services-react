import React from 'react';

const reviews = [
  {
    rating: 5,
    title: 'Best UI',
    description: 'The color combination is good',
    by: 'Akash',
    email: 'unknownf331@gmail.com'
  },
  {
    rating: 5,
    title: 'Best services',
    description: 'Best services are provided khs',
    by: 'Pagare karuna',
    email: 'pagarekaruna380@gmail.com'
  },
  {
    rating: 5,
    title: 'Well trained staff and good work',
    description: 'We loved the work done by khs',
    by: 'Sanket pagare',
    email: 'spagare098@gmail.com'
  },
  {
    rating: 5,
    title: 'Awesome management',
    description: 'I loved the work done by the KHS services "word on mouth"',
    by: 'Deepak kanojiya',
    email: 'kanojiyadeepak747@gmail.com'
  }
];

const Review = () => {
  return (
    <div id="review" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">Review</div>

        <div className="review-box">
          {reviews.map((review, index) => (
            <div className="box" data-aos="fade-up" key={index}>
              <div className="stars" data-rating={review.rating} data-aos="fade-up">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>

              <h3>{review.title}</h3>

              <p>{review.description}</p>

              <p><small>by - </small> <i>{review.by}</i></p>
            </div>
          ))}
        </div>

        {/* <div className="btn-box" data-aos="fade-up">
          <button onClick={() => gotoHref('./review')}>View all reviews</button>
          <button onClick={() => gotoHref('./review/new.html')}>Give a review</button>
        </div> */}
      </div>
    </div>
  );
};

function gotoHref(url) {
  window.location.href = url;
}

export default Review;
