import React from 'react';

const FilterSidebar = ({
  filters,
  onFiltersChange,
  filterOptions,
  roomOptions,
  subcategoryOptions,
  language,
  t,
}) => {
  const handleResetFilters = () => {
    onFiltersChange({
      minPrice: 0,
      maxPrice: 150000,
      material: 'all',
      style: 'all',
      color: 'all',
      room: 'all',
      subcategory: 'all',
      inStockOnly: false,
    });
  };

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold">{t.categoriesMenu}</h3>
        <div className="mt-4 space-y-4 text-sm text-gray-600">
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.room}
            <select
              value={filters.room}
              onChange={(event) =>
                onFiltersChange({ ...filters, room: event.target.value })
              }
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="all">{language === 'en' ? 'All rooms' : 'تمام کمرے'}</option>
              {roomOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.subcategory}
            <select
              value={filters.subcategory}
              onChange={(event) =>
                onFiltersChange({ ...filters, subcategory: event.target.value })
              }
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="all">
                {language === 'en' ? 'All subcategories' : 'تمام ذیلی زمرہ'}
              </option>
              {subcategoryOptions.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{t.filters}</h3>
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            {language === 'en' ? 'Reset' : 'ری سیٹ'}
          </button>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {t.priceRange}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  {language === 'en' ? 'Min' : 'کم از کم'}
                </label>
                <input
                  type="number"
                  min="0"
                  max="150000"
                  value={filters.minPrice}
                  onChange={(event) =>
                    onFiltersChange({
                      ...filters,
                      minPrice: Math.min(Number(event.target.value), filters.maxPrice),
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                  placeholder="0"
                />
              </div>
              <span className="text-gray-400 mt-5">-</span>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  {language === 'en' ? 'Max' : 'زیادہ سے زیادہ'}
                </label>
                <input
                  type="number"
                  min="0"
                  max="150000"
                  value={filters.maxPrice}
                  onChange={(event) =>
                    onFiltersChange({
                      ...filters,
                      maxPrice: Math.max(Number(event.target.value), filters.minPrice),
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                  placeholder="150000"
                />
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">
              PKR {filters.minPrice.toLocaleString()} - PKR {filters.maxPrice.toLocaleString()}
            </div>
          </div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.material}
            <select
              value={filters.material}
              onChange={(event) =>
                onFiltersChange({ ...filters, material: event.target.value })
              }
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="all">{language === 'en' ? 'All materials' : 'تمام مواد'}</option>
              {filterOptions.materials.map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.style}
            <select
              value={filters.style}
              onChange={(event) =>
                onFiltersChange({ ...filters, style: event.target.value })
              }
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="all">{language === 'en' ? 'All styles' : 'تمام انداز'}</option>
              {filterOptions.styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.color}
            <select
              value={filters.color}
              onChange={(event) =>
                onFiltersChange({ ...filters, color: event.target.value })
              }
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="all">{language === 'en' ? 'All colors' : 'تمام رنگ'}</option>
              {filterOptions.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={(event) =>
                onFiltersChange({
                  ...filters,
                  inStockOnly: event.target.checked,
                })
              }
              className="h-4 w-4 rounded border-gray-300 text-blue-600"
            />
            {t.inStockOnly}
          </label>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
