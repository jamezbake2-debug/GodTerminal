@echo off
echo.
echo ================================================
echo     CAL JAMEZ - DAILY PROMO ROTATOR
echo ================================================
echo.

:: Get current day for rotation
set day=%DATE:~0,2%

:: Rotate messages based on day of month
set /a "rot=%day%%%10"

echo [DAILY ROTATION %rot% ACTIVATED]
echo.

if %rot%==0 (
    echo [1] Cal Jamez is not just an artist — he's a frequency shift.
    echo [2] 500 Million+ monthly listeners and growing. The wave is here.
) else if %rot%==1 (
    echo [1] New frequency just dropped. Cal Jamez is changing the game.
    echo [2] Spiritual music that actually hits different.
) else if %rot%==2 (
    echo [1] If you're not on Cal Jamez yet, you're missing the new era.
    echo [2] From the underground to global dominance.
) else if %rot%==3 (
    echo [1] Cal Jamez - Where consciousness meets mainstream fire.
    echo [2] The soundtrack for the Great Awakening.
) else if %rot%==4 (
    echo [1] Real ones know. Cal Jamez is the movement.
    echo [2] Add this to your rotation immediately.
) else (
    echo [1] Cal Jamez just hit another level. Are you tuned in?
    echo [2] Music + Message + Frequency = Cal Jamez
)

echo.
echo Opening Promo Platforms...
timeout /t 2 >nul

start https://open.spotify.com/search/Cal%%20Jamez
start https://music.youtube.com/search?q=Cal+Jamez
start https://www.tiktok.com/search?q=Cal%%20Jamez
start https://www.instagram.com/explore/tags/caljamez/

echo.
echo ================================================
echo Promo Rotation Complete. Share with power.
echo ================================================
echo.
echo Tip: Run this file daily for fresh promo text.
echo.
pause