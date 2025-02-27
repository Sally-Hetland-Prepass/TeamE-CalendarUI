import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { Button } from "./ui/button";

// Define a proper type for calendar events
interface CalendarEvent {
  id?: string;
  title: string;
  date?: string;
  start?: string;
  end?: string;
  allDay?: boolean;
}

const MyCalendar: React.FC = () => {

  const [events, setEvents] = useState<CalendarEvent[]>([
    //{ title: 'event 1', date: '2025-03-01' },
    //{ title: 'event 2', date: '2025-03-02' }
  ]);

  const handleAddEventClick:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //TODO call set event api
    setEvents([...events, { title: 'event 3', date: new Date().toISOString().split('T')[0] }]);
  };

  // Fetch events when component mounts
  useEffect(() => {
    fetchProtectedData();
  }, []);

  const fetchProtectedData = async () => {
    const token = localStorage.getItem("token"); // Retrieve token
    
    if (!token) {
      console.log("No token found - Please log in first");
      return;
    }
  
    try {
      const response = await fetch("/api/CalendarEvents?startDate=2025-02-21T13:23:32Z&endDate=2026-02-21T13:23:32Z", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Attach Bearer token
        }
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log("Protected Data:", data);
        
        // Check if data is an array
        if (Array.isArray(data)) {
          // Create an array to hold all formatted events
          const formattedEvents: CalendarEvent[] = [];
          
          // Loop through each event in the data array
          data.forEach(event => {
            // Create a properly formatted event object
            const calendarEvent: CalendarEvent = {
              id: event.id?.toString(),
              title: event.title || "Untitled Event",
              // FullCalendar can use either 'date' for all-day events or 'start'/'end' for timed events
              start: event.startTime,
              end: event.endTime,
              allDay: !event.startTime || !event.endTime
            };
            
            // If only date is available without time, use the date property instead
            if (event.startTime && !event.startTime.includes('T')) {
              calendarEvent.date = event.startTime;
              delete calendarEvent.start;
              delete calendarEvent.end;
            }
            
            // Add this event to our formatted events array
            formattedEvents.push(calendarEvent);
          });
          
          console.log("Formatted Events:", formattedEvents);
          console.log("Number of events:", formattedEvents.length);
          
          // Update the events state with the formatted events from the API
          // Replace the initial sample events with the actual data from API
          setEvents(formattedEvents);
        } else {
          console.error("API response is not an array:", data);
        }
      } else {
        console.log("Unauthorized - Please log in again");
      }
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    }
  };

  // Debug: Log events whenever they change
  useEffect(() => {
    console.log("Current events state:", events);
    console.log("Number of events in state:", events.length);
  }, [events]);

  return (
    <div>
      <div className="mt-4 mb-4">
        <Button onClick={fetchProtectedData}>Refresh Events</Button>
        <Button onClick={handleAddEventClick} className="ml-2">Add Event</Button>
      </div>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
      />
    </div>
  );
};
export default MyCalendar;
