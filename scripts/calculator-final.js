

      // The algorith for a calculator
      // 1. create buttons for the numbers/values.
      // 2. Nest 4 buttons in a paragraph with the exception of the clear button.
      // 3. create a variable and assign to this variable an empty string to store the string of calculations.
      // 4. create a function to resuse code and call the function to the various clickon buttons and assign the parameter value for the function.
      // 5. display the calculations on the page by making use of an extra paragraph element.
      // 6. add local storge to permanently store your calculations.
      // 7. insert local storage in both = and clear buttons/.(setItems.


      
        // this empty string '' varibale will store the calculations.

        let calculation =  localStorage.getItem('calculation') || '';

        displayUpdate();

        

        function updateCalculation(number){

            calculation += number;

            displayUpdate();

            // the function displayUpdate() is inserted/nested into the function updateCalculation() to affect the entire buttons called by the function updateCalculation(); with the exception of the '= ' and 'clear button ' which is not within the scope of this function and must be inserted for the buttons to be also displayed on the page.

            localStorage.setItem('calculation', calculation);

            //the object localStorage in this function is only within the scope of this function and does not affect the '=' and the 'clear ' buttons. Hence, a local storage must be inserted into these buttons for absolute functionality.


        }

           
        function displayUpdate(){

          document.querySelector('.js-calculation')
            .innerHTML = calculation;
        }