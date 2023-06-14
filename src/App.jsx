import { useEffect, useState } from 'react'
import AddBook from './component/modal/AddBook'
import { useDispatch, useSelector } from "react-redux"
import { showModal } from './store/addBookSlice/addBookModalSlice'
import { showModalDelete } from './store/deleteBookSlice/deleteBookModalSlice'
import DeleteBook from './component/modal/DeleteBook'
import { setAllBooks } from './store/allBooksSlice/allBooksSlice'
import Carousel from './component/carousel'

export default function App() {
  const modalAddBook = useSelector((state) => state.modalAddBook.visible)
  const books = useSelector((state) => state.allBooks.allBooks)

  useEffect(() => {
    loadDataOnlyOnce();

  }, [])

  const loadDataOnlyOnce = () => {
    fetch('https://642c320fd7081590f934c279.mockapi.io/api/books/books', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(res => {
      dispath(setAllBooks(res))
      console.log(books);
      console.log("Данные обновились");
    })
  }

  const dispath = useDispatch()

  return (
    <>
      <DeleteBook></DeleteBook>
      <AddBook></AddBook>

      <div className="App flex flex-col w-screen h-screen justify-center items-center bg-back gap-24">
        <div className='bg-main w-full h-full rounded-lg flex flex-col '>
          <header className='flex justify-between w-full h-18 gap-3 mt-3'>
            <h1 className='text-black font-extrabold text-5xl flex items-center justify-center mx-5'>BOOKSTORE</h1>
            <div className='flex items-center gap-5 mr-5'>
              <button className="bg-white rounded-lg h-12 w-[200px] border border-black" onClick={() => dispath(showModal())}>
                Добавить книгу
              </button>
              <button className="bg-white rounded-lg h-12 w-[200px] border border-black" onClick={() => dispath(showModalDelete())}>
                Удалить книгу
              </button>
            </div>
          </header>
          <Carousel></Carousel>
        </div>
      </div>
    </>

  )
}

