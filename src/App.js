import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';

export const DateContext = createContext();
export const CharacterNameContext = createContext();

function App() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const yesterday =
			date.getHours() > 1
				? new Date(date.setDate(date.getDate() - 1))
				: new Date(date.setDate(date.getDate() - 2));
		setDate(
			yesterday.getFullYear() +
				'-' +
				(yesterday.getMonth() + 1 < 9 ? '0' + (yesterday.getMonth() + 1) : yesterday.getMonth() + 1) +
				'-' +
				(yesterday.getDate() < 9 ? '0' + yesterday.getDate() : yesterday.getDate())
		);
	}, []);

	return (
		<BrowserRouter>
			<DateContext.Provider value={date}>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home setDate={setDate} />} />
						<Route path="/Detail/:characterName" element={<Detail setDate={setDate} />} />
					</Routes>
				</div>
			</DateContext.Provider>
		</BrowserRouter>
	);
}

export default App;
