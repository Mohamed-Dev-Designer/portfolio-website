@echo off
CHCP 65001

echo Installing dependencies...
call npm install --legacy-peer-deps

echo Starting Vite...
start npm run dev

timeout /t 10 /nobreak > nul

start http://localhost:3000/

pause