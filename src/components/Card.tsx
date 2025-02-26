import React from "react";  

interface CardProps {
    value: number | string;
    title: string;
    tooltip?: string;
  }

  const Card: React.FC<CardProps> = ({ value, title, tooltip }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-blue-600">{value}</h1>
        <p className="text-gray-700 text-lg">
          {title}
          {tooltip && (
            <span className="text-blue-500 cursor-pointer ml-1" title={tooltip}>
              &#x3f;
            </span>
          )}
        </p>
      </div>
    );
  };
  
  export default Card;