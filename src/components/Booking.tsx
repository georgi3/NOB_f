import {useState} from 'react';
import ChooseBarber from "./ChooseBarber";
import BookingSteps from "./BookingSteps";
import ChooseDateTime from "./ChooseDateTime";
import PersonalInfo from "./PersonalInfo";
import Confirmation from './Confirmation';
const steps = [
    { id: 1, name: 'Choose Barber', href: '#', status: 'complete' },
    { id: 2, name: 'Choose Date & Time', href: '#', status: 'current' },
    { id: 3, name: 'Enter User Details', href: '#', status: 'upcoming' },
    { id: 4, name: 'Confirmation', href: '#', status: 'upcoming' },
]

export default function Booking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [chosenBarber, setChosenBarber] = useState('');
    const [chosenDate, setChosenDate] = useState<Date | undefined>();
    const [chosenTime, setChosenTime] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const goToNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    // const goToPreviousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
    const handleChooseBarber = (barber: string) => {
        setChosenBarber(barber);
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
    const handleTimeSelection = (time: string) => ()  => {
        setChosenTime(time);
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }



    return (
        <div className="py-2 min-h-screen bg-[url('./assets/background.jpg')] bg-cover bg-fixed bg-center">
            <div className="px-14 py-4">
                <BookingSteps active={currentStep} setActive={setCurrentStep}  />
            </div>
            {/* Render based on the current step */}
            {currentStep === 1 && <ChooseBarber onSelect={handleChooseBarber} />}
            {currentStep === 2 && <ChooseDateTime
                chosenDate={chosenDate}
                setChosenDate={setChosenDate}
                selectedTime={chosenTime}
                handleSelectTime={handleTimeSelection}
            />}
            {currentStep === 3 && <PersonalInfo  />}
            {currentStep === 4 && <Confirmation barber={chosenBarber} date={chosenDate} time={chosenTime} />}
        </div>
    )
}
