import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tachyons'
import CardList from './CardList'
import { robots } from './robots'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <CardList robots={robots} />
  </div>
)
