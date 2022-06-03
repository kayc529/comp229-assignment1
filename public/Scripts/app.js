/* File name: app.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 3 2022 */

// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log('App Started...');
  }

  window.addEventListener('load', Start);

  let id = document.getElementById('submit-btn');

  //submit contact form
  if (id) {
    id.onclick = function (e) {
      e.preventDefault();
      let name = document.getElementById('contact-name').value;
      let email = document.getElementById('contact-email').value;
      let content = document.getElementById('contact-content').value;

      if (!name || !email || !content) {
        alert('Please fill in the form!');
        return;
      }

      alert(`Thank you ${name}! Your form is submitted!`);
      window.location.href = '/';
    };
  }
})();
