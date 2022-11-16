import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExcelDataGrid from './Prototypes/ExcelDataGrid';
import HomePage from './Prototypes/HomePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/prot1' element={<ExcelDataGrid />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
