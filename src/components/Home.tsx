import React from "react";  
import Card from "./Card";
import MyCalendar from "./MyCalendar";
import DashboardHeader from "./DashboardHeader";

const Home: React.FC = () => {
    return (
    <>
        <div className="p-8">
            <div className="bg-gray pb-6">
              <DashboardHeader title="Team E Hackathon Calendar" />
            </div>
            <MyCalendar/>
        </div>
    </>
    );
};

export default Home;