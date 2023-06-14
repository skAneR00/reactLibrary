import { useDispatch, useSelector } from "react-redux"
import { hideModal } from "../../store/addBookSlice/addBookModalSlice"
import { setBookName, setAuthor, setaAvatar, setPublishingHouse, setYear } from "../../store/addBookSlice/addBookSlice"
import { setAllBooks } from "../../store/allBooksSlice/allBooksSlice"
import { useEffect, useState } from "react"

export default function AddBook() {

    const [bookName, setBookN] = useState("")
    const [author, setBookAuthor] = useState("")
    const [avatar, setBookImage] = useState("")
    const [year, setBookYear] = useState("")
    const [publishingHouse, setBookHouse] = useState("")

    const modalAddBook = useSelector((state) => state.modalAddBook.visible)

    const addBook = useSelector((state) => state.addBook.newBook)
    const allBooks = useSelector((state) => state.allBooks.allBooks)

    const dispath = useDispatch()
    useEffect(() => {
        dispath(setBookName(bookName))
        dispath(setAuthor(author))
        dispath(setaAvatar(avatar))
        dispath(setYear(year))
        dispath(setPublishingHouse(publishingHouse))
        console.log("changed");
    }, [bookName, author, avatar, year, publishingHouse])

    const add = () => {
        fetch('https://642c320fd7081590f934c279.mockapi.io/api/books/books', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addBook)
        }).then(res => {
            if (res.ok) {
                updateBooks()
                alert("Книга была успешно добавлина")
                setBookYear("")
                setBookHouse("")
                setBookImage("")
                setBookN("")
                setBookAuthor("")

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
            {
                modalAddBook ? (
                    <div className='flex justify-center items-center overflow-hidden fixed inset-0 z-50 bg-black bg-opacity-50'>
                        <div className='relative w-auto mx-auto max-w-3xl h-3/4'>
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white'>
                                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
                                    <h3 className='text-2xl font-semibold text-indigo-900'>
                                        Добавить книгу
                                    </h3>
                                    <button className='bg-transparent border-0 text-black float-right'>
                                        <span className='text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full'
                                            onClick={() => dispath(hideModal())}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className='relative flex flex-auto justify-center'>
                                    <div className='h-80 flex'>
                                        <div className='w-[30vw] h-full'>
                                            <div className='h-5/6 flex flex-col gap-5'>
                                                <div className="flex flex-col items-center justify-items-center">
                                                    <label htmlFor="bookName" className="font-light">
                                                        Название книги
                                                    </label>
                                                    <input type='text'
                                                        className='border border-gray-300 p-2 rounded-md text-indigo-900 outline-none text-xs font-light w-56'
                                                        value={bookName}
                                                        id="bookName"
                                                        placeholder="Название книги"
                                                        onChange={(e) => setBookN(e.target.value)}
                                                    />
                                                </div>
                                                
                                                <div className="flex flex-col items-center justify-items-center">
                                                    <label htmlFor="bookAuthor" className="font-light text-left">Автор книги</label>
                                                    <input type='text'
                                                        className='border border-gray-300 p-2 rounded-md text-indigo-900 outline-none text-xs font-light w-56'
                                                        value={author}
                                                        id="bookAuthor"
                                                        placeholder="Имя Ф."
                                                        onChange={(e) => setBookAuthor(e.target.value)}
                                                    />
                                                </div>
                                                
                                                <div className="flex flex-col items-center justify-items-center">
                                                    <label htmlFor="bookYear" className="font-light">Год печати</label>
                                                    <input type='text'
                                                        className='border border-gray-300 p-2 rounded-md text-indigo-900 outline-none text-xs font-light w-56'
                                                        value={year}
                                                        id="bookYear"
                                                        placeholder="Год"
                                                        onChange={(e) => setBookYear(e.target.value)}
                                                    />
                                                </div>
                                                
                                                <div className="flex flex-col items-center justify-items-center">
                                                    <label htmlFor="bookHouse" className="font-light">Название издательства</label>
                                                    <input type='text'
                                                        className='border border-gray-300 p-2 rounded-md text-indigo-900 outline-none text-xs font-light w-56'
                                                        value={publishingHouse}
                                                        id="bookHouse"
                                                        placeholder="Название издательства"
                                                        onChange={(e) => setBookHouse(e.target.value)}
                                                    />
                                                </div>
                                                
                                                <div className="flex flex-col items-center justify-items-center">
                                                    <label htmlFor="bookImage" className="font-light">Фото книги (ссылка)</label>
                                                    <input type='text'
                                                        className='border border-gray-300 p-2 rounded-md text-indigo-900 outline-none text-xs font-light w-56'
                                                        value={avatar}
                                                        id="bookImage"
                                                        placeholder="Ссылка"
                                                        onChange={(e) => setBookImage(e.target.value)}
                                                    />
                                                </div> 

                                                <div className='flex justify-center mt-3'>
                                                    <button className="bg-white rounded-lg h-12 w-[200px] border border-black" onClick={() => {
                                                        if (bookName != "" && author != "" && avatar != "") {
                                                            add()
                                                            console.log("added");
                                                        }
                                                    }}>
                                                        Добавить книгу
                                                    </button>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
                    :
                    null
            }
        </>
    )
}