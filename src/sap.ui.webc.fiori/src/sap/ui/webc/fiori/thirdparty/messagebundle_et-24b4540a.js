sap.ui.define(['exports'], function (exports) { 'use strict';

	var messagebundle_et = {
		BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT: "Tühista",
		BARCODE_SCANNER_DIALOG_LOADING_TXT: "Laadimine",
		FCL_START_COLUMN_TXT: "Esimene veerg",
		FCL_MIDDLE_COLUMN_TXT: "Keskmine veerg",
		FCL_END_COLUMN_TXT: "Viimane veerg",
		FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP: "Laienda esimene veerg",
		FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP: "Ahenda esimene veerg",
		FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP: "Laienda viimane veerg",
		FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP: "Ahenda viimane veerg",
		NOTIFICATION_LIST_ITEM_TXT: "Teade",
		NOTIFICATION_LIST_ITEM_SHOW_MORE: "Kuva rohkem",
		NOTIFICATION_LIST_ITEM_SHOW_LESS: "Kuva vähem",
		NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE: "Rohkem",
		NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE: "Sule",
		NOTIFICATION_LIST_ITEM_READ: "Loetud",
		NOTIFICATION_LIST_ITEM_UNREAD: "Lugemata",
		NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT: "Kõrge tähtsusaste",
		NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT: "Keskmine tähtsusaste",
		NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT: "Madal tähtsusaste",
		NOTIFICATION_LIST_GROUP_ITEM_TXT: "Teategrupp",
		NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT: "Loendur",
		NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE: "Sule kõik",
		NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE: "Ahenda grupp",
		NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE: "Laienda grupp",
		TIMELINE_ARIA_LABEL: "Ajaskaala",
		UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT: "Tühista",
		UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT: "Nimeta ümber",
		UPLOADCOLLECTIONITEM_ERROR_STATE: "Katkestatud",
		UPLOADCOLLECTIONITEM_READY_STATE: "Ootel",
		UPLOADCOLLECTIONITEM_UPLOADING_STATE: "Üleslaadimine",
		UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT: "Katkesta",
		UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT: "Proovi uuesti",
		UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT: "Redigeeri",
		UPLOADCOLLECTION_NO_DATA_TEXT: "Faile ei leitud.",
		UPLOADCOLLECTION_NO_DATA_DESCRIPTION: "Üleslaadimiseks kukutage failid või kasutage nuppu Laadi üles.",
		UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION: "Laadi kogum üles",
		UPLOADCOLLECTION_DRAG_FILE_INDICATOR: "Lohistage failid siia.",
		UPLOADCOLLECTION_DROP_FILE_INDICATOR: "Üleslaadimiseks kukutage failid.",
		SHELLBAR_LABEL: "Kestariba",
		SHELLBAR_LOGO: "Logo",
		SHELLBAR_COPILOT: "CoPilot",
		SHELLBAR_NOTIFICATIONS: "{0} teadet",
		SHELLBAR_PROFILE: "Profiil",
		SHELLBAR_PRODUCTS: "Tooted",
		PRODUCT_SWITCH_CONTAINER_LABEL: "Tooted",
		SHELLBAR_SEARCH: "Otsing",
		SHELLBAR_OVERFLOW: "Rohkem",
		SHELLBAR_CANCEL: "Tühista",
		WIZARD_NAV_ARIA_LABEL: "Viisardi edenemisriba",
		WIZARD_LIST_ARIA_LABEL: "Viisardi juhised",
		WIZARD_LIST_ARIA_DESCRIBEDBY: "Aktiveerimiseks vajutage tühiku- või sisestusklahvi.",
		WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL: "Etapid",
		WIZARD_OPTIONAL_STEP_ARIA_LABEL: "Valikuline",
		WIZARD_STEP_ACTIVE: "Aktiivne",
		WIZARD_STEP_INACTIVE: "Passiivne",
		WIZARD_STEP_ARIA_LABEL: "Etapp {0}",
		WIZARD_NAV_ARIA_ROLE_DESCRIPTION: "Viisard",
		WIZARD_NAV_STEP_DEFAULT_HEADING: "Etapp",
		VSD_DIALOG_TITLE_SORT: "Kuva sätted",
		VSD_SUBMIT_BUTTON: "OK",
		VSD_CANCEL_BUTTON: "Tühista",
		VSD_RESET_BUTTON: "Lähtesta",
		VSD_SORT_ORDER: "Sortimisjärjestus",
		VSD_FILTER_BY: "Filtreerimisalus",
		VSD_SORT_BY: "Sortimisalus",
		VSD_ORDER_ASCENDING: "Kasvav",
		VSD_ORDER_DESCENDING: "Kahanev",
		IM_TITLE_BEFORESEARCH: "Hangime mõned tulemused",
		IM_SUBTITLE_BEFORESEARCH: "Alustage otsingukriteeriumide sisestamisega.",
		IM_TITLE_NOACTIVITIES: "Te pole veel ühtegi tegevust lisanud",
		IM_SUBTITLE_NOACTIVITIES: "Kas soovite praegu ühe lisada?",
		IM_TITLE_NODATA: "Andmeid pole veel",
		IM_SUBTITLE_NODATA: "Kui andmed on olemas, kuvatakse need siin.",
		IM_TITLE_NOMAIL: "Uut päringut pole",
		IM_SUBTITLE_NOMAIL: "Vaadake hiljem uuesti.",
		IM_TITLE_NOENTRIES: "Kirjeid pole veel",
		IM_SUBTITLE_NOENTRIES: "Kui kirjed on olemas, kuvatakse need siin.",
		IM_TITLE_NONOTIFICATIONS: "Te pole saanud ühtegi uut teadet",
		IM_SUBTITLE_NONOTIFICATIONS: "Vaadake hiljem uuesti.",
		IM_TITLE_NOSAVEDITEMS: "Te pole veel ühtegi lemmikut lisanud",
		IM_SUBTITLE_NOSAVEDITEMS: "Kas soovite praegu luua oma lemmiküksuste loendi?",
		IM_TITLE_NOSEARCHRESULTS: "Tulemeid ei leitud",
		IM_SUBTITLE_NOSEARCHRESULTS: "Proovige otsingukriteeriume muuta.",
		IM_TITLE_NOTASKS: "Te pole saanud ühtegi uut ülesannet",
		IM_SUBTITLE_NOTASKS: "Kui ülesanded on olemas, kuvatakse need siin.",
		IM_TITLE_UNABLETOLOAD: "Andmeid ei saa laadida",
		IM_SUBTITLE_UNABLETOLOAD: "Kontrollige Interneti-ühendust. Kui see ei aita, proovige uuesti laadida. Kui ka see ei aita, pöörduge administraatori poole.",
		IM_TITLE_UNABLETOUPLOAD: "Andmeid ei saa üles laadida",
		IM_SUBTITLE_UNABLETOUPLOAD: "Kontrollige Interneti-ühendust. Kui see ei aita, kontrollige failivormingut ja failimahtu. Vastasel korral pöörduge administraatori poole."
	};

	exports.default = messagebundle_et;

});
