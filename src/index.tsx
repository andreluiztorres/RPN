import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.scss'

render(
    <React.StrictMode>
        <Router>
            <div>abc</div>
        </Router>
    </React.StrictMode>,
    document.body
)
