#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2015, 2018, Oracle and/or its affiliates. All rights reserved.
#

BUILD_BITS=             NO_ARCH
include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		cantarell-fonts
COMPONENT_VERSION=	0.0.25
COMPONENT_PROJECT_URL=	https://wiki.gnome.org/Projects/CantarellFonts
COMPONENT_ARCHIVE_HASH= \
    sha256:14a228aa0b516dfc367b434a850f955a00c57fc549cbb05348e2b150196a737f
COMPONENT_BUGDB=        gnome/themes
COMPONENT_ANITYA_ID=	10888

TPNO=			34504

TEST_TARGET= $(NO_TESTS)

include $(WS_MAKE_RULES)/gnome-component.mk

CONFIGURE_OPTIONS += --with-fontdir=$(USRSHARETTFONTSDIR)/cantarell

REQUIRED_PACKAGES += runtime/perl-522
REQUIRED_PACKAGES += library/perl-5/xml-parser-522
