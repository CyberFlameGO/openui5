sap.ui.define(['exports'], function (exports) { 'use strict';

	var messagebundle_bg = {
		BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT: "Отмяна",
		BARCODE_SCANNER_DIALOG_LOADING_TXT: "Зареждане",
		FCL_START_COLUMN_TXT: "Първа колона",
		FCL_MIDDLE_COLUMN_TXT: "Средна колона",
		FCL_END_COLUMN_TXT: "Последна колона",
		FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP: "Разгръщане на първата колона",
		FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP: "Скриване на първата колона",
		FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP: "Разгръщане на последната колона",
		FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP: "Скриване на последната колона",
		NOTIFICATION_LIST_ITEM_TXT: "Известие",
		NOTIFICATION_LIST_ITEM_SHOW_MORE: "Показване повече",
		NOTIFICATION_LIST_ITEM_SHOW_LESS: "Показване на по-малко",
		NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE: "Повече",
		NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE: "Затваряне",
		NOTIFICATION_LIST_ITEM_READ: "Прочетено",
		NOTIFICATION_LIST_ITEM_UNREAD: "Непрочетено",
		NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT: "Висок приоритет",
		NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT: "Среден приоритет",
		NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT: "Нисък приоритет",
		NOTIFICATION_LIST_GROUP_ITEM_TXT: "Група известия",
		NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT: "Брояч",
		NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE: "Затваряне на всички",
		NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE: "Свиване на група",
		NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE: "Разгъване на група",
		TIMELINE_ARIA_LABEL: "Времева линия",
		UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT: "Отмяна",
		UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT: "Преименуване",
		UPLOADCOLLECTIONITEM_ERROR_STATE: "Прекратен",
		UPLOADCOLLECTIONITEM_READY_STATE: "Предстоящ",
		UPLOADCOLLECTIONITEM_UPLOADING_STATE: "Качване",
		UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT: "Прекратяване",
		UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT: "Повторен опит",
		UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT: "Редактиране",
		UPLOADCOLLECTION_NO_DATA_TEXT: "Няма открити файлове.",
		UPLOADCOLLECTION_NO_DATA_DESCRIPTION: "Пуснете файловете, за да ги качите или използвайте бутона “Качване”.",
		UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION: "Качване на колекция",
		UPLOADCOLLECTION_DRAG_FILE_INDICATOR: "Провлачете файловете тук.",
		UPLOADCOLLECTION_DROP_FILE_INDICATOR: "Пуснете файловете, за да ги качите.",
		SHELLBAR_LABEL: "Лента на обвивка",
		SHELLBAR_LOGO: "Лого",
		SHELLBAR_COPILOT: "CoPilot",
		SHELLBAR_NOTIFICATIONS: "{0} Известия",
		SHELLBAR_PROFILE: "Профил",
		SHELLBAR_PRODUCTS: "Продукти",
		PRODUCT_SWITCH_CONTAINER_LABEL: "Продукти",
		SHELLBAR_SEARCH: "Търсене",
		SHELLBAR_OVERFLOW: "Още",
		SHELLBAR_CANCEL: "Отказ",
		WIZARD_NAV_ARIA_LABEL: "Лента за напредък на асистент",
		WIZARD_LIST_ARIA_LABEL: "Стъпки на асистент",
		WIZARD_LIST_ARIA_DESCRIBEDBY: "За активиране, натиснете клавиша за интервал или Enter",
		WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL: "Стъпки",
		WIZARD_OPTIONAL_STEP_ARIA_LABEL: "Опционално",
		WIZARD_STEP_ACTIVE: "Активно",
		WIZARD_STEP_INACTIVE: "Неактивно",
		WIZARD_STEP_ARIA_LABEL: "Стъпка {0}",
		WIZARD_NAV_ARIA_ROLE_DESCRIPTION: "Асистент",
		WIZARD_NAV_STEP_DEFAULT_HEADING: "Стъпка",
		VSD_DIALOG_TITLE_SORT: "Настройки на показването",
		VSD_SUBMIT_BUTTON: "ОК",
		VSD_CANCEL_BUTTON: "Отмяна",
		VSD_RESET_BUTTON: "Повторно задаване",
		VSD_SORT_ORDER: "Последователност на сортиране",
		VSD_FILTER_BY: "Филтриране по",
		VSD_SORT_BY: "Сортиране по",
		VSD_ORDER_ASCENDING: "Възходящ",
		VSD_ORDER_DESCENDING: "Низходящо",
		IM_TITLE_BEFORESEARCH: "Нека потърсим някакви резултати",
		IM_SUBTITLE_BEFORESEARCH: "Започнете като зададете вашите критерии за търсене.",
		IM_TITLE_NOACTIVITIES: "Още не сте добавили никакви дейности",
		IM_SUBTITLE_NOACTIVITIES: "Желаете ли да добавите дейност сега?",
		IM_TITLE_NODATA: "Още няма данни",
		IM_SUBTITLE_NODATA: "Когато има, ще ги видите тук",
		IM_TITLE_NOMAIL: "Няма нова поща",
		IM_SUBTITLE_NOMAIL: "Проверете отново по-късно.",
		IM_TITLE_NOENTRIES: "Още няма записи",
		IM_SUBTITLE_NOENTRIES: "Когато има, ще ги видите тук.",
		IM_TITLE_NONOTIFICATIONS: "Нямате нови известия",
		IM_SUBTITLE_NONOTIFICATIONS: "Проверете отново по-късно.",
		IM_TITLE_NOSAVEDITEMS: "Още не сте добавили никакви фаворити",
		IM_SUBTITLE_NOSAVEDITEMS: "Желаете ли сега да създадете списък с предпочитаните от вас позиции?",
		IM_TITLE_NOSEARCHRESULTS: "Не са открити резултати",
		IM_SUBTITLE_NOSEARCHRESULTS: "Опитайте да промените критериите си за търсене.",
		IM_TITLE_NOTASKS: "Нямате нови задачи",
		IM_SUBTITLE_NOTASKS: "Когато имате, ще ги видите тук.",
		IM_TITLE_UNABLETOLOAD: "Невъзможно зареждане на данни",
		IM_SUBTITLE_UNABLETOLOAD: "Проверете връзката си с Интернет. Ако това не помогне, опитайте да презаредите. Ако и това не разреши проблема, свържете се с администратора си.",
		IM_TITLE_UNABLETOUPLOAD: "Невъзможно качване на данни",
		IM_SUBTITLE_UNABLETOUPLOAD: "Проверете интернет връзката, формата и размера на файла. Ако проблемът не е в тях, свържете се с вашия администратор."
	};

	exports.default = messagebundle_bg;

});
