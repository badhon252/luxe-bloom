"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WishList } from "@/types/product";
import { Button } from "@/components/ui/button";

interface WishlistCardProps {
  list: {
    id: string;
    name: string;
    products: WishList[];
  };
  onViewList: () => void;
}

export function WishlistCard({ list, onViewList }: WishlistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-medium mb-2">{list.name}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {list.products.length} products
      </p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {list.products.slice(0, 3).map((product) => (
          <div key={product.id} className="aspect-square relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <Button
        onClick={onViewList}
        variant="default"
        className="w-full bg-black text-white hover:bg-black/90"
      >
        VIEW LIST
      </Button>
    </motion.div>
  );
}
