/**
 * This file is a very simple example of a class declaration in Dojo. It defines the `app/Dialog` module as a new
 * class that extends a dijit Dialog and overrides the default title and content properties.
 */
define([ 'dojo/_base/declare', 'dijit/Dialog', "dojo/i18n!./nls/Dialog" ], function (declare, Dialog, i18nData) {
	return declare(Dialog, {
		title: i18nData.title,
		content: i18nData.content
	});
});