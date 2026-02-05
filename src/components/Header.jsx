import React from 'react';
import { Search, Heart, Clock, ShoppingCart } from 'lucide-react';

const Header = ({
  language,
  onLanguageToggle,
  activeSection,
  onSectionChange,
  searchQuery,
  onSearchChange,
  cart,
  favorites,
  onCartOpen,
  t,
}) => {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold tracking-wider">{t.appName}</h1>
              <nav className="hidden gap-6 md:flex">
                <button
                  onClick={() => onSectionChange('browse')}
                  className={`transition ${
                    activeSection === 'browse'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t.home}
                </button>
                <button
                  onClick={() => onSectionChange('favorites')}
                  className={`flex items-center gap-2 transition ${
                    activeSection === 'favorites'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Heart className="h-4 w-4" />
                  {t.favorites}
                  {favorites.length > 0 && (
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                      {favorites.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => onSectionChange('recentlyViewed')}
                  className={`flex items-center gap-2 transition ${
                    activeSection === 'recentlyViewed'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  {t.recentlyViewed}
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onLanguageToggle}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium transition hover:bg-gray-200"
              >
                {language === 'en' ? 'اردو' : 'English'}
              </button>
              <button
                onClick={onCartOpen}
                className="relative rounded-lg p-2 transition hover:bg-gray-100"
              >
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="relative mt-4">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              className="w-full rounded-lg bg-gray-50 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      <div className="border-t bg-white md:hidden">
        <div className="flex justify-around py-2">
          <button
            onClick={() => onSectionChange('browse')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'browse' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">{t.home}</span>
          </button>
          <button
            onClick={() => onSectionChange('favorites')}
            className={`relative flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'favorites' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs">{t.favorites}</span>
            {favorites.length > 0 && (
              <span className="absolute right-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {favorites.length}
              </span>
            )}
          </button>
          <button
            onClick={() => onSectionChange('recentlyViewed')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'recentlyViewed' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Clock className="h-5 w-5" />
            <span className="text-xs">{t.recentlyViewed}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
