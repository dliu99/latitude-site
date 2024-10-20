import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CardButtonProps {
  title: string;
  badgeText?: string;
  description: string[];
  imageSrc: any;
  onClick?: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  badgeText,
  description,
  imageSrc,
  onClick
}) => {
  return (
    <div className="mx-2">
    <button 
      className="w-full max-w-md rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 hover:border hover:border-sky-100 transition-shadow duration-300 overflow-hidden bg-gray-50"
      onClick={onClick}
    >
      <div className="p-4 flex flex-col items-center h-80">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        
        {badgeText? (
          <Badge className="mb-2 bg-sky-200" variant="outline" >
            {badgeText}
          </Badge>
        ) : (
          <span className="invisible ">Placeholder</span>
        )}
        <div
          className="w-full flex items-center justify-center object-cover rounded-b-lg m-6"
        >{imageSrc}</div>

        <ul className="list-disc text-left w-full mb-8 px-10 list-outside ">
          {description.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        
        
      </div>
    </button>
    </div>
  );
};

export default CardButton;