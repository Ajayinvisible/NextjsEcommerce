function LoadingCard() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        <div className="h-[200px]  bg-gray-300 rounded-t-lg animate-pulse"></div>
      </div>
      <div className="p-5 ">
        <div className="flex gap-2 mb-3">
          <span className="h-[20px] w-1/3 flex-1 bg-green-300 rounded-sm animate-pulse"></span>
          <span className="h-[20px] w-1/3 flex-1 bg-yellow-300 rounded-sm animate-pulse"></span>
        </div>
        <h5 className="h-[32px] bg-gray-300 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate animate-pulse"></h5>
        <h5 className="h-[24px] w-1/3 bg-gray-300 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate animate-pulse"></h5>
        
        <div className="flex gap-2">
          <div className="h-[36px] flex-[3] bg-blue-700 rounded-lg animate-pulse"></div>
          <div className="h-[36px] flex-[1] bg-green-600 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
