import React, { useState } from 'react';
import API from '../../API.jsx';
import StarRatingInput from '../StarRatingInput.jsx';
import Rating from '../Rating.jsx';

const DescriptionBox = ({ product, refetch }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loadingReview, setLoadingReview] = useState(false);

  // Get user info from localStorage
  let userInfo = null;
  try {
    const stored = localStorage.getItem('user') || localStorage.getItem('userInfo');
    if (stored) {
      userInfo = JSON.parse(stored);
    }
  } catch { }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoadingReview(true);
    try {
      await API.post(
        `/product/${product._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: {
            Authorization: userInfo?.token ? `Bearer ${userInfo.token}` : undefined,
          },
        }
      );
      setRating(0);
      setComment('');
      if (refetch) refetch();
    } catch (error) {
      // Optionally handle error
    }
    setLoadingReview(false);
  };

  return (
    <div className="px-20">
      {/* <div className="flex">
        <div className="p-5 border text-lg font-medium text-gray-600">
          <h1>Description</h1>
        </div>
      </div>
      <div className="w-2/3 p-5 border">
        <p className="text-justify">{product.description}</p>
      </div> */}

      {/* === Reviews Section === */}
      <div className="mt-10 w-2/3 border p-5">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {product.reviews?.length === 0 && (
          <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
            No Reviews
          </div>
        )}
        {product.reviews?.map((review) => (
          <div key={review._id} className="border-b border-gray-200 py-3">
            <strong>{review.name}</strong>
            <p className="text-sm text-gray-500">{review.createdAt?.substring(0, 10)}</p>
            <Rating value={review.rating} />
            <p>{review.comment}</p>
          </div>
        ))}

        {/* === Submit Review === */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Write a Customer Review</h3>
          {loadingReview && <p>Loading...</p>}
          {userInfo ? (
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Rating</label>
                <StarRatingInput rating={rating} setRating={setRating} />
              </div>
              <div>
                <label className="block font-medium mb-1">Comment</label>
                <textarea
                  required
                  rows="3"
                  className="w-full border rounded px-3 py-2"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loadingReview}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="bg-blue-100 text-blue-800 p-3 rounded">
              Please <a href="/login" className="text-blue-600 underline">sign in</a> to write a review.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;