import { useState } from "react"
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
  colors?: string[]
}

const products: Product[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: "Product Name",
  price: 34500,
  image: "/placeholder.svg",
  colors: ["#FF0000", "#00FF00", "#0000FF"]
}))

const categories = [
  "All Accessories",
  "Watches",
  "Rings",
  "Anklets",
  "Wrist Studs"
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All Accessories")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <span className="text-primary">Accessories</span>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-4">Accessories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      selectedCategory === category ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Sort By Price</h2>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-20"
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-20"
              />
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Sort By Rating</h2>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <Button key={rating} variant="ghost" className="w-full justify-start">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-muted-foreground"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-muted-foreground text-sm">{rating} Stars & Up</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg border bg-muted relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 flex gap-1">
                  {product.colors?.map((color, i) => (
                    <div
                      key={i}
                      className="h-4 w-4 rounded-full border shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm font-semibold">₦{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}