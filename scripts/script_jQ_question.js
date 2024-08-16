$(function () {
      $("form").submit(function(e) {
            e.preventDefault();           // предотвращение перезагрузки страницы (форма не отправляет данные самостоятельно)

            let trueSend = true;    //флаг для отправки формы
            $("span").remove();     //убираем предупреждения при отправке формы

            // проверка имени, поля "Задайте вопрос"
            $("#myname,textarea").each( function() {
                  const nameRegExp = /[а-яёa-z']+\s*/gi;
                  let entered = $(this).val();

                  if($(this).val().length === 0 || !nameRegExp.test(entered) ) {
                        $(this).css("border","2px solid var(--text_error_color)");
                        $(this).after("<span style='color:var(--text_error_color)'>Пожалуйста, корректно заполните поле</span>");
                        trueSend = false;
                  }
                  else {
                        $(this).css("border","2px solid var(--text_highlight_color)");
                  } 
            });

            // Проверка e-mail
            const mailRegExp = /^[a-z._\-\d]+@[a-z]+.[a-z]{2,6}$/gi;
            let enteredMail = $("#myemail").val(); 

            if($("#myemail").val().length === 0 || !mailRegExp.test(enteredMail) ) {
                  $("#myemail").css("border","2px solid var(--text_error_color)");
                  $("#myemail").after("<span style='color:var(--text_error_color)'>Пожалуйста, корректно заполните поле</span>");
                  trueSend = false;
            }
            else {
                  $("#myemail").css("border","2px solid var(--text_highlight_color)");
            }

            //Проверка даты (оставить пустое поле или ввести корректную информацию)
            const dataRegExp = /^202[2-9]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/gi;
            let enteredData = $("#dt").val();

            if($("#dt").val().length !== 0 && !dataRegExp.test(enteredData) ) {
                  $("#dt").css("border","2px solid var(--text_error_color)");
                  $("#dt").after("<span style='color:var(--text_error_color)'>Пожалуйста, корректно заполните дату</span>");
                  trueSend = false;
            }
            else {
                  $("#dt").css("border","2px solid var(--text_highlight_color)");
            }

            // если все поля заполнены верно
            if (trueSend) {
                  $(".question-form form").css("display", "none");
                  $(".question-form").css("border", "3px solid var(--text_error_color)");
                  $(".question-form").css("width", "45%");
                  $(".question-form").css("bottom", "90px");
                  $(".thanks").css("display", "block"); // вывод сообщения
                  $(".close-block").css("top", "10%");
            }
            return trueSend;
            
      });
})