#!/bin/bash
# Script de instalación y ejecución del proyecto GIRIE

echo "🔬 GIRIE - Grupo de Investigación en Ingeniería Electrónica"
echo "=================================================="
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor, instálalo desde https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js versión: $(node --version)"
echo "✅ npm versión: $(npm --version)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "✅ Dependencias instaladas correctamente"
echo ""

# Mostrar opciones
echo "=================================================="
echo "¿Qué quieres hacer?"
echo "1) Ejecutar en desarrollo"
echo "2) Build para producción"
echo "3) Ver preview del build"
echo "4) Ejecutar linter"
echo "=================================================="
echo ""

read -p "Selecciona una opción (1-4): " option

case $option in
    1)
        echo "🚀 Iniciando servidor de desarrollo..."
        npm run dev
        ;;
    2)
        echo "🔨 Compilando para producción..."
        npm run build
        ;;
    3)
        echo "👀 Abriendo preview..."
        npm run preview
        ;;
    4)
        echo "🔍 Ejecutando linter..."
        npm run lint
        ;;
    *)
        echo "❌ Opción no válida"
        exit 1
        ;;
esac
