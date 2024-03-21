'use client'
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

import 'react-big-calendar/lib/css/react-big-calendar.css';

function CalendarComp(props) {
  const [events, setEvents] = useState([{
    start: moment("2024-03-30T10:00:00").toDate(),
    end: moment("2024-03-30T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-03-22T14:00:00").toDate(),
    end: moment("2024-03-22T15:30:00").toDate(),
    title: "ENT Appointment",
  },]);

  useEffect(() => {
    fetchEvents();
  }, []); // Empty dependency array to ensure it only runs once on component mount

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events'); // Replace '/api/events' with your actual backend endpoint
      setEvents(response.data); // Assuming response.data is an array of events
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 475}}
    />
    </div>
  )
}

export default CalendarComp
