let input = document.getElementById('MessageInput');

let userComment = '';

input.addEventListener('input', function(event) {
  userComment = event.target.value;
});

input.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    let talks = document.getElementById('Talks');
    let wrapper = document.getElementsByClassName('Talks__Me').item(0).cloneNode();
    wrapper.innerHTML = `<div class="Comment">${userComment}</div>`;
  
    talks.append(wrapper);
    input.value = '';
  }
});
