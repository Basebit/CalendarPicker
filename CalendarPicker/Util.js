/**
 * Calendar Picker Component
 * By Stephani Alves - April 11, 2015
 */
'use strict';

module.exports = {
  //WEEKDAYS: [
  //  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  //],
  WEEKDAYS: [
    '日', '一', '二', '三', '四', '五', '六'
  ],
  //MONTHS: [
  //  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  //  'August', 'September', 'October', 'November', 'December'
  //],
  MONTHS: [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月',
    '8月', '9月', '10月', '11月', '12月'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    var lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
  PREVIOUS: '<<',
  NEXT: '>>',
};
