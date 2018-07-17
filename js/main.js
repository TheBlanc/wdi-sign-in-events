window.addEventListener('DOMContentLoaded', function() {


  signInButton = document.querySelector('button.signin')

  modal = document.querySelector('div.modal');

  form = document.querySelector('form.getstarted');

  closeButton = document.querySelector('button.close');

  submitButton = document.querySelector('button.submit');

  userName = document.querySelector('input#user');

  userPass = document.querySelector('input#pass');

  signInButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    form.reset();
    userName.classList.remove('error');
    userPass.classList.remove('error');
  });


  submitButton.addEventListener('click', function() {
    if ( userName.value.length === 0 ) {
      userName.classList.add('error');
    }
    if ( userPass.value.length === 0 ) {
      userPass.classList.add('error');
    }
    if ( userName.value.length > 0 && userPass.value.length > 0 ) {
      modal.style.display = 'none';
      form.reset();
      userName.classList.remove('error');
      userPass.classList.remove('error');
    }

  });

  userName.addEventListener('focus', function() {
    userName.classList.remove('error');
  });

  userPass.addEventListener('focus', function() {
    userPass.classList.remove('error');
  });

  modal.addEventListener('click', function(event) {
    if ( event.target !== form && event.target !== userName && event.target !== userPass && submitButton !== event.target) {
      modal.style.display = 'none';
    }
  });

  submitButton.addEventListener('click', function(event) {
    console.log(event);
  });


});
