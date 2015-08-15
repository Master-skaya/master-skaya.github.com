---
layout: raw
---
var $contactForm = $('#regForm');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        {% assign regform = site.regform[0] %}
        url: '//formspree.io/'+'{{ regform.user }}'+'@'+'{{ regform.server }}',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert--loading">Данные отправляются…</div>');
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--success">Заявка зарегистрирована!</div>');
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Ошибка.</div>');
        }
    });
});
