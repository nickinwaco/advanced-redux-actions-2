import React from 'react';

function SpecialText(props) {
  return (
      <div>
      {console.log("props.text "+ props)}
        Special Text: {props.text}
      </div>
  );
}
export default SpecialText;
