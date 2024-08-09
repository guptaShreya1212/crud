/*document.getElementById("phone").addEventListener("input",function(event){
    const phoneInput=event.target;
    const phoneError=document.getElementById("phoneError");
    const phonePattern = /^\d*$/;

    if (phoneInput.value === '') {
        phoneError.textContent = '';
      } else if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Please enter only numbers.';
      } else if (phoneInput.value.length !== 10) {
        phoneError.textContent = 'Phone number must be exactly 10 digits.';
      } else {
        phoneError.textContent = '';
      }
    })
*/

   if(window.location.pathname=='/'){
    let btns= document.querySelectorAll(".delete_btn");
    
    btns.forEach(btn=>{
      btn.addEventListener("click", ()=>{
        if(confirm("are you really want to delete user?")){
          fetch(`http://localhost:3000/api/users/${btn.dataset.id}`,{method:'DELETE'})
          .then(response =>{
            if(response.ok){
              window.location.href='/';
            }
            else {
              alert('Failed to delete user');
          }
          })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while deleting the user.');
      });
    }
      })
    })
  }
          
      
      
    
  