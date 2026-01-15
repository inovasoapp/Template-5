import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Card2() {
  return (
    <Card className="max-w-sm overflow-hidden shadow-sm pt-0">
      <Link href="#" className="block relative w-full h-[200px]">
        <Image
          src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardContent className="p-6 text-center">
        <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary text-xs font-medium px-2.5 py-1 rounded-sm mb-4">
          <svg
            className="w-3 h-3 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          Trending
        </span>
        <Link href="#">
          <h5 className="mb-6 text-2xl font-semibold tracking-tight hover:underline">
            Streamlining your design process today.
          </h5>
        </Link>
        <Button asChild variant="outline">
          <Link href="#">
            Read more
            <MoveRight strokeWidth={2} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
