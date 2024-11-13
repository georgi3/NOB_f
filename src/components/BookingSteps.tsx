import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
    { id: 1, name: 'Choose Barber', status: 'complete' },
    { id: 2, name: 'Choose Date & Time', status: 'current' },
    { id: 3, name: 'Enter User Details', status: 'upcoming' },
    { id: 4, name: 'Confirmation', status: 'upcoming' },
]

export default function BookingSteps({active, setActive}: {active: number, setActive:  React.Dispatch<React.SetStateAction<number>>}) {
    const handleOnClick = (id: number) => () =>  {
        setActive(id);
    }
    return (
        <nav aria-label="Progress">
            <ol role="list" className="divide-y bg-black divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className="relative md:flex md:flex-1">
                        {step.id < active ? ( // status: complete
                            <div onClick={handleOnClick(step.id)} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-white">{step.name}</span>
                </span>
                            </div>
                        ) : step.id === active ? ( // status: current
                            <div onClick={handleOnClick(step.id)} aria-current="step" className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-white">{step.id}</span>
                </span>
                                <span className="ml-4 text-sm font-medium text-white">{step.name}</span>
                            </div>
                        ) : (
                            <div onClick={handleOnClick(step.id)} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
                            </div>
                        )}

                        {stepIdx !== steps.length - 1 ? (
                            <>
                                {/* Arrow separator for lg screens and up */}
                                <div aria-hidden="true" className="absolute right-0 top-0 hidden h-full w-5 md:block">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 22 80"
                                        preserveAspectRatio="none"
                                        className="h-full w-full text-gray-300"
                                    >
                                        <path
                                            d="M0 -2L20 40L0 82"
                                            stroke="currentcolor"
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    )
}