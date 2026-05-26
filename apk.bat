@echo off
echo.
echo ================================================
echo     UniT ∞ God Terminal - Build APK
echo ================================================
echo.

:: Check if we're in the project folder
if not exist "App.js" (
    echo [ERROR] Please run this file from inside the "UniT-God-Terminal" folder!
    echo.
    pause
    exit
)

echo Checking for EAS CLI...
where eas >nul 2>nul
if %errorlevel% neq 0 (
    echo [WARNING] EAS CLI not found. Installing now...
    npm install -g eas-cli
)

echo.
echo Logging in to EAS (if needed)...
eas login

echo.
echo ================================================
echo Starting APK Build...
echo This may take 10-20 minutes.
echo ================================================
echo.

echo Building Preview APK (recommended for testing)...
eas build --platform android --profile preview

echo.
echo ================================================
echo Build process started!
echo You will receive a download link when it's ready.
echo ================================================
echo.
pause