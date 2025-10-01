#!/bin/bash

# `readlink` is needed to support at least npm which symlinks this file into node_modules/.bin
# The effect of `readlink -f` is to resolve the symlink to its target, so that we can find the actual directory
# this file is in.
#
basedir=$(dirname "$(readlink -f "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

entrypoint="$basedir/build/cli/index.js"

# Allow users to force tsx for advanced use cases (e.g., full TypeScript transformation)
if [ "$GRAFFLE_USE_TSX" = "1" ]; then
  if command -v ./node_modules/.bin/tsx >/dev/null 2>&1; then
    exec ./node_modules/.bin/tsx "$entrypoint" "$@"
  elif command -v tsx >/dev/null 2>&1; then
    exec tsx "$entrypoint" "$@"
  else
    echo "Warning: GRAFFLE_USE_TSX=1 but tsx not found. Falling back to node." >&2
  fi
fi

# Node 24.0+/22.18+ has native TypeScript support with type stripping enabled by default
exec node "$entrypoint" "$@"
