import React from "react";

export const ContactPicker = ({
  contacts,onChange, name,value
}) => {
  return (
    <>
      <select name={name} value={value} onChange={onChange} > 
      <option value={""} key={-1}> No Contact Selected </option>
      {contacts.map((contact) => {
     <option value={contact} key={contact} > {contact} </option>
      })}
      </select>
    
    </>
  );
};
