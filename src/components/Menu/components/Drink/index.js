import './style.css';
import { Layer } from '../Layer';

const fakeLayer = {
  color: '#feeeca',
  label: 'mléčná pěna',
};


export const Drink = (props) => {
	const {id, name, ordered, image, layers} = props;

	const element = document.createElement('div');
	element.classList.add('drink');
	element.innerHTML =  `
		<div class="drink__product">
			<div class="drink__cup">
				<img src="${image}">
			</div>
			<div class="drink__info">
				<h3>${name}</h3>
			</div>
		</div>
		<div class="drink__controls">
			<button class="order-btn">
				Objednat
			</button>
		</div>
	`;

	element.querySelector('.drink__info').append(
		Layer(fakeLayer),
		Layer(fakeLayer),
	)

	return element;
}
