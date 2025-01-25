"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductFilters } from "@/components/product-filters";
import { ProductCard } from "@/components/product/product-card";
import { type FilterState, type SortOption } from "@/types/product";
import { PRODUCTS } from "../../../constants/products";
import { Button } from "@/components/ui/button";






const ITEMS_PER_PAGE = 6;

export default function CollectionPage() {
  const [filters, setFilters] = useState<FilterState>({});
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);



  

  // Filter products
  let filteredProducts = [...PRODUCTS];

  if (filters.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === filters.category
    );
  }
  if (filters.color) {
    filteredProducts = filteredProducts.filter((p) =>
      p.colors.some((c) => c.name === filters.color)
    );
  }
  if (filters.vesselMaterial) {
    filteredProducts = filteredProducts.filter(
      (p) => p.vesselMaterial === filters.vesselMaterial
    );
  }
  if (filters.vesselShape) {
    filteredProducts = filteredProducts.filter(
      (p) => p.vesselShape === filters.vesselShape
    );
  }
  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.price >= filters.priceRange![0] && p.price <= filters.priceRange![1]
    );
  }

  // Sort products
  switch (sort) {
    case "price-low-high":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high-low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "best-selling":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Featured sorting - keep original order
      break;
  }

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4 max-w-3xl mx-auto">
        <h1 className="text-2xl lg:text-4xl md:text-5xl font-serif">
          SHOP ALL ETERNITY FLOWERS
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our selection of Eternity® Flower bouquets and luxury flowers:
          real, preserved blooms crafted to last a year or more, bringing
          forever beauty and charm to any space.
        </p>
      </div>

      <div className="flex justify-between items-center mt-8 mb-4">
        <span className="text-sm uppercase tracking-wide">
          {filteredProducts.length} PRODUCTS
        </span>
        <Select
          value={sort}
          onValueChange={(value) => setSort(value as SortOption)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="SORT BY" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="best-selling">Best Selling</SelectItem>
            <SelectItem value="price-low-high">Price: Low - High</SelectItem>
            <SelectItem value="price-high-low">Price: High - Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ProductFilters filters={filters} onFilterChange={setFilters} />
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products go here */}
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button
                variant="outline"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={page === i + 1 ? "default" : "outline"}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
