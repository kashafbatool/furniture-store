import React from 'react';
import { X, Phone } from 'lucide-react';

const DetailModal = ({ item, language, t, onClose, onAddToCart }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <img
              src={item.image}
              alt={language === 'en' ? item.name : item.nameUr}
              className="h-72 w-full rounded-xl object-cover"
            />
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-700">{t.dimensions}:</span>{' '}
                {item.dimensions}
              </p>
              <p>
                <span className="font-semibold text-gray-700">{t.material}:</span>{' '}
                {item.material}
              </p>
              <p>
                <span className="font-semibold text-gray-700">{t.style}:</span> {item.style}
              </p>
              <p>
                <span className="font-semibold text-gray-700">{t.color}:</span> {item.color}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {language === 'en' ? item.name : item.nameUr}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {item.type === 'auction' ? t.currentBid : t.price}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  PKR{' '}
                  {item.type === 'auction'
                    ? item.currentBid.toLocaleString()
                    : item.price.toLocaleString()}
                </p>
                {item.endsIn && (
                  <p className="mt-1 text-xs text-red-600">
                    {t.endsIn}: {item.endsIn}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  {item.inStock
                    ? language === 'en'
                      ? 'Available for delivery'
                      : 'ترسیل دستیاب ہے'
                    : language === 'en'
                      ? 'Made to order'
                      : 'آرڈر پر دستیاب'}
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{item.vendor}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {item.deliveryOptions?.pickup && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                      {t.inStorePickup}
                    </span>
                  )}
                  {item.deliveryOptions?.delivery && (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-green-700">
                      {t.homeDelivery}{' '}
                      {item.deliveryOptions.deliveryFee === 0
                        ? `(${t.free})`
                        : `(PKR ${item.deliveryOptions.deliveryFee})`}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {t.nextSteps}
                </p>
                <div className="mt-3 grid gap-2 text-sm text-gray-700">
                  <button
                    type="button"
                    onClick={() => onAddToCart(item.id)}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
                  >
                    {t.addToCart}
                  </button>
                  <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                    {item.type === 'auction' ? t.placeBid : t.buyNow}
                  </button>
                  <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                    {t.scheduleVisit}
                  </button>
                  <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                    {t.contact}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
