import React from "react";
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';



const Note = (props) => {

  const Delete=()=>{
    props.deletIteam(props.id)
  }
  return (
    <>
      <div className="row mt-5 m-3 container v ">
        <div className="col-sm-3  " >
          <div className="card">
            <div className="card-body card-header v1">
              <h3 className="card-title">{props.title}</h3>
              <p className="card-text">
               
               {props.content}
              </p>
              <button className=" mt-2 btn" >  <DeleteOutlineTwoToneIcon  onClick={Delete} /></button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Note;
