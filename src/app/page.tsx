import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

export default function Home() {
  // Mock featured products - will be replaced with database data
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 299,
      salePrice: 199,
      image: '/placeholder-product.jpg',
      rating: 4.5,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Designer Abaya',
      price: 599,
      image: '/placeholder-product.jpg',
      rating: 4.8,
      reviews: 18,
    },
    {
      id: 3,
      name: 'Kids Traditional Outfit',
      price: 189,
      image: '/placeholder-product.jpg',
      rating: 4.6,
      reviews: 12,
    },
    {
      id: 4,
      name: 'Luxury Watch',
      price: 899,
      salePrice: 699,
      image: '/placeholder-product.jpg',
      rating: 4.9,
      reviews: 31,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/10 to-primary/5 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary">
                UAE&apos;s Premier Fashion Destination
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Premium{' '}
                <span className="text-primary">Fashion</span>{' '}
                in UAE
              </h1>
              <p className="text-lg text-muted-foreground">
                From traditional elegance to contemporary style, explore our curated collection 
                of premium clothing for the whole family. Made with the finest materials and 
                crafted to perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/collections">View Collections</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <Image
                src="/placeholder-hero.jpg"
                alt="Fashion Collection"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on orders above AED 500
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                100% secure payment processing
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day hassle-free returns
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Discover our handpicked selection of premium fashion items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.salePrice && (
                      <Badge className="absolute top-2 left-2 bg-primary">
                        {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {product.salePrice ? (
                        <>
                          <span className="text-lg font-bold text-primary">
                            AED {product.salePrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            AED {product.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">
                          AED {product.price}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-primary-foreground/90">
              Subscribe to our newsletter for exclusive offers and latest fashion updates
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white text-black"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
