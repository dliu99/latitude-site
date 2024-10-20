import React, { ReactElement } from 'react';

interface BenefitCardProps {
  icon: React.ComponentType | ReactElement;
  title: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 m-2">
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-blue-500">
        {React.isValidElement(icon) ? icon : React.createElement(icon as React.ComponentType, { size: 40 })}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  );
};

export default BenefitCard;