#!/bin/sh
palm-package .
palm-install *.ipk
palm-launch com.creationix.divclock
rm *.ipk
