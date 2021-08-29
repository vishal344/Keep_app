import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [iteam, setIteam] = useState([]);

  const addNote = (note) => {
    //alert("passsdhfkg");
    setIteam((oldValue) => {
      return [...oldValue, note];
    });

    console.log(note);
  };
  const onDelete = (id) => {
  
  setIteam((olddata)=>
      olddata.filter((currdata,indx)=>{
          return indx !==id;
      })
    )

   //alert("jgigfiygei");
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {iteam.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={val.content}
            title={val.title}
            deletIteam={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App;
