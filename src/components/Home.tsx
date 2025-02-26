import React from "react";  
import Card from "./Card";
import MyCalendar from "./MyCalendar";
import DashboardHeader from "./DashboardHeader";

const Home: React.FC = () => {
    return (
        <>
        <div className="bg-gray">
           <DashboardHeader title="Team E Hackathon Calendar" />
        </div>
    <MyCalendar/>
</>
    );
};

export default Home;