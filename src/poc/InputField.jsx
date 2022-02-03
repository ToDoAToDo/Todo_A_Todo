import React, { Component } from "react";

function InputField() {
  return (
    <form>
      <label htmlFor="choreName">Chore: </label>
      <input type="text" id="choreName" name="choreName" />
      <br />

      <label htmlFor="choreDate">Done By:</label>
      <input type="date" id="choreDate" name="choreDate" />
      <br />

      <label htmlFor="choreDoer">Select Person: </label>
      <select name="choreDoer" id="choreDoer">
        <option value="Alexander">Alexander</option>
        <option value="Marcus">Marcus</option>
        <option value="Sanna">Sanna</option>
        <option value="Jakob">Jakob</option>
      </select>
    </form>
  );
}

export default InputField;
