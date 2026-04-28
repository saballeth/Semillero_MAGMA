@echo off
REM Script de instalación y ejecución del proyecto GIRIE para Windows

echo.
echo 🔬 GIRIE - Grupo de Investigacion en Ingenieria Electronica
echo ===========================================================
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js no esta instalado. Por favor, instalalo desde https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✅ Node.js version: %NODE_VERSION%
echo ✅ npm version: %NPM_VERSION%
echo.

REM Instalar dependencias
echo 📦 Instalando dependencias...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias
    pause
    exit /b 1
)

echo.
echo ✅ Dependencias instaladas correctamente
echo.

REM Mostrar menú
echo ===========================================================
echo ¿Que quieres hacer?
echo 1) Ejecutar en desarrollo
echo 2) Build para produccion
echo 3) Ver preview del build
echo 4) Ejecutar linter
echo ===========================================================
echo.

set /p option="Selecciona una opcion (1-4): "

if "%option%"=="1" (
    echo.
    echo 🚀 Iniciando servidor de desarrollo...
    call npm run dev
) else if "%option%"=="2" (
    echo.
    echo 🔨 Compilando para produccion...
    call npm run build
) else if "%option%"=="3" (
    echo.
    echo 👀 Abriendo preview...
    call npm run preview
) else if "%option%"=="4" (
    echo.
    echo 🔍 Ejecutando linter...
    call npm run lint
) else (
    echo.
    echo ❌ Opcion no valida
    pause
    exit /b 1
)
