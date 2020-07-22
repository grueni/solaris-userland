#
# This file and its contents are supplied under the terms of the
# Common Development and Distribution License ("CDDL)". You may
# only use this file in accordance with the terms of the CDDL.
#
# A full copy of the text of the CDDL should have accompanied this
# source. A copy of the CDDL is also available via the Internet at
# http://www.illumos.org/license/CDDL.
#

#
# Copyright 2013 Adam Stevko. All rights reserved.
# Copyright 2019 Andreas Grueninger, Grueninger GmbH, (grueni). All rights reserved.
#

BUILD_BITS= 64

include ../../../make-rules/shared-macros.mk

PATH=$(GNUBIN):$(USRBINDIR):$(SPRO_VROOT)/bin	

COMPONENT_NAME= corosync
COMPONENT_VERSION= 2.4.5
COMPONENT_REVISION= 1
COMPONENT_FMRI= application/cluster/$(COMPONENT_NAME)
COMPONENT_CLASSIFICATION= System/Services
COMPONENT_SRC= $(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE= $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.gz
COMPONENT_ARCHIVE_HASH= sha256:72355e531f2ebce4942f179993d01261657e904541f9b83ca2fc370b2a23e714
COMPONENT_PROJECT_URL= https://github.com/corosync/corosync
COMPONENT_ARCHIVE_URL= https://github.com/$(COMPONENT_NAME)/$(COMPONENT_NAME)/archive/v$(COMPONENT_VERSION).tar.gz
COMPONENT_LICENSE= BSD
COMPONENT_SUMMARY= The Corosync cluster engine.

include $(WS_MAKE_RULES)/common.mk

COMPONENT_PREP_ACTION=(cp $(COMPONENT_DIR)/files/rdendian.h $(SOURCE_DIR)/qdevices; cd $(SOURCE_DIR); $(CONFIG_SHELL) autogen.sh )

COMPONENT_PRE_CONFIGURE_ACTION=($(CLONEY) $(SOURCE_DIR) $(@D))

CONFIGURE_SCRIPT= $(@D)/configure

SNMPCONFIG= /usr/bin/amd64/net-snmp-config
CFLAGS += -D__EXTENSIONS__ -D_POSIX_PTHREAD_SEMANTICS -D__XOPEN_OR_POSIX
LDFLAGS += -R/usr/lib/mps/$(MACH64)

CONFIGURE_OPTIONS += --sysconfdir=/etc
CONFIGURE_OPTIONS += --libexecdir=$(CONFIGURE_PREFIX)/lib
CONFIGURE_OPTIONS += --sharedstatedir=/var/hacluster
CONFIGURE_OPTIONS += --localstatedir=/var
CONFIGURE_OPTIONS += --enable-monitoring
CONFIGURE_OPTIONS += --enable-snmp
CONFIGURE_OPTIONS += --enable-xmlconf
CONFIGURE_OPTIONS += --enable-testagents
CONFIGURE_OPTIONS += --enable-augeas
CONFIGURE_OPTIONS += --enable-qdevices
CONFIGURE_OPTIONS += --disable-rpath
CONFIGURE_OPTIONS += --with-logdir=/var/log/hacluster

CONFIGURE_ENV.64 += LT_SYS_LIBRARY_PATH="/lib/$(MACH64):/usr/lib/$(MACH64)"

COMPONENT_POST_INSTALL_ACTION=( \
	$(RM) -r $(PROTO_DIR)/usr/share/corosync/examples; \
	$(MKDIR) $(PROTO_DIR)/usr/share/corosync/examples/conf; \
	$(CP) -r $(PROTO_DIR)/etc/corosync/*  $(PROTO_DIR)/usr/share/corosync/examples/conf ; \
	$(MV)    $(PROTO_DIR)/etc/logrotate.d $(PROTO_DIR)/usr/share/corosync/examples; \
	$(RM)    $(PROTO_DIR)/etc/corosync/corosync.conf.example; \
	$(RM)    $(PROTO_DIR)/etc/corosync/corosync.conf.example.udpu; \
	$(RM)    $(PROTO_DIR)/etc/corosync/corosync.xml.example )

# if compilation fails make output verbose
#COMPONENT_BUILD_GMAKE_ARGS= V=1

#CONFIGURE_BINDIR.64= $(CONFIGURE_BINDIR.32)
#CONFIGURE_SBINDIR.64= $(CONFIGURE_SBINDIR.32)

# Auto-generated contents below.  Please manually verify and remove this comment
REQUIRED_PACKAGES += library/libqb
REQUIRED_PACKAGES += library/libstatgrab
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += shell/bash
REQUIRED_PACKAGES += shell/ksh93
REQUIRED_PACKAGES += system/library
REQUIRED_PACKAGES += system/library/libc
REQUIRED_PACKAGES += system/management/snmp/net-snmp
