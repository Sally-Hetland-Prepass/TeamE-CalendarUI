import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  const events = [
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
      allDay: false,
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

// const Calendar: React.FC = () => {
//   const [status, setStatus] = useState<"all" | "family" | "mom" | "dad" | "child">("all");

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setStatus(e.target.value as "all" | "family"| "mom" | "dad" | "child");
//   };

//   return (
//     <div className="p-8 bg-gray-50">
//       {/* Dropdown */}
//       <div className="mb-4">
//         <label htmlFor="status" className="mr-2 font-medium">
//           Calendars:
//         </label>
//         <select
//           id="status"
//           value={status}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         >
//           <option value="all">All</option>
//           <option value="family">Family</option>
//           <option value="mom">Mom</option>
//           <option value="dad">Dad</option>
//           <option value="child">Child</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         {/* <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2 text-left">Transponder ID</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">EZ Pass ID</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Assigned Vehicle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data[status].map((item, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">{item.transponderId}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.ezPassId}</td>
//                 <td
//                   className={`border border-gray-300 px-4 py-2 ${
//                     item.assignedVehicle.includes("Unassigned")
//                       ? item.assignedVehicle.includes("30 days")
//                         ? "text-yellow-500"
//                         : "text-red-500"
//                       : ""
//                   }`}
//                 >
//                   {item.assignedVehicle}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}
//       </div>
//     </div>
//   );
// };

export default MyCalendar;
