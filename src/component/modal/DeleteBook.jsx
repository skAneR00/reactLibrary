import DeleteBookItem from "../DeleteBookItem"
import { useDispatch, useSelector } from "react-redux"
import { hideModalDelete } from "../../store/deleteBookSlice/deleteBookModalSlice"
import { setAllBooks } from "../../store/allBooksSlice/allBooksSlice"
import { useEffect, useState } from "react"


export default function DeleteBook() {
    const dispath = useDispatch()

    const allBooks = useSelector((state) => state.allBooks.allBooks)


    const modalDeleteBook = useSelector((state) => state.modalDeleteBook.visible)


    return (
        <>
            {
                modalDeleteBook ? (
                    <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-50'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white'>
                                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
                                    <h3 className='text-2xl font-semibold text-indigo-900'>
                                        Удалить кингу
                                    </h3>
                                    <button
                                        className='bg-transparent border-0 text-black float-right'
                                    >
                                        <span className='text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full'
                                            onClick={() => dispath(hideModalDelete())}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className='relative p-6 flex-auto overflow-y-scroll'>
                                    <div className='flex h-96 '>
                                        <div className='w-[35vw] h-auto flex flex-col gap-2'>
                                            {allBooks.map(DeleteBookItemq => {
                                                return (
                                                    <DeleteBookItem item={DeleteBookItemq} key={DeleteBookItemq.id}></DeleteBookItem>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    :
                    null
            }
        </>
    )
}