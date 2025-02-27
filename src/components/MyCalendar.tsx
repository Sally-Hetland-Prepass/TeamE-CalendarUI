import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { Button } from "./ui/button";

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([
    { title: 'event 1', date: '2025-03-01' },
    { title: 'event 2', date: '2025-03-02' }
  ]);

  const handleAddEventClick:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //TODO call set event api
    setEvents([...events, { title: 'event 3', date: new Date().toISOString().split('T')[0] }]);
  };

  return (
    <div>
      <div className="mb-4">
        <Button onClick={handleAddEventClick}>Add Event</Button>
      </div>
      <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      events={events}
    />
    </div>
  );
};
export default MyCalendar;
