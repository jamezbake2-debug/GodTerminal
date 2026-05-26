@echo off
echo Starting Cal Jamez Promo Background Service...
pm2 start caljamez-promo-service.js --name "CalJamez-Promo"
pm2 save
echo.
echo Service is now running in background!
echo To see logs: pm2 logs CalJamez-Promo
echo To stop: pm2 stop CalJamez-Promo
pause