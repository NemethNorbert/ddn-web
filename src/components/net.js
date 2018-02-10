import $ from 'jquery';

import {USER_EMAIL} from './consts'

const defAjax = {
    dataType: "json",
    type: "GET",
    beforeSend: request => {
        request.setRequestHeader("Authorization", USER_EMAIL);
    }
}

export default function ajax(url, changedObj = {}) {
    return $.ajax(url, $.extend(defAjax, changedObj));
}
