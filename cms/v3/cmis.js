/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */




// CONSTANTS

// ---- Base ----
exports.NAME = "cmis:name";
exports.OBJECT_ID = "cmis:objectId";
exports.OBJECT_TYPE_ID = "cmis:objectTypeId";
exports.BASE_TYPE_ID = "cmis:baseTypeId";
exports.CREATED_BY = "cmis:createdBy";
exports.CREATION_DATE = "cmis:creationDate";
exports.LAST_MODIFIED_BY = "cmis:lastModifiedBy";
exports.LAST_MODIFICATION_DATE = "cmis:lastModificationDate";
exports.CHANGE_TOKEN = "cmis:changeToken";

// ---- Document ----
exports.IS_IMMUTABLE = "cmis:isImmutable";
exports.IS_LATEST_VERSION = "cmis:isLatestVersion";
exports.IS_MAJOR_VERSION = "cmis:isMajorVersion";
exports.IS_LATEST_MAJOR_VERSION = "cmis:isLatestMajorVersion";
exports.VERSION_LABEL = "cmis:versionLabel";
exports.VERSION_SERIES_ID = "cmis:versionSeriesId";
exports.IS_VERSION_SERIES_CHECKED_OUT = "cmis:isVersionSeriesCheckedOut";
exports.VERSION_SERIES_CHECKED_OUT_BY = "cmis:versionSeriesCheckedOutBy";
exports.VERSION_SERIES_CHECKED_OUT_ID = "cmis:versionSeriesCheckedOutId";
exports.CHECKIN_COMMENT = "cmis:checkinComment";
exports.CONTENT_STREAM_LENGTH = "cmis:contentStreamLength";
exports.CONTENT_STREAM_MIME_TYPE = "cmis:contentStreamMimeType";
exports.CONTENT_STREAM_FILE_NAME = "cmis:contentStreamFileName";
exports.CONTENT_STREAM_ID = "cmis:contentStreamId";

// ---- Folder ----
exports.PARENT_ID = "cmis:parentId";
exports.ALLOWED_CHILD_OBJECT_TYPE_IDS = "cmis:allowedChildObjectTypeIds";
exports.PATH = "cmis:path";

// ---- Relationship ----
exports.SOURCE_ID = "cmis:sourceId";
exports.TARGET_ID = "cmis:targetId";

// ---- Policy ----
exports.POLICY_TEXT = "cmis:policyText";

// ---- Versioning States ----
exports.VERSIONING_STATE_NONE = "none";
exports.VERSIONING_STATE_MAJOR = "major";
exports.VERSIONING_STATE_MINOR = "minor";
exports.VERSIONING_STATE_CHECKEDOUT = "checkedout";

// ---- Object Types ----
exports.OBJECT_TYPE_DOCUMENT = "cmis:document";
exports.OBJECT_TYPE_FOLDER = "cmis:folder";
exports.OBJECT_TYPE_RELATIONSHIP = "cmis:relationship";
exports.OBJECT_TYPE_POLICY = "cmis:policy";
exports.OBJECT_TYPE_ITEM = "cmis:item";
exports.OBJECT_TYPE_SECONDARY = "cmis:secondary";