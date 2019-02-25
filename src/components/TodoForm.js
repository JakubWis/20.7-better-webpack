import React from 'react';

const todoForm = (props) => {

	
	return (
	<div>
		<input id="inp"/>
		<button onClick={() => props.add(document.getElementById('inp').value)}>Dodaj</button>
	</div>
	);
	
};

export default todoForm;