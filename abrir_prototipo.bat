@echo off
title DungIAn - Prototipo Interactivo
echo ========================================================
echo   Iniciando Prototipo Interactivo de DungIAn (UPAO 2026)
echo   Iniciando servidor frontend (Vite)...
echo ========================================================
cd /d "%~dp0"
call npm run dev -- --open
