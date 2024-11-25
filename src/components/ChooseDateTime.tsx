import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const timeSlots = [
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 AM",
    "12:15 AM",
    "12:30 AM",
    "12:45 AM",
    "1:00 PM",
    "1:15 PM",
    "1:30 PM",
    "1:45 PM",
    "2:00 PM",
    "2:15 PM",
    "2:30 PM",
    "2:45 PM",
    "3:00 PM",
    "3:15 PM",
    "3:30 PM",
    "3:45 PM",
    "4:00 PM",
    "4:15 PM",
    "4:30 PM",
    "4:45 PM",
    "5:00 PM",
    "6:00 PM",
    "6:15 PM",
    "6:30 PM",
    "6:45 PM",
    "7:00 PM",
];
function toDateString(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isPastDate(date: Date) {
    return date.getTime() < new Date().setHours(0, 0, 0, 0); // Disable dates before today
}
async function fetchBlockedDates(barberId: string, serviceId: string){
    const response = await  fetch(`http://127.0.0.1:8000/api/blocked-dates?barber_id=${barberId}&serviceId=${serviceId}`)
    return await response.json();
}
async function  fetchAvailableTimeSlots(date: Date){
    const response = await fetch(`http://127.0.0.1:8000/api/available-time-slots?date=${toDateString(date)}`)
    return await response.json();
}
type ChoseDateTimeProps = {
    chosenDate: Date | undefined,
    setChosenDate: React.Dispatch<React.SetStateAction<Date | undefined>>
    selectedTime: string,
    handleSelectTime: (time: string) => () => void;
    barberId: string;
    serviceId: string;
};
export default function ChooseDateTime({chosenDate, setChosenDate, selectedTime, handleSelectTime, serviceId, barberId}: ChoseDateTimeProps) {
    // const [selectedDate, setSelectedDate] = useState<Date>();
    const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>();
    const [fullyBookedDates, setFullyBookedDates] = useState<string[]>([]);
    // const [selectedTimeSlot, setSelectedTimeSlot] = useState<string[]>();

    useEffect(() => {
        (async() => {
            if (barberId && serviceId){
                const data = await fetchBlockedDates(barberId, serviceId)
                setFullyBookedDates(data);
            }
        })()
    }, [barberId, serviceId]);

    useEffect(() => {
        (async () => {
            if (chosenDate){
                const data = await fetchAvailableTimeSlots(chosenDate);
                setAvailableTimeSlots(data);
            }
        })()
    }, [chosenDate])
    function isFullyBooked(date: Date) {
        return fullyBookedDates.some(
            (bookedDate: string) => {
                return bookedDate === toDateString(date);
            });
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 py-14 ">
            <div className="flex items-center justify-center text-white">
                <div className='relative w-11/12 h-96'>
                    <div className="bg-black  opacity-90 inset-0 absolute"/>
                    <div className="flex items-center justify-center">
                        <DayPicker
                            mode="single"
                            selected={chosenDate}
                            onSelect={setChosenDate}
                            styles={{
                                day: {color: 'white'},
                                caption: {color: 'white'},
                                week: {color: 'white'},
                                month: {color: 'white'}
                            }}
                            disabled={[
                                isPastDate,
                                isFullyBooked
                            ]}
                        />
                    </div>
                </div>
            </div>
            {
                chosenDate && (
                    <div className="flex items-center justify-center text-white my-12 sm:my-0">
                        <div className="relative w-11/12">
                            <div className="bg-black opacity-90 inset-0 absolute"/>
                            <div className="relative">
                                <div className="flex items-center justify-center overflow-y-scroll h-96">
                                    <div className="py-14 px-4">
                                        <div className="grid grid-cols-4 gap-4"> {/* Add overflow-y-scroll and a height */}
                                            {timeSlots.map((time, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={handleSelectTime(time)}
                                                            className="p-4 border border-gray-300 rounded-md flex justify-center items-center font-semibold text-white"
                                                        >
                                                            {time}
                                                        </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}