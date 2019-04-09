/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
function initMenus($items) {
	this._showPopupForMenu = function(event) {
		var $popupContainer = document.querySelector('.nav .container .nav__bg-wrapper')
		var $popup = $popupContainer.children[0]
		var $menu = event.target.querySelector('ul')
		var menuRect = $menu.getBoundingClientRect()
		var popupRect = $popupContainer.getBoundingClientRect()

		// calc the left position (menu have 15px extra padding)
		var leftPos = menuRect.left + 15 - popupRect.left
		$popup.style.width = menuRect.width - 15
		$popup.style.height = menuRect.height
		$popup.style.transform = `translateX(${leftPos}px)`
		$popup.style.visibility = 'visible'
		$popup.style.opacity = 1
	};

	this._hideMenuPopup = function($event) {
		var $popupContainer = document.querySelector('.nav .container .nav__bg-wrapper')
		var $popup = $popupContainer.children[0]
		$popup.style.visibility = 'hidden'
		$popup.style.height = 0
		$popup.style.opacity = 0
	};

	// bind mouse events to menu items
	$items.forEach(function($item) {
		$item.addEventListener('mouseenter', this._showPopupForMenu);
		$item.addEventListener('mouseleave', this._hideMenuPopup);
	});
}

initMenus(document.querySelectorAll('.nav .container .nav__sections-wrapper > ul .nav__section'))