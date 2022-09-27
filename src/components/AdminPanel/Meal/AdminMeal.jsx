import React from 'react'
import styled from 'styled-components';

const AdminMeal = ({ _id, name, category, price, image }) => {
  return (
		<li key={_id}>
			<p>meal id: {_id}</p>
			<p>meal name: {name}</p>
			<p>meal category: {category}</p>
			<p>meal price: {price} $</p>
			<p>meal image: {image}</p>
		</li>
  );
}

export default AdminMeal