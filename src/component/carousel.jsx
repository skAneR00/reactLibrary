    import CarouselItem from "./carouselItem"
import { useDispatch, useSelector } from "react-redux"
import GiveBook from "./modal/giveBook"
import { useEffect } from "react"

export default function Carousel() {
    const dispath = useDispatch()

    const items = useSelector((state) => state.allBooks.allBooks)

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }



    return (
        <div className="relative">
            <GiveBook></GiveBook>
            <div className="absolute right-0 top-5 ">
                <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>

                </button>
                <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>

                </button>
            </div>
            <div id="content" className="carousel mt-20 p-4 flex items-center justify-start  overflow-x-hidden scroll-smooth  scrollbar-hide">
                {items.map(item => <CarouselItem item={item} key={item.id} />)}

            </div>
        </div>
    );
}
