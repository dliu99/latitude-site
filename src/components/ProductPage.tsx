import React, { useState } from 'react';
import { IconType } from 'react-icons';
import BenefitCard from './BenefitCard';


interface ProductPageProps {
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
  shortDescription: string;
  fullDescription: string;
  benefits: Array<{
    icon: IconType;
    title: string;
  }>;
  relatedProducts: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
  }>;
}

const ProductPage: React.FC<ProductPageProps> = ({
  name,
  price,
  image,
  sizes,
  colors,
  shortDescription,
  fullDescription,
  benefits,
  relatedProducts
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showDescription, setShowDescription] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  // Step 6: Extract sub-components
  const SizeSelector = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Size:</h3>
      <div className="btn-group">
        {sizes.map(size => (
          <button 
            key={size}
            className={`btn ${selectedSize === size ? 'btn-active' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );

  const ColorSelector = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Color:</h3>
      <div className="flex gap-2">
        {colors.map(color => (
          <button 
            key={color}
            className={`btn btn-circle ${selectedColor === color ? 'btn-active' : ''}`}
            style={{ backgroundColor: color.toLowerCase() }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );

  const SubscriptionOptions = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Subscription:</h3>
      <div className="flex flex-col gap-2">
        {['monthly', 'weekly', 'onetime'].map(type => (
          <label key={type} className="flex items-center">
            <input 
              type="radio" 
              name="subscription" 
              className="radio radio-primary" 
              checked={subscriptionType === type}
              onChange={() => setSubscriptionType(type)}
            />
            <span className="ml-2">
              {type === 'onetime' ? 'One-time purchase' : `Subscribe ${type} (Save 30% on shipping)`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  // Function to format description text into paragraphs
  const formatDescription = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  return (
    <div className="container mx-auto px-48 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full rounded-lg shadow-lg" />
        </div>

        <div className="md:w-1/2 py-2 pl-6">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-xl mb-4">${price.toFixed(2)}</p>

          <SizeSelector />
          <ColorSelector />

          <div className="mb-4">
            <button 
              className="btn btn-link"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? 'Hide' : 'Show'} Description
            </button>
            {showDescription && <p className="mt-2">{shortDescription}</p>}
          </div>

          <SubscriptionOptions />

          <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Product Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} icon={benefit.icon} title={benefit.title} />
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Typically Bought With</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map(product => (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <figure><img src={product.image} alt={product.name} /></figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <div className="prose max-w-none">
          {formatDescription(fullDescription)}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;