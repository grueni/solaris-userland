#
# This file and its contents are supplied under the terms of the
# Common Development and Distribution License ("CDDL"), version 1.0.
# You may only use this file in accordance with the terms of version
# 1.0 of the CDDL.
#
# A full copy of the text of the CDDL should have accompanied this
# source.  A copy of the CDDL is also available via the Internet at
# http://www.illumos.org/license/CDDL.
#

#
# Copyright 2011 EveryCity Ltd. All rights reserved.
# Copyright 2013, Jon Tibble.  All rights reserved.
# Copyright 2016, Jim Klimov
# Copyright 2019 Andreas Grueninger, Grueninger GmbH, (grueni). All rights reserved.
#

BUILD_BITS= 64

include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		mbuffer
COMPONENT_VERSION=	20200505
COMPONENT_FMRI=		shell/mbuffer
COMPONENT_CLASSIFICATION=	Applications/System Utilities
COMPONENT_SUMMARY=	mbuffer - tool for buffering data streams
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tgz
COMPONENT_ARCHIVE_HASH=	sha256:cc046183149e51814c23b9f83fd748cc1625a88ee128651ea500aa7bd5f01f0b
COMPONENT_ARCHIVE_URL=	http://www.maier-komor.de/software/mbuffer/$(COMPONENT_ARCHIVE)
COMPONENT_PROJECT_URL=	http://www.maier-komor.de/mbuffer.html
COMPONENT_LICENSE=	GPLv3
COMPONENT_LICENSE_FILE=	LICENSE

include $(WS_MAKE_RULES)/common.mk

PATH=$(GNUBIN):$(USRBINDIR):/opt/solarisstudio12.4/bin
COMPILER=gcc	
CC=gcc

COMPONENT_PRE_CONFIGURE_ACTION += ($(CLONEY) $(SOURCE_DIR) $(@D))

#CONFIGURE_OPTIONS.32    += CFLAGS="$(CFLAGS)"

# Auto-generated dependencies
REQUIRED_PACKAGES += SUNWcs
REQUIRED_PACKAGES += library/security/libmhash
REQUIRED_PACKAGES += system/library
REQUIRED_PACKAGES += system/library/math
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += system/library/security/crypto

