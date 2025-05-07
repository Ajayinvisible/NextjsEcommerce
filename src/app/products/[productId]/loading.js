import React from 'react'

function ProductByIdLoading() {
  return (
    <div className="animate-pulse antialiased">
      <div className="py-6">
        <div className="max-w-7xl mx-auto mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              {/* Main image skeleton */}
              <div className="h-64 md:h-[420px] rounded-lg bg-gray-200 mb-4" />

              {/* Thumbnails skeleton */}
              <div className="flex -mx-2 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-1 px-2">
                    <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex-1 px-4 space-y-4">
              {/* Title */}
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              {/* Company name */}
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              {/* Price */}
              <div className="h-10 w-24 bg-gray-200 rounded-lg" />
              {/* Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
                ))}
              </div>
              {/* Brand and Category */}
              <div className="h-4 bg-gray-200 w-1/2 rounded" />
              <div className="h-4 bg-gray-200 w-1/3 rounded" />
              {/* Qty and Buttons */}
              <div className="flex space-x-4 pt-4">
                <div className="w-24 h-14 bg-gray-200 rounded-xl" />
                <div className="h-14 w-32 bg-gray-200 rounded-xl" />
                <div className="h-14 w-32 bg-gray-200 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductByIdLoading