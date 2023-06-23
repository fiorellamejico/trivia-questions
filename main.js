// check answers to questions
document.addEventListener('DOMContentLoaded',function(){
    let correct_button = document.querySelector("#correct");
    let incorrect_buttons = document.querySelectorAll(".incorrect");
    let message = document.querySelector("#message");
    

    correct_button.addEventListener('click',function(){
        correct_button.style.backgroundColor = 'green';
        message.innerHTML = 'Correct';
    });

    for (let i = 0; i < incorrect_buttons.length; i++)
    {
        incorrect_buttons[i].addEventListener('click',function(){
            incorrect_buttons[i].style.backgroundColor = 'red';
            message.innerHTML = 'Incorrect';
        })
    }

    document.querySelector("#question2").addEventListener('click',function(){
        let input = document.querySelector("input");
        let message2 = document.querySelector("#message2");
        if (input.value.toLowerCase() == "switzerland")
        {
            input.style.color = 'green';
            message2.innerHTML = 'Correct';
        }
        else
        {
            input.style.color = 'red';
            message2.innerHTML = 'Incorrect';
        }
    })

});