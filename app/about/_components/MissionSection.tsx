import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MissionSection() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-xl sm:text-2xl font-semibold">
          Наша миссия
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm sm:text-base md:text-lg text-primary/80 mb-6">
          Мы стремимся создать самую полную и удобную платформу для изучения
          мемов как культурного феномена современного интернета. Наша цель —
          помочь исследователям, маркетологам и просто любителям мемов лучше
          понимать тренды и закономерности в этой быстро меняющейся сфере.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button variant="default" asChild>
          <Link href="/stats">
            <span className="text-xs sm:text-sm md:text-base flex items-center">
              Исследовать статистику{" "}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
