import React from 'react';

export default function Confirmation({ date, time, barber }: {date: Date | undefined, time: string, barber: string}) {
    return (
        <div className="max-w-md mx-auto bg-black shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-semibold text-white mb-4">Appointment Confirmation</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="font-medium text-white">Date:</span>
                    <span className="ml-2 text-white">{date?.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-white">Time:</span>
                    <span className="ml-2 text-white">{time}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-white">Barber:</span>
                    <span className="ml-2 text-white">{barber}</span>
                </div>
            </div>
            <div className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg font-semibold">
                <p className="text-center">Appointment Confirmed</p>
            </div>
        </div>
    );
};
