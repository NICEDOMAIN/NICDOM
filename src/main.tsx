import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif', textAlign: 'center', marginTop: '100px' }}>
      <h1>NICDOM Platform</h1>
      <p>درحال راه‌اندازی و به‌روزرسانی سیستم...</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
