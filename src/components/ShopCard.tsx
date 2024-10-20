interface Props {
    title: string;
    description: string;
    price: number;
    image: string;
}

export default function ShopCard({ title, description, price, image }: Props) {
    return (
        <div className="group relative overflow-hidden rounded-lg">
            <a href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View product</span>
            </a>
            <img
                src={image}
                alt={title}
                width={400}
                height={400}
                className="w-full h-60 object-cover group-hover:opacity-50 transition-opacity"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-base font-semibold">${price}</span>
                    <div className="btn btn-outline opacity-0 group-hover:opacity-100 transition-opacity">
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    );
}