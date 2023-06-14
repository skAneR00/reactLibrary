import { useDispatch, useSelector } from "react-redux"
import { showGiveModal } from "../store/giveBookSlice/giveBookModalSlice";
import { setCurrentBook } from "../store/CurrentBookSlice/CurrentBookSlice";

export default function CarouselItem({ item }) {
    const dispath = useDispatch()

    const isTaken = item.isTaken

    const changeStatus = () => {
        fetch(`https://642c320fd7081590f934c279.mockapi.io/api/books/books/${item.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ isTaken: false })
        }).then(res => {
            if (res.ok) {
                updateBooks()
                return res.json();
            }
        })
    }



    const updateBooks = () => {
        fetch('https://642c320fd7081590f934c279.mockapi.io/api/books/books', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(res => {
            dispath(setAllBooks(res))
        })
    }

    return (
        <>
            <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg hover:scale-110 duration-300 hover:duration-300">
                <div className="top">
                    <img
                        className="w-[200px] h-[200px] object-cover p-2"
                        src={item.avatar}
                        alt="img"
                    />
                </div>
                <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                    <div className="title font-semibold text-xs my-1">
                        {item.bookName}
                    </div>
                    <div className="category text-xs font-light my-1">
                        {item.author}
                    </div>

                    {
                        !isTaken ? (
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 " onClick={() => {
                                    dispath(setCurrentBook(item.id))
                                    dispath(showGiveModal())
                                }}>
                                    Выдать кингу
                                </button>
                            </div>
                        ) :
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 " onClick={() => {
                                    changeStatus()
                                    alert("Книга возращена")

                                }}>
                                    Вернуть
                                </button>
                            </div>
                    }


                </div>
            </div>
        </>
    );
}
