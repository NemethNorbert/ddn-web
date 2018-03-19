export const API_URL = "http://localhost:7010/api";
export const API_LIST_URL = `${API_URL}/agents`;
export const API_LIST_DBS_URL = `${API_URL}/databases`;

// Below URLs will always need to be processed
export const API_EXTEND_DB_URL = `${API_URL}/databases/%d/expiry/extend/%d/%s`;
export const API_DELETE_DB_URL = `${API_URL}/databases/%d`;
export const API_ACCESS_INFO_URL = `${API_URL}/databases/%d/accessinfo`;
export const API_DATABASE_INFO_URL = `${API_URL}/databases/%d`;

export const DAYS = "days";
export const MONTHS = "months";
export const YEARS = "years";

export const DATE_FORMAT = "mmmm d, yyyy";

export const USER_EMAIL = "daniel.javorszky@liferay.com";
