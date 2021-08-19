import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

 
var username = prompt("ENTER THE POC NAME");

const App = () => {
  const [notes, setNotes] = useState([
    {
       id: nanoid(),
       text: "This is my first note!",
       date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "10/04/2021"
},
{
  id: nanoid(),
  text: "This is my third note!",
  date: "16/04/2021"
},
{
  id: nanoid(),
  text: "This is my fourth note!",
  date: "27/04/2021"
},
{
  id: nanoid(),
  text: "This is my fifth    note!",
  date: "10/04/2021"
},
{
  id: nanoid(),
  text: "This is my sixth note!",
  date: "10/04/2021"
},
{
  id: nanoid(),
  text: "This is my seventh note!",
  date: "01/04/2021"
},
]);


const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

  
useEffect(()=> {
  const savedNotes = JSON.parse(localStorage.getItem('raect-note-app-dta')
  );
if(savedNotes) {
  setNotes(savedNotes);
}
}, []);


useEffect(() => {
localStorage.setItem('react-notes-app-data',
 JSON.stringify(notes)
 );
}, [notes]);

 const addNote = (text) => {
   const date = new Date();
   const newNote = {
     id: nanoid(),
     text: text,
     date: date.toLocaleDateString()
   };
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
   };

   const deleteNote = (id) => {
   const newNotes = notes.filter((note)=> note.id !== id);
   alert("deleted succefully");
   setNotes(newNotes);
   }   

  return (
    <div className={ `${darkMode && 'dark-mode'}`}>
  <div className='container'>
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText} />
    <NotesList 
    notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText)
      )} 
    handleAddNote={addNote}
  
    handleDeleteNote={deleteNote}/>

</div>
  </div>
  );
};

export default App;



