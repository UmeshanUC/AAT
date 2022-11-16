import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExcelDataGrid from './Prototypes/ExcelDataGrid';
import Login from './Prototypes/Login';
import HomePage from './Prototypes/HomePage';
import { ImportCsv } from './Prototypes/ImportCsv';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/prot1' element={<ExcelDataGrid />} />
					<Route path='/Login' element={<Login/>} />
					<Route path='/prot2' element={<ImportCsv />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
