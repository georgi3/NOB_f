import React, { SVGProps} from 'react'
import { Link } from "react-router-dom";
import {JSX} from 'react/jsx-runtime'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.webp'
import video from "../assets/video.mp4"

const services = [
    { name: "Haircut", description: "Professional grooming service for hair trimming, cutting, and styling.", price: "$33" },
    { name: "Haircut Kids", description: "Fun and safe haircuts for children with experienced stylists.", price: "$23" },
    { name: "Haircut Long Hair", description: "Specialized hair care for trimming, styling, and maintaining long hair.", price: "$37" },
    { name: "Haircut & Beard", description: "Expert grooming service for haircuts and beard trims and shaping.", price: "$56" },
    { name: "Beard", description: "Expert trimming, shaping, and grooming for a well-maintained beard.", price: "$23" },
    { name: "Full Set", description: "Full-service haircut and beard trim with rejuvenating face mask treatment.", price: "$65" }
];
const openingHours: { day: string, hours: string }[] = [
    { day: "Monday", hours: "11 am - 6 pm" },
    { day: "Tuesday", hours: "10 am - 8 pm" },
    { day: "Wednesday", hours: "10 am - 8 pm" },
    { day: "Thursday", hours: "10 am - 8 pm" },
    { day: "Friday", hours: "10 am - 8 pm" },
    { day: "Saturday", hours: "10 am - 6 pm" },
    { day: "Sunday", hours: "11 am - 5 pm" },
];

const footerNavigation = {
    openingHours: openingHours,
    social: [
        {
            name: 'Instagram',
            href: '#',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function LandingPage() {
    return (
        <div>
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <div className="h-52" />
                                    <h1 className="text-pretty align-text-bottom text-4xl font-semibold tracking-tight sm:text-7xl text-white sm:text-black ">
                                        Number One Barbershop
                                    </h1>
                                </div>
                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src={img1}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg grayscale"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src={img2}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg grayscale"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src={img3}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg grayscale"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src={img4}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg grayscale"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src={img5}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg grayscale"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 relative">
                    <div className="bg-black opacity-50 inset-0 absolute" />
                    <div className="relative">
                    <div className="mx-auto p-14 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div>
                                <h2 className="text-pretty py-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                    What We Offer
                                </h2>
                                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                    <p className="text-xl/8 text-white">
                                        Experience the ultimate grooming destination at our barbershop. Our skilled barbers are dedicated to providing personalized, relaxing, and stylish services in a welcoming atmosphere. Book your appointment today and feel refreshed, revitalized, and confident.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <video autoPlay loop controls muted className="block w-64 space-y-8 xl:w-80">
                                    <source src={video} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Services section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 relative">
                    <div className="bg-black opacity-80 inset-0 absolute"/>
                    <div className="relative p-14">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Our Services
                            </h2>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {services.map((service) => (
                                <Link key={service.name}
                                   to='/booking'
                                   className="p-4 text-white hover:bg-white hover:text-black">
                                    <p className="font-semibold flex justify-between">
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </p>
                                    <dd className="mt-1">{service.description}</dd>
                                </Link>
                            ))}
                        </dl>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-16 sm:mt-32 bg-black">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">Montreal</h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>1228 Rue Mckay</p>
                            <p>Montreal, QC H3G 2H4</p>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">Working Hours</h3>
                        {footerNavigation.openingHours.map((hours) => (
                            <div key={hours.day}  className="text-white border-l border-gray-200 pl-6">
                                <p className="flex flex-row justify-between">
                                <span className="px-2">{hours.day}</span>
                                <span className="px-2">{hours.hours}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="mt-16 flex justify-center gap-x-10">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-white hover:text-gray-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="h-6 w-6"/>
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-center text-sm/6 text-white">
                        &copy; 2024 Number One Barbershop, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
