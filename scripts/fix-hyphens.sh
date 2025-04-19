#!/usr/bin/env bash
set -euo pipefail

# 1) Renombrar archivos y carpetas que contengan el NB‑hyphen (U+2011) a guión ASCII (-)
find . -depth | while IFS= read -r path; do
  # reemplaza U+2011 por '-' en el nombre
  newpath=$(printf '%s' "$path" | sed $'s/\xe2\x80\x91/-/g')
  if [[ "$path" != "$newpath" ]]; then
    echo "mv: '$path' → '$newpath'"
    git mv -- "$path" "$newpath"
  fi
done

# 2) Corregir los enlaces y cualquier aparición de U+2011 en el contenido de los MD
#    (busca recursivamente en todos los .md)
grep -rl $'\xe2\x80\x91' --include="*.md" . \
  | xargs -r sed -i $'s/\xe2\x80\x91/-/g'

echo "✅ Todos los nombres y enlaces normalizados."
