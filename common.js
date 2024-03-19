// function eatApple(callback) {
//     setTimeout(() => {
//         callback();
//     }, 10000);
// }

// eatApple(function() {
//     alert('delicious!');
// });

// let eatApple = function() {
//     alert('delicious!');
// }

// eatApple();

let comments = document.getElementById('Comments');
let form = document.getElementById('ChatForm');
let input = document.getElementById('ChatInput');
let message = '';

input.addEventListener('input', function(event) {
    message = event.target.value;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    comments.innerHTML = `
        ${comments.innerHTML}
        <div class="CommentWrapper CommentWrapper--Me">
            <div class="Comment Comment--Me">
                ${message}
            </div>
        </div>
    `;

    setTimeout(function() {
        comments.innerHTML = `
            ${comments.innerHTML}
            <div class="CommentWrapper CommentWrapper--You">
                <div class="Comment Comment--You">
                    Nice to meet you.
                </div>
            </div>
        `;
    }, 3000);
});