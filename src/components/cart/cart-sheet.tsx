import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { CartItems } from "./cart-items";
import { CartSummary } from "./cart-summary";
import { RecommendedProducts } from "./recommended-products";

export function CartSheet() {
  const { items } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative w-[30px] lg:w-[45px] ml-2  ">
          <ShoppingBag className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-center font-normal">
                MY CART
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {items.length}
                </span>
              </SheetTitle>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-4">
                <CartItems />
                <RecommendedProducts />
              </div>
              <CartSummary />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
