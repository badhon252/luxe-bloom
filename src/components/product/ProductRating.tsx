"use client";

import { Star } from "lucide-react";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  content: string;
  isVerified: boolean;
  date: string;
  timestamp: number;
  hasMedia?: boolean;
  helpfulVotes?: number;
}

export default function ReviewsSection() {
  const [sortBy, setSortBy] = useState("most-recent");

  const reviews: Review[] = useMemo(
    () => [
      {
        id: 1,
        author: "Michael",
        rating: 5,
        title: "5 Stars",
        content: "It smells great and lasts !! It's beautiful!",
        isVerified: true,
        date: "3 days ago",
        timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
        helpfulVotes: 2,
      },
      {
        id: 2,
        author: "Elizabeth V.",
        rating: 5,
        title: "The Perfect Gift",
        content:
          "The best little engagement gift for a friend! The smell was incredible as was the color of the rose!",
        isVerified: true,
        date: "about 4 years ago",
        timestamp: Date.now() - 4 * 365 * 24 * 60 * 60 * 1000,
        helpfulVotes: 15,
      },
      {
        id: 3,
        author: "Gabriela B.",
        rating: 5,
        title: "The perfect gift",
        content:
          "I ordered these for Mother's Day and bridesmaid proposal! My mom and friends were pleasantly surprised and so happy! They're even more beautiful in person and smell like a dream.",
        isVerified: true,
        date: "5 months ago",
        timestamp: Date.now() - 5 * 30 * 24 * 60 * 60 * 1000,
        hasMedia: true,
        helpfulVotes: 8,
      },
      {
        id: 4,
        author: "Beckie K.",
        rating: 5,
        title: "Love the product, the idea.",
        content:
          "We were in New York visiting and we were in Oculus and this story was beautiful and smelled amazing. I was greeted immediately and was informed of your product and how it works. GENIUS! I purchased a single rose for my best girlfriend who's obsessed with roses.",
        isVerified: true,
        date: "10 months ago",
        timestamp: Date.now() - 10 * 30 * 24 * 60 * 60 * 1000,
        hasMedia: true,
        helpfulVotes: 12,
      },
      {
        id: 5,
        author: "Veronika C.",
        rating: 5,
        title: "Lovely gift I keep giving",
        content:
          "I love surprising people with this gift but I feel that after several orders (I have spent a lot of money on these with your company), you should reward customers with a coupon or something.",
        isVerified: true,
        date: "about 4 years ago",
        timestamp: Date.now() - 4 * 365 * 24 * 60 * 60 * 1000,
        helpfulVotes: 25,
      },
    ],
    []
  );
  const sortedReviews = useMemo(() => {
    const filtered = [...reviews];

    switch (sortBy) {
      case "most-recent":
        return filtered.sort((a, b) => b.timestamp - a.timestamp);
      case "oldest":
        return filtered.sort((a, b) => a.timestamp - b.timestamp);
      case "photos-videos":
        return filtered.filter((review) => review.hasMedia);
      case "highest-rating":
        return filtered.sort(
          (a, b) => b.rating - a.rating || b.timestamp - a.timestamp
        );
      case "lowest-rating":
        return filtered.sort(
          (a, b) => a.rating - b.rating || b.timestamp - a.timestamp
        );
      case "most-helpful":
        return filtered.sort(
          (a, b) => (b.helpfulVotes || 0) - (a.helpfulVotes || 0)
        );
      case "least-helpful":
        return filtered.sort(
          (a, b) => (a.helpfulVotes || 0) - (b.helpfulVotes || 0)
        );
      default:
        return filtered;
    }
  }, [reviews, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20" id="reviews">
      <div className="space-y-4 py-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-serif tracking-wide">REVIEWS</h2>
          <p className="text-sm text-muted-foreground">520 REVIEWS</p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
            ))}
            <span className="ml-2 text-sm">4.8 average rating</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] border-0 border-b-[1px] outline-none shadow-transparent rounded-none">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="photos-videos">Photos & Videos</SelectItem>
              <SelectItem value="highest-rating">Highest Rating</SelectItem>
              <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
              <SelectItem value="most-helpful">Most Helpful</SelectItem>
              <SelectItem value="least-helpful">Least Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <div key={review.id} className="border-t pt-6 flex items-center md:gap-20 gap-5">
              <div className="space-y-1">
                <div className="flex items-start gap-1 mb-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <div className="">
                  <h3 className="font-medium text-nowrap">{review.author}</h3>

                  {review.isVerified && (
                    <p className="text-[8px] text-muted-foreground">
                      VERIFIED BUYER
                    </p>
                  )}
                </div>

                {/* {review.hasMedia && (
                  <div className="mt-2">
                    <span className="text-xs ">
                      Photos & Videos
                    </span>
                  </div>
                )} */}
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
              <p className="text-sm whitespace-pre-line">{review.content}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button className="text-xs hover:underline font-medium text-muted-foreground hover:text-foreground transition-colors">
           <Link href="#"> SHOW MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
