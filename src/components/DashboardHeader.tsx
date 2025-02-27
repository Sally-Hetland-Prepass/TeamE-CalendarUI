import React from "react";

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold p-4 text-center">{title}</h1>
  );
};

export default DashboardHeader;