import React from 'react';

const CategoryTabs = ({ categories, activeTab, onTabChange, t }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-6">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onTabChange(cat.key)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 transition ${
              activeTab === cat.key
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-gray-700 shadow hover:bg-gray-100'
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span className="font-medium">{t[cat.key]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
