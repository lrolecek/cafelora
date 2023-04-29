import './style.css';

import { HomePage } from './pages/HomePage';

const { pathname } = window.location;
console.log(pathname);

if (pathname === '/') {
	document.querySelector('#app').append(HomePage());
}


