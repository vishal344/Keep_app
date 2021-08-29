import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    //const value= event.target.value;
    //const name = event.target.name;
    const { value, name } = event.target;

    setNote((oldValue) => {
      return { ...oldValue, [name]: value };
    });
    console.log(note);
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal=()=>{
    setExpand(false)
  }

  return (
    <>
      <div className="card container col-sm-6 mt-4 v1" onDoubleClick={btoNormal}>
        {expand ? (
          <input
            type="text"
            className="card-header"
            placeholder="Tittle"
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={inputEvent}
          />
        ) : null}

        <div className="card-body">
          <div class="form-floating">
            <textarea
              row=""
              columns=""
              className="form-control card-header"
              placeholder=" comment here"
              id="floatingTextarea2"
              name="content"
              value={note.content}
              onChange={inputEvent}
              onClick={expandIt}
            ></textarea>
            <label for="floatingTextarea2">Write here</label>
          </div>
          {expand ? (
            <button className=" mt-2 btn1">
              <AddIcon onClick={addEvent} />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default CreateNote;






//vishal wanode