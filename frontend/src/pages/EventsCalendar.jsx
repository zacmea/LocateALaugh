import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';
function EventsCalendar() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}events`)
            .then(response => response.json())
            .then(data => {
                const calendarEvents = data.map(event => ({
                    id: event._id,
                    title: event.name,
                    start: event.date,
                    imageUrl: event.imageUrl, // Optional: Image URL for the event
                    allDay: true
                }));
                setEvents(calendarEvents);
            })
            .catch(error => console.error('Error loading events:', error));
        // Function to adjust the calendar header font size
        const adjustHeaderFontSize = () => {
            const calendarHeader = document.querySelector('.fc-toolbar-title');
            if (calendarHeader) {
                if (window.innerWidth < 640) {
                    calendarHeader.style.fontSize = '1rem'; // Tailwind's text-base for small screens
                } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                    calendarHeader.style.fontSize = '1rem'; // Tailwind's text-lg for medium screens
                } else {
                    calendarHeader.style.fontSize = '1.25rem'; // Tailwind's text-xl for large screens
                }
            }
        };
        // Adjust font size initially and on window resize
        adjustHeaderFontSize();
        window.addEventListener('resize', adjustHeaderFontSize);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', adjustHeaderFontSize);
        };
    }, []);
    // Handler for clicking on an event
    const handleEventClick = ({ event }) => {
        // Navigate based on the stored event ID
        navigate(`/artist/${event.id}`, { state: { artist: event } });
    };
    // Custom render function for events with images
    const renderEventContent = (eventInfo) => {
        return (
            <div className="flex flex-row items-center text-sm p-1">
                {eventInfo.event.extendedProps.imageUrl && (
                    <img src={eventInfo.event.extendedProps.imageUrl} alt={eventInfo.event.title} className="w-16 h-16 mb-1 rounded-full" />
                )}
                <p className="font-semibold truncate">{eventInfo.event.title}</p>
            </div>
        );
    };
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent} // Use custom event content rendering
            eventClick={handleEventClick} // Setup the click handler
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            contentHeight="auto"
        />
    );
}
export default EventsCalendar;