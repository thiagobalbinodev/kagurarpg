@echo off
echo.
echo =============================
echo  🚀 Fazendo deploy dos comandos...
echo =============================
echo.

node deploy-commands.js

echo.
echo =============================
echo  🤖 Iniciando o bot...
echo =============================
echo.

node index.js

pause