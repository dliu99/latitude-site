import React from 'react';
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Membership() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="min-w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6  place-items-center px-4 md:px-6 ">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Latitude Pro</h1>
            <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
              The optimal way to buy Latitude products.
            </p>
            <ul className="list-inside list-disc ml-4 text-sm md:text-md">
              <li>Free Shipping</li>
              <li>Track Packages</li>
              <li>Exclusive Deals</li>
            </ul>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-md mt-4 md:mt-8">
              Only $74.99/month. Cancel anytime
            </p>
            <Link to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 md:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Join Now
            </Link>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover w-full max-w-[400px] lg:max-w-full"
          />
        </div>
      </section>
      <section className="min-w-full py-12 md:py-24 lg:py-32 bg-latitude-blue">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 min-w-full place-items-center">
          <div className="space-y-4 text-center">
            <svg className="mx-auto w-24 h-24 md:w-32 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
            <h3 className="text-xl md:text-2xl font-bold">Free Shipping</h3>
            <p className="text-muted-foreground text-base md:text-lg">
              Spend $100+ to unlock free shipping
            </p>
          </div>
          <div className="space-y-4 text-center">
            <svg className="mx-auto w-24 h-24 md:w-32 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"/>
              <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"/>
            </svg>
            <h3 className="text-xl md:text-2xl font-bold">Exclusive Deals</h3>
            <p className="text-muted-foreground text-base md:text-lg">Members-only access to 10% off sitewide</p>
          </div>
        </div>
      </section>
      <section className="min-w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 items-center min-w-full">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Products You'll Love</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground text-sm md:text-base lg:text-xl">
              Discover our curated collection of products exclusively for our members.
            </p>
          </div>
          <div className="mt-12">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((item) => (
                  <CarouselItem key={item}>
                    <Card className="w-full">
                      <CardHeader>
                        <img
                          src="/placeholder.svg"
                          alt="Product"
                          className="w-full h-48 object-cover rounded-t-md"
                        />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <h3 className="text-lg font-bold">Product Name</h3>
                        <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold">$49.99</p>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}