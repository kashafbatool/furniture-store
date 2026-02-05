import React from 'react';
import { Plus } from 'lucide-react';

const HeroSection = ({ language, t, newArrivals, onItemClick, onShopSale, onAddListing }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">{t.seasonalSale}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            {language === 'en'
              ? 'Refresh your home with curated auction finds.'
              : 'اپنے گھر کو منتخب نیلامی اشیاء سے تازہ بنائیں۔'}
          </h2>
          <p className="mt-3 max-w-xl text-blue-100">
            {language === 'en'
              ? 'Discover premium pieces, limited-time deals, and new arrivals tailored to your taste.'
              : 'پریمیم اشیاء، محدود وقت کی ڈیلز، اور آپ کی پسند کے مطابق نئی آمد دیکھیں۔'}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onShopSale}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow hover:bg-blue-50 transition"
            >
              {t.shopSale}
            </button>
            <button
              onClick={onAddListing}
              className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 hover:border-white hover:text-white transition"
            >
              <Plus className="h-4 w-4" />
              {t.addListing}
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{t.newArrivals}</h3>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              {newArrivals.length} {language === 'en' ? 'items' : 'اشیاء'}
            </span>
          </div>
          <div className="mt-4 space-y-4">
            {newArrivals.slice(0, 3).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onItemClick(item)}
                className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <img
                  src={item.image}
                  alt={language === 'en' ? item.name : item.nameUr}
                  className="h-16 w-20 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {language === 'en' ? item.name : item.nameUr}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.type === 'auction'
                      ? `${t.currentBid} · PKR ${item.currentBid.toLocaleString()}`
                      : `${t.price} · PKR ${item.price.toLocaleString()}`}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
