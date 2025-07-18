'use client';

import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'MAK Security is reliable and responsive. Their guards are professional and well-trained.',
  },
  {
    name: 'David T.',
    text: 'Great customer service and attention to detail. Highly recommended!',
  },
  {
    name: 'Rachel P.',
    text: 'Very impressed with their real-time tracking and quick response.',
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Excellent ★★★★★ Based on Google Reviews</h2>
        <p className="text-gray-700 mb-10">See what our satisfied customers have to say</p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 text-left"
            >
              <div className="flex gap-1 text-yellow-500 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </div>
              <p className="text-gray-800 italic">{review.text}</p>
              <p className="mt-3 font-semibold text-gray-900">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
