#!/bin/bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $0 <file-path>"
  echo "Example: $0 examples/10_transport-http/transport-http_abort.ts"
  exit 1
fi

FILE=$1

if [ ! -f "$FILE" ]; then
  echo "Error: File not found: $FILE"
  exit 1
fi

echo "=== TypeScript Type Stats for $FILE ==="
echo ""

npx tsc --noEmit "$FILE" --extendedDiagnostics 2>&1 | grep -E '(Instantiations|Time in Type Checker)' || echo "No stats available (file may have errors)"

echo ""
echo "To see full diagnostics: npx tsc --noEmit $FILE --extendedDiagnostics"
echo "To generate trace: npx tsc --noEmit $FILE --generateTrace trace-output --incremental false"
