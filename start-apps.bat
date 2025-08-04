@echo off
echo Starting Stocker App (Zerodha Clone)...
echo.

echo Starting Backend Server (Port 3002)...
start "Backend Server" cmd /k "cd backend && npm start"

echo Starting Frontend Landing Page (Port 5173)...
start "Frontend Landing Page" cmd /k "cd frontend && npm run dev"

echo Starting Dashboard (Port 3000)...
start "Dashboard" cmd /k "cd dashboard && npm run dev"

echo.
echo All servers are starting...
echo.
echo Backend: http://localhost:3002
echo Frontend Landing Page: http://localhost:5173
echo Dashboard: http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul 