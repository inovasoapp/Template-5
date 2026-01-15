import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Card1() {
  return (
    <Card className="w-sm border border-zinc-500/30">
      <CardHeader className="">
        <div className="aspect-400/180 w-full relative mb-6 overflow-hidden rounded-2xl cursor-pointer">
          <Link href="#">
            <Image
              src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
              width={400}
              height={180}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight hover:underline cursor-pointer">
          <Link href="#">Streamlining your design process today.</Link>
        </CardTitle>
        <CardDescription className="text-base mt-2">
          In hojes fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="">
          <Link href="#" className="flex items-center gap-2">
            Read more
            <MoveRight strokeWidth={2} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
