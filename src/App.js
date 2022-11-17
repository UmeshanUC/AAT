import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExcelDataGrid from './Prototypes/ExcelDataGrid';
import Login from './Prototypes/Login';
import HomePage from './Prototypes/HomePage';
import { ImportCsv } from './Prototypes/ImportCsv';
import { SendEmail } from './Prototypes/SendEmail';
import { Statistic } from './Prototypes/Statistic';
import { UploadAttendance } from './Prototypes/UploadAttendance';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/dataPrev' element={<ExcelDataGrid/>} />
					<Route path='/login' element={<Login/>} />
					<Route path='/upload' element={<ImportCsv/>} />
					<Route path='/home' element={<HomePage/>} />
					<Route path='/email' element={<SendEmail/>} />
					<Route path='/statistic' element={<Statistic/>} />
					<Route path='/uploadAttendance' element={<UploadAttendance/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
