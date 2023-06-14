import { useDispatch, useSelector } from "react-redux"
import { setAllBooks } from "../store/allBooksSlice/allBooksSlice"

export default function DeleteBookItem({ item }) {
    const dispath = useDispatch()

    const allBooks = useSelector((state) => state.allBooks.allBooks)

    const deleteBook = () => {
        fetch(`https://642c320fd7081590f934c279.mockapi.io/api/books/books/${item.id}`, {
            method: 'DELETE',
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
        <div className="flex p-2 text-indigo-900 border-b border-gray-300">
            <div className='flex flex-col w-80 justify-center overflow-hidden'>
                {item.bookName}
                <p className="text-xs text-gray-500">
                    {item.author}
                </p>
            </div>



            <div className='flex w-32 px-4 items-center'>
                <div className='flex border border-indigo-900 rounded-md h-8 w-24 justify-center items-center'>
                    <div className='bg-white text-indigo-900 w-5/6 flex justify-center items-center text-lg hover:cursor-pointer'
                        onClick={() => deleteBook()}
                    >
                        Удалить
                    </div>
                </div>
            </div>
        </div>
    )
}