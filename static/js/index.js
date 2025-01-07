



document.addEventListener("DOMContentLoaded", function () {



    
const imagesection=document.querySelector('.image-section');
const loader=document.querySelector('.loader');
const result=document.querySelector('#result');
const btn=document.querySelector('#btn-predict');
const imageView=document.querySelector('#imageView');
const imageUpload=document.querySelector('#imageUpload');



    // Initial state

    imagesection.style.display = 'none'; // Hide image section initially
    loader.style.display = 'none'; // Hide loader initially
    result.style.display = 'none'; // Hide result initially
    btn.style.display = 'none'; // Hide the predict button initially

    // Function to preview the image once it's selected
    function readUrl(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                imageView.setAttribute('src', e.target.result);  // Display image preview
            }
            reader.readAsDataURL(input.files[0]); // Read the selected file
        }
    }

    // Trigger when an image file is selected for upload
    imageUpload.addEventListener('change', function () {
        imagesection.style.display = 'block'; // Show the image section
        btn.style.display = 'inline-block';  // Show the predict button
        result.textContent = ''; // Clear previous result
       result.style.display = 'none'; // Hide the result initially
        readUrl(this); // Call the function to preview the image
    });

    // Predict when the "Predict" button is clicked
    btn.addEventListener('click', function () {
        let form_data = new FormData(); // Create FormData object to send the image
        form_data.append('file', imageUpload.files[0]); 
        // Show loading animation
        this.style.display = 'none';  // Hide the predict button during prediction
        loader.style.display = 'block';  // Show loader animation

        // Send the image data to the server for prediction
        fetch('/Pneumonia', {
            method: 'POST',
            body: form_data, // FormData containing the uploaded image
        })
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            // Hide the loader once the response is received
            loader.style.display = 'none';
            
            // Show the result after the prediction
            result.style.display = 'block';
            
            // Display the result (prediction)
            result.textContent = 'Prediction: ' + data.result;  // Display the result returned from server

            // Log success (optional for debugging)
            console.log('Prediction Success:', data.result);
        })
        .catch(error => {
            // Handle error scenario
            loader.style.display = 'none';
            result.style.display = 'block';
            result.textContent = 'Error: Unable to process the image';
            console.error('Error:', error);
        });
    });
});
