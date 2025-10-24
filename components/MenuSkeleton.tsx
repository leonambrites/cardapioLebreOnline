import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="flex flex-col sm:flex-row bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
    <div className="w-full sm:w-1/3 h-48 sm:h-auto flex-shrink-0 bg-slate-700 animate-pulse"></div>
    <div className="p-4 sm:p-5 flex flex-col justify-between w-full sm:w-2/3">
      <div>
        <div className="h-6 bg-slate-700 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2 mt-3 animate-pulse"></div>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-slate-700 rounded w-1/3 animate-pulse"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 animate-pulse"></div>
            <div className="w-8 h-8 rounded-full bg-slate-700 animate-pulse"></div>
          </div>
        </div>
        <div className="h-10 bg-slate-700 rounded-lg w-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const MenuSkeleton: React.FC = () => {
  return (
    <>
      {[1, 2].map(i => (
        <section key={i}>
          <div className="text-center mb-8">
            <div className="h-8 bg-slate-700 rounded w-48 mx-auto animate-pulse"></div>
            <div className="h-5 bg-slate-700 rounded w-64 mx-auto mt-3 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </section>
      ))}
    </>
  );
};

export default MenuSkeleton;