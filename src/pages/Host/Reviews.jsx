import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";

import ReviewsGraph from "../../components/ReviewsGraph";

export default function Reviews() {
  // Example Reviews Data
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section id="host-reviews" className="host-reviews">
      <div className="desktop-layout">
        <div className="host-reviews__main app-padding-inline-default margin-bottom-l">
          <CenteredMaxWidthBox>
            <div className="host-reviews__flexbox">
              <div className="host-reviews__info">
                <h1 className="reviews-heading-primary">Your reviews</h1>
                <p>
                  Last <span>30 days</span>
                </p>
              </div>

              <div className="host-reviews__graph">
                <ReviewsGraph
                  options={{ responsive: true, maintainAspectRatio: false }}
                />
              </div>
            </div>
          </CenteredMaxWidthBox>
        </div>

        <div className="host-reviews__detail">
          <div className="app-padding-inline-default">
            <CenteredMaxWidthBox>
              <div className="host-reviews__list">
                <div className="host-reviews__list-title">
                  <h3 className="reviews-heading-teritary">
                    Reviews ({reviewsData.length})
                  </h3>
                </div>

                <div className="host-reviews__list-items">
                  {reviewsData.map(review => (
                    <div key={review.id} className="host-review">
                      <div className="host-review-content">
                        <div className="host-review-stars">
                          {[...Array(review.rating)].map((_, i) => (
                            <i
                              key={i}
                              className="fa-solid fa-star icon-star"
                            ></i>
                          ))}
                        </div>
                        <div className="host-review-info">
                          <p className="host-review-name">{review.name}</p>
                          <p className="host-review-date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                      </div>
                      <hr className="host-review-hr" />
                    </div>
                  ))}
                </div>
              </div>
            </CenteredMaxWidthBox>
          </div>
        </div>
      </div>
    </section>
  );
}
