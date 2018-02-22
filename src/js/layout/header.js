import $ from 'jquery';

$('.header__dropdown').mouseenter(showDropdownContent).mouseleave(showDropdownContent);

function showDropdownContent(event) {
    $(event.currentTarget).children('.header__dropdown__links').toggleClass('header__dropdown__links--visible');        
}