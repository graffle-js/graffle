#!/bin/bash

# `readlink` is needed to support at least npm which symlinks this file into node_modules/.bin
# The effect of `readlink -f` is to resolve the symlink to its target, so that we can find the actual directory
# this file is in.
#
basedir=$(dirname "$(readlink -f "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

entrypoint="$basedir/build/generator/cli/generate.js"

if command -v ./node_modules/.bin/tsx >/dev/null 2>&1; then
  exec node --import=tsx "$entrypoint" "$@"
elif command -v tsx >/dev/null 2>&1; then
	exec tsx "$entrypoint" "$@"
elif node --experimental-strip-types -e "" 2>/dev/null; then
	# https://nodejs.org/docs/latest/api/cli.html#--experimental-strip-types
	exec node --experimental-strip-types "$entrypoint" "$@"
else
	exec node "$entrypoint" "$@"
fi
