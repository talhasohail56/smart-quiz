import React, { useEffect, useState } from "react";
import Dashboardview from "../Dashboardview";
import Sidebar from "../Sidebar";
import "./Reviews.css";
function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/user")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="flex overflow-scroll">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border overflow-scroll h-[100vh]">
        <Dashboardview/>
        <h1 className="heading">REVIEWS</h1>
        <div className="reviews-page">
          <ul className="review-list">
            {reviews.map((review) => (
              <li className="review-item" key={review.id}>
                <div className="student-info">
                  <img
                    src={review.Pic}
                    alt="Profile Picture"
                    className="profile-pic"
                  />
                  <div className="student-details">
                    <p className="student-name">{review.Name}</p>
                  </div>
                </div>
                <p className="comment">{review.Review}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
