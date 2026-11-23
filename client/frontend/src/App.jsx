
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [books , setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    },[])

    const fetchBooks = async  () => {
        try{
            const response  = await fetch("http://127.0.0.1:8000/api/books/");
            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }


  return (
   <>
     <h1>Book website</h1>
       <div>
           <input type="text" placeholder="Book title"/>
           <input type="number" placeholder="Release date"/>
           <button>Add Book</button>

       </div>

   </>
  )
}

export default App
