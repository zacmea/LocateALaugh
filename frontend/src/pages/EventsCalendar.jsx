import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';


function EventsCalendar() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${VITE_BASE_URL}/events`)
            .then(response => response.json())
            .then(data => {
                const calendarEvents = data.map(event => ({
                    id: event._id,
                    title: event.title,
                    start: event.dateStartLocalTime,
                    imageUrl: event.imageUrl, // Image URL for the event
                    allDay: true
                }));
                setEvents(calendarEvents);
            })
            .catch(error => console.error('Error loading events:', error));
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

export default EventsCalendar