import React from 'react';

const FeaturedCollections = ({ collections, language, t }) => {
  return (
    <section className="mb-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t.featuredCollections}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={collection.image}
                alt={language === 'en' ? collection.title.en : collection.title.ur}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">
                {language === 'en' ? collection.title.en : collection.title.ur}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? collection.description.en : collection.description.ur}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
