import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// GitHub Pages requires basename for routing
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
	<BrowserRouter basename={basename}>
		<App />
	</BrowserRouter>
)
