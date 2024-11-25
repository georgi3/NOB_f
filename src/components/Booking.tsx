import {useState} from 'react';
import ChooseBarber from "./ChooseBarber";
import BookingSteps from "./BookingSteps";
import ChooseDateTime from "./ChooseDateTime";
import PersonalInfo from "./PersonalInfo";
import Confirmation from './Confirmation';
import {useLocation} from "react-router-dom";
const steps = [
    { id: 1, name: 'Choose Barber', href: '#', status: 'complete' },
    { id: 2, name: 'Choose Date & Time', href: '#', status: 'current' },
    { id: 3, name: 'Enter User Details', href: '#', status: 'upcoming' },
    { id: 4, name: 'Confirmation', href: '#', status: 'upcoming' },
]

export default function Booking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [chosenBarber, setChosenBarber] = useState<string>('');
    const [chosenDate, setChosenDate] = useState<Date | undefined>();
    const [chosenTime, setChosenTime] = useState('');
    const [userDetails, setUserDetails] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const serviceId = queryParams.get('service_id') || '';
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
            {currentStep === 1 && <ChooseBarber onSelect={handleChooseBarber} />}
            {currentStep === 2 && <ChooseDateTime
                barberId={chosenBarber}
                serviceId={serviceId}
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
