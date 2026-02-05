import React, { useState } from 'react';
import { Heart, Clock } from 'lucide-react';

// Import components
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import FilterSidebar from './components/FilterSidebar';
import DetailModal from './components/DetailModal';
import CartModal from './components/CartModal';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import EmptyState from './components/EmptyState';
import AddListingModal from './components/AddListingModal';

// Import data and translations
import { translations } from './utils/translations';
import {
  furnitureItems,
  categories,
  categoryHierarchy,
  lookbookScenes,
  featuredCollections,
} from './data/furnitureData';

const FurnitureApp = () => {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('all');
  const [activeSection, setActiveSection] = useState('browse');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 150000,
    material: 'all',
    style: 'all',
    color: 'all',
    room: 'all',
    subcategory: 'all',
    inStockOnly: false,
  });

  const t = translations[language];

  const roomOptions = categoryHierarchy.map((category) => ({
    value: category.key,
    label: language === 'en' ? category.title.en : category.title.ur,
  }));
  const subcategoryOptions = categoryHierarchy.flatMap((category) =>
    category.groups.flatMap((group) => group.items)
  );

  const filterOptions = {
    materials: [...new Set(furnitureItems.map((item) => item.material))],
    styles: [...new Set(furnitureItems.map((item) => item.style))],
    colors: [...new Set(furnitureItems.map((item) => item.color))],
  };

  const filteredItems = furnitureItems.filter((item) => {
    const price = item.type === 'auction' ? item.currentBid : item.price;
    const matchesTab = activeTab === 'all' || item.category === activeTab;

    // Enhanced search: search in name, description, category, material, style, subcategory, and translated names
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch =
      searchQuery.trim().length === 0 ||
      item.name.toLowerCase().includes(searchLower) ||
      item.nameUr.includes(searchQuery.trim()) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      item.material.toLowerCase().includes(searchLower) ||
      item.style.toLowerCase().includes(searchLower) ||
      item.subcategory.toLowerCase().includes(searchLower) ||
      // Also match the translated category names (e.g., "chairs" matches "chair")
      (t[item.category] && t[item.category].toLowerCase().includes(searchLower));

    const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;
    const matchesMaterial = filters.material === 'all' || filters.material === item.material;
    const matchesStyle = filters.style === 'all' || filters.style === item.style;
    const matchesColor = filters.color === 'all' || filters.color === item.color;
    const matchesRoom = filters.room === 'all' || filters.room === item.room;
    const matchesSubcategory =
      filters.subcategory === 'all' || filters.subcategory === item.subcategory;
    const matchesStock = !filters.inStockOnly || item.inStock;

    return (
      matchesTab &&
      matchesSearch &&
      matchesPrice &&
      matchesMaterial &&
      matchesStyle &&
      matchesColor &&
      matchesRoom &&
      matchesSubcategory &&
      matchesStock
    );
  });

  const favoriteItems = furnitureItems.filter((item) => favorites.includes(item.id));
  const recentItems = furnitureItems.filter((item) => recentlyViewed.includes(item.id));
  const newArrivals = furnitureItems.filter((item) => item.isNew);
  const recommendedItems =
    recentlyViewed.length > 0
      ? furnitureItems.filter((item) =>
          recentlyViewed.some((id) => {
            const viewed = furnitureItems.find((viewedItem) => viewedItem.id === id);
            return viewed && viewed.category === item.category;
          })
        )
      : furnitureItems.slice(0, 3);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (itemId) => {
    setCart((prev) => (prev.includes(itemId) ? prev : [...prev, itemId]));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prev) => prev.filter((id) => id !== itemId));
  };

  const cartItems = cart
    .map((id) => furnitureItems.find((item) => item.id === id))
    .filter(Boolean);
  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.type === 'auction' ? item.currentBid : item.price;
    return total + price;
  }, 0);

  const addToRecentlyViewed = (id) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((itemId) => itemId !== id);
      return [id, ...filtered].slice(0, 10);
    });
  };

  const handleViewDetails = (item) => {
    addToRecentlyViewed(item.id);
    setSelectedItem(item);
  };

  const handleShopSale = () => {
    // Scroll to featured items section
    const featuredSection = document.querySelector('#featured-items');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddListing = () => {
    setIsAddListingOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily:
          language === 'ur'
            ? 'Noto Nastaliq Urdu, serif'
            : 'system-ui, -apple-system, sans-serif',
      }}
      dir={language === 'ur' ? 'rtl' : 'ltr'}
    >
      <Header
        language={language}
        onLanguageToggle={() => setLanguage(language === 'en' ? 'ur' : 'en')}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cart={cart}
        favorites={favorites}
        onCartOpen={() => setIsCartOpen(true)}
        t={t}
      />

      {activeSection === 'browse' && (
        <>
          <HeroSection
            language={language}
            t={t}
            newArrivals={newArrivals}
            onItemClick={handleViewDetails}
            onShopSale={handleShopSale}
            onAddListing={handleAddListing}
          />

          <CategoryTabs
            categories={categories}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            t={t}
          />
        </>
      )}

      <div className="mx-auto max-w-7xl px-4 pb-12">
        {activeSection === 'browse' && (
          <>
            <FeaturedCollections collections={featuredCollections} language={language} t={t} />

            <section id="featured-items" className="mb-10 grid gap-6 lg:grid-cols-[1fr,320px]">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{t.featured}</h2>
                </div>
                <ProductGrid
                  items={filteredItems}
                  language={language}
                  t={t}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onViewDetails={handleViewDetails}
                />
              </div>

              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                filterOptions={filterOptions}
                roomOptions={roomOptions}
                subcategoryOptions={subcategoryOptions}
                language={language}
                t={t}
              />
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.recommendations}</h2>
              <ProductGrid
                items={recommendedItems}
                language={language}
                t={t}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
              />
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.newArrivals}</h2>
              <ProductGrid
                items={newArrivals}
                language={language}
                t={t}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
              />
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.lookbook}</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {lookbookScenes.map((scene) => (
                  <div key={scene.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                    <img
                      src={scene.image}
                      alt={language === 'en' ? scene.title.en : scene.title.ur}
                      className="h-60 w-full object-cover"
                    />
                    <div className="space-y-3 p-5">
                      <h3 className="text-lg font-semibold">
                        {language === 'en' ? scene.title.en : scene.title.ur}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {language === 'en' ? scene.description.en : scene.description.ur}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {scene.itemIds.map((id) => {
                          const item = furnitureItems.find((piece) => piece.id === id);
                          if (!item) {
                            return null;
                          }
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleViewDetails(item)}
                              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:bg-gray-200"
                            >
                              {language === 'en' ? item.name : item.nameUr}
                            </button>
                          );
                        })}
                      </div>
                      <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        {t.shopTheLook}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection === 'favorites' && (
          <>
            <h2 className="mb-6 text-2xl font-bold">{t.favorites}</h2>
            {favoriteItems.length > 0 ? (
              <ProductGrid
                items={favoriteItems}
                language={language}
                t={t}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
              />
            ) : (
              <EmptyState icon={Heart} title={t.noFavorites} description={t.noFavoritesDesc} />
            )}
          </>
        )}

        {activeSection === 'recentlyViewed' && (
          <>
            <h2 className="mb-6 text-2xl font-bold">{t.recentlyViewed}</h2>
            {recentItems.length > 0 ? (
              <ProductGrid
                items={recentItems}
                language={language}
                t={t}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
              />
            ) : (
              <EmptyState
                icon={Clock}
                title={t.noRecentlyViewed}
                description={t.noRecentlyViewedDesc}
              />
            )}
          </>
        )}
      </div>

      <DetailModal
        item={selectedItem}
        language={language}
        t={t}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        cartItems={cartItems}
        cartTotal={cartTotal}
        language={language}
        t={t}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
      />

      <AddListingModal
        isOpen={isAddListingOpen}
        language={language}
        t={t}
        onClose={() => setIsAddListingOpen(false)}
      />
    </div>
  );
};

export default FurnitureApp;
