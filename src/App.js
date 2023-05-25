import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';


import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';




function App() {
	return (
		<div className="App">
			<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
				</ Routes>
		</div>
	);
}

export default App;
