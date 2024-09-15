import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export default function Pagination({bg = 'accent'}) {
    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center text-center gap-x-1 justify-center text-sm text-accent2">
                <li className="pr-2">
                    <a href="#"><ChevronLeftIcon className="h-4 w-4"></ChevronLeftIcon></a>
                </li>
                <li>
                    <a href="#" className="block w-8 h-8 leading-[32px] transition-colors duration-100 ease-in-out hover:bg-accent/10 rounded-full">1</a>
                </li>
                <li>
                    <a href="#" className="block w-8 h-8 leading-[32px] transition-colors duration-100 ease-in-out hover:bg-accent/10 rounded-full">2</a>
                </li>
                <li>
                    <a href="#" className={`block w-8 h-8 leading-[32px] bg-${bg} rounded-full text-white`}>3</a>
                </li>
                <li>
                    <a href="#" className="block w-8 h-8 leading-[32px] transition-colors duration-100 ease-in-out hover:bg-accent/10 rounded-full">4</a>
                </li>
                <li>
                    <a href="#" className="block w-8 h-8 leading-[32px] transition-colors duration-100 ease-in-out hover:bg-accent/10 rounded-full">5</a>
                </li>
                <li  className="pl-2">
                    <a href="#"><ChevronRightIcon className="h-4 w-4"></ChevronRightIcon></a>
                </li>
            </ul>
        </nav>
    )
}