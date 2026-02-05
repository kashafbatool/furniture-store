import React from 'react';

const EmptyState = ({ icon: Icon, title, description }) => (
  <div className="py-20 text-center">
    <Icon className="mx-auto mb-4 h-20 w-20 text-gray-300" />
    <h3 className="mb-2 text-xl font-semibold text-gray-600">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default EmptyState;
