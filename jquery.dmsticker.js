/*
 * DM.Sticker v 0.1b
 * Библиотека для отображения "быстрых" сообщений в окне браузера
 *
 * Author: damirazo (http://www.damirazo.ru)
 *
 * API:
 * var sticker = $(selector).DMSticker({top: 0, left: 0});
 * sticker.setMessage({ message: 'тестовое сообщение' });
 *
 */

(function ($) {
    $.fn.DMSticker = function (position) {
        // Координаты контейнера по умолчанию
        if (!position) {
            position = {
                top: 0,
                left: 0
            }
        }
        // Объект контейнера
        var $container = $(this);
        // Задаем стили для контейнера
        $container.css('position', 'absolute');
        $.each(position, function (k, v) {
            $container.css(k, v);
        });
        // Отправка сообщения в контейнер
        this.setMessage = function (params) {
            // Задаем параметры по умолчанию
            params = $.extend({
                message: 'blank',
                type: 'error',
                timeout: 5000
            }, params);
            // Блок с сообщением
            var $message = $(document.createElement('div'));
            // Добавляем в блок с сообщением текстовую ноду
            $message.text(params.message);
            // Задаем для блока сообщения класс
            $message.addClass(params.type);
            // Отправляем блок с сообщением в контейнер
            $message.appendTo($container);
            // Анимируем блок с сообщением
            $message.fadeIn(500).delay(params.timeout).fadeOut(500, function () {
                $message.remove();
            });
        };

        return this;
    }
})(jQuery);