import React from "react";
export default function Contact(props) {
  return (
<div className="card">
<img
      src={props.img}
      alt="1"
    />
    <h4>{props.name}</h4>
</div>
  )
}
