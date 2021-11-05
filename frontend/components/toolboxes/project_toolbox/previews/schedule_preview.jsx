import React from 'react';

const SchedulePreview = () => {
  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header">Schedule</h1>
      <div className="toolbox-item-body">
        <div className="empty-preview-wrapper">
          <i className="fas fa-calendar-day"></i>
          <p>
            Set important dates on a shared schedule. Subscribe to events in
            Google Cal, iCal, or Outlook.
          </p>
        </div>
      </div>
    </li>
  );
};

export default SchedulePreview;
// {/* <ul className="event-preview-ul">
//   <li className="event-preview-date">
//     <div className="event-preview-title">
//       <i className="fas fa-calendar-day"></i>
//       <h2>Mon, Jan 1</h2>
//     </div>
//     <div className="schedule-preview-date-details">
//       <ul className="event-preview-details">
//         <li>
//           <span>Event title</span>
//           <span className="preview-time">12:00am - 1:00am</span>
//         </li>
//       </ul>
//     </div>
//   </li>
//   <li className="event-preview-date">
//     <div className="event-preview-title">
//       <i className="fas fa-calendar-day"></i>
//       <h2>Tue, Jan 2</h2>
//     </div>
//     <div className="schedule-preview-date-details">
//       <ul className="event-preview-details">
//         <li>
//           <span>Event title</span>
//           <span className="preview-time">12:00am - 1:00am</span>
//         </li>
//         <li>
//           <span>All day event</span>

//         </li>
//       </ul>
//     </div>
//   </li>
// </ul> */}
