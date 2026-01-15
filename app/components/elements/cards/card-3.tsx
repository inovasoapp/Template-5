import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Card3() {
  return (
    <Card className="flex flex-col md:flex-row items-center max-w-xl p-6 bg-card hover:bg-accent/5 transition-colors">
      <div className="relative w-full h-64 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-md mb-4 md:mb-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-between w-full md:pl-4 leading-normal">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-foreground hover:underline">
            Streamlining your design process today.
          </h5>
        </Link>
        <p className="mb-6 font-normal text-muted-foreground">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>
        <div>
          <Button asChild variant="outline">
            <Link href="#" className="flex items-center gap-2">
              Read more
              <MoveRight strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
