import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";

async function fetchQualifiedBarbers(serviceId: string) {
    const response = await fetch(`http://127.0.0.1:8000/api/qualified-barbers?service_id=${serviceId}`);
    return await response.json();
}
type QualifiedBarbersI = {
    id: number;
    name: string;
    profile_image: string;
    position: string;
}
export default function ChooseBarber({onSelect}: {onSelect: (selected: string) => void}) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const serviceId = queryParams.get('service_id') || '';
    const [qualifiedBarbers, setQualifiedBarbers] = useState<QualifiedBarbersI[]>();

    useEffect(() => {
        (async() => {
            const data = await fetchQualifiedBarbers(serviceId);
            setQualifiedBarbers(data);
        })()
    }, [serviceId]);
    return (
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                >
                    {qualifiedBarbers && qualifiedBarbers.map((barber) => (
                        <div key={barber.id}
                              className="rounded-2xl bg-black px-8 py-10 hover:opacity-90"
                             onClick={() => onSelect(barber.id.toString())}
                        >
                            <img alt="" src={barber.profile_image} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{barber.name}</h3>
                            <p className="text-sm/6 text-gray-400">{barber.position}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

