@echo off

curl -X POST http://localhost:3000/api/clear
timeout /t 1 /nobreak > nul
curl -X POST http://localhost:3000/api/seed
echo.
echo Database reset complete!
pause