
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [books , setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState(0);

    useEffect(() => {
        fetchBooks();
    },[])

    const fetchBooks = async  () => {
        try{
            const response  = await fetch("http://127.0.0.1:8000/api/books/");
            const data = await response.json();
            setBooks(data);
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

     const addBook = async () => {
        const bookData = {
            title: title,
            release_date: releaseYear
        }

        try{
            const response  = await fetch("http://127.0.0.1:8000/api/books/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookData)

            });

            const data = await response.json();
            setBooks((prev) => [...prev, data]);


        }catch(err){
            console.log(err);
        }
     }

  return (
   <>
     <h1>Book website</h1>
       <div>
           <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)}/>
           <input type="number" placeholder="Release Year" onChange={(e) => setReleaseYear(e.target.value)}/>
           <button onClick={addBook}>Add Book</button>

           {books.map(book => (
               <div key={book.id}>
                   <p>Title : {book.title}</p>
                   <p>Release date : {book.release_date}</p>
                   <hr style={{ height: 2, backgroundColor: 'red', border: 'none' }} />
               </div>

           ))}

       </div>

   </>
  )
}

export default App
