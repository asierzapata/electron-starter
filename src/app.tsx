import React from 'react'
import ReactDOM from 'react-dom'

/* ====================================================== */
/*                         Styles                        */
/* ====================================================== */

import './styles/globals.css'

/* ====================================================== */
/*                       Components                      */
/* ====================================================== */

/* ====================================================== */
/*                    Implementation                     */
/* ====================================================== */

export const App = () => {
	return <h1 className="text-2xl text-gray-600">This is React!</h1>
}

/* ====================================================== */
/*                       Public API                       */
/* ====================================================== */

export const renderReactApp = (el: string) => {
	ReactDOM.render(<App />, document.querySelector(el))
}
