import React, { useEffect } from "react";  
import MyCalendar from "./MyCalendar";
import DashboardHeader from "./DashboardHeader";

const Home: React.FC = () => {
    const handleLogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "testuser", password: "password" })
        });
      
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token); // Save token for future API calls
        }
      };
      
    // Call handleLogin when component mounts
    useEffect(() => {
        handleLogin();
        // Empty dependency array means this effect runs once on mount
    }, []);
      
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
