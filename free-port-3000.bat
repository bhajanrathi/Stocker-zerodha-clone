@echo off
echo Freeing up port 3000...
echo.

echo Finding processes using port 3000...
netstat -ano | findstr :3000

echo.
echo Stopping processes on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo Stopping process %%a
    taskkill /f /pid %%a
)

echo.
echo Port 3000 should now be free!
echo You can now start the dashboard on port 3000.
pause 