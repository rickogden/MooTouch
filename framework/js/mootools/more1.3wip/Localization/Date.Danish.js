/*
---

script: Date.Danish.js

name: Date.Danish

description: Date messages for Danish.

license: MIT-style license

authors:
  - Martin Overgaard
  - Henrik Hansen

requires:
  - /Lang

provides: [Date.Danish]

...
*/
 
MooTools.lang.set('da-DK', 'Date', {

	months: ['Januar', 'Februa', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
	days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
	//culture's date order: DD/MM/YYYY
	dateOrder: ['date', 'month', 'year'],

	AM: 'AM',
	PM: 'PM',

	shortDate: '%d-%m-%Y',
	shortTime: '%H:%M',

	/* Date.Extras */
	ordinal: function(dayOfMonth){
	  //1st, 2nd, 3rd, etc.
	  return (dayOfMonth > 3 && dayOfMonth < 21) ? 'th' : ['th', 'st', 'nd', 'rd', 'th'][Math.min(dayOfMonth % 10, 4)];
	},

	lessThanMinuteAgo: 'mindre end et minut siden',
	minuteAgo: 'omkring et minut siden',
	minutesAgo: '{delta} minutter siden',
	hourAgo: 'omkring en time siden',
	hoursAgo: 'omkring {delta} timer siden',
	dayAgo: '1 dag siden',
	daysAgo: '{delta} dage siden',
	weekAgo: '1 uge siden',
	weeksAgo: '{delta} uger siden',
	monthAgo: '1 måned siden',
	monthsAgo: '{delta} måneder siden',
	yearthAgo: '1 år siden',
	yearsAgo: '{delta} år siden',
	lessThanMinuteUntil: 'mindre end et minut fra nu',
	minuteUntil: 'omkring et minut fra nu',
	minutesUntil: '{delta} minutter fra nu',
	hourUntil: 'omkring en time fra nu',
	hoursUntil: 'omkring {delta} timer fra nu',
	dayUntil: '1 dag fra nu',
	daysUntil: '{delta} dage fra nu',
	weekUntil: '1 uge fra nu',
	weeksUntil: '{delta} uger fra nu',
	monthUntil: '1 måned fra nu',
	monthsUntil: '{delta} måneder fra nu',
	yearUntil: '1 år fra nu',
	yearsUntil: '{delta} år fra nu'

});
