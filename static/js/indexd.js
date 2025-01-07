 
    const result = document.querySelector('#result');
    const btn = document.querySelector('#dbtn');
    const symptomsForm = document.querySelector('#symptomsForm');
    const symptomsInput = document.querySelector('#symptoms');

    // Hide result initially
    result.style.display = 'none';
     
  let symptoms=  symptomsInput.addEventListener('change',    function(event){
        let sympt=event.target.value;
        return sympt;
    }
    );
    console.log(symptoms)
    // Handle form submission
    symptomsForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the symptoms from the input field
        
        console.log(symptoms)

        if (!symptoms) {
            alert("Please enter some symptoms.");
            return;
        }

        // Create FormData object to send symptoms
        const formData = new FormData();
        formData.append('symptoms', symptoms);

        // Send the symptoms data to the server
        fetch('/predict', {
            method: 'POST',
            body: formData, // Send form data (symptoms)
        })
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            // Display the result after receiving the response
            result.style.display = 'block';
            result.innerHTML = `
                <h2>Predicted Disease: ${data.predicted_disease}</h2>
                <p><strong>Description:</strong> ${data.dis_des}</p>
                <p><strong>Prevention:</strong> ${data.dis_pre}</p>
                <p><strong>Medicine:</strong> ${data.dis_med}</p>
                <p><strong>Diet:</strong> ${data.dis_diet}</p>
                <p><strong>Workout:</strong> ${data.dis_wrkout}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            result.style.display = 'block';
            result.textContent = 'Error: Unable to process your request. Please try again.';
        });
    });
 