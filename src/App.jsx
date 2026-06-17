import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // Is file mein humne sirf AppRoutes ko call kiya hai 
    // taake hamari puri website ki routing yahan se control ho sake.
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;