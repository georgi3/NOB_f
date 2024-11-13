import moeImg from '../assets/moe.jpg'
import masoudImg from '../assets/masoud.jpg'
import miguelImg from '../assets/miguel.webp'
import moussaImg from '../assets/moussa.webp'
import {Link} from "react-router-dom";

const people = [
    {
        name: 'Moe',
        role: 'Senior Barber',
        imageUrl: moeImg,
    },
    {
        name: 'Masoud',
        role: 'Senior Barber',
        imageUrl: masoudImg,
    },
    {
        name: 'Miguel',
        role: 'Senior Barber',
        imageUrl: miguelImg,
    },
    {
        name: 'Moussa',
        role: 'Apprentice',
        imageUrl: moussaImg,
    },
]

export default function ChooseBarber({onSelect}: {onSelect: (selected: string) => void}) {
    return (
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                >
                    {people.map((person) => (
                        <div key={person.name}
                              className="rounded-2xl bg-black px-8 py-10 hover:opacity-90"
                             onClick={() => onSelect(person.name)}
                        >
                            <img alt="" src={person.imageUrl} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                            <p className="text-sm/6 text-gray-400">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

