import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import EmptyState from './EmptyState';

const CartModal = ({ isOpen, cartItems, cartTotal, language, t, onClose, onRemoveItem }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{t.cartTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <EmptyState icon={ShoppingCart} title={t.cartEmpty} description={t.cartEmptyDesc} />
        ) : (
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => {
              const itemPrice = item.type === 'auction' ? item.currentBid : item.price;
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={language === 'en' ? item.name : item.nameUr}
                      className="h-20 w-24 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        {language === 'en' ? item.name : item.nameUr}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.type === 'auction' ? t.currentBid : t.price}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        PKR {itemPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-xs font-semibold text-red-500 hover:text-red-600"
                  >
                    {t.remove}
                  </button>
                </div>
              );
            })}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">{t.cartTotal}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  PKR {cartTotal.toLocaleString()}
                </p>
              </div>
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                {t.checkout}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
