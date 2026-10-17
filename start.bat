@echo off
title VoiceOSCE - Cognitive Clinical Simulator
echo ========================================================
echo   VoiceOSCE: Cognitive Clinical Examination Simulator
echo   Launching local web application and browser...
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Python was not found in your PATH.
    echo Please install Python 3.10+ and make sure it is added to PATH.
    pause
    exit /b 1
)

python app.py
if %errorlevel% neq 0 (
    echo.
    echo [NOTICE] If dependencies are missing, run: pip install -r requirements.txt
    pause
)
