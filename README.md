# **Medicine Recommendation and Pneumonia Detection System**

## **Overview**
The **Medicine Recommendation and Pneumonia Detection System** is an integrated healthcare solution that provides personalized medicine recommendations based on symptoms and predicts pneumonia from X-ray images using deep learning. The project combines a **Support Vector Machine (SVM)** model for disease prediction and **VGG19** for pneumonia detection, with a user-friendly web interface for interaction.

## **Features**
1. **Medicine Recommendation System**  
   - Predicts diseases based on user-input symptoms using an **SVM model**.
   - Provides personalized suggestions, including:
     - **Medicines** tailored to the predicted disease.
     - **Workout routines** for disease management.
     - **Dietary recommendations** to aid recovery.
     - **Precautionary measures** to prevent disease progression.

2. **Pneumonia Detection**  
   - Uses a **pretrained VGG19 deep learning model** to predict whether an X-ray image indicates pneumonia or not.
   - Classifies images into two categories: **Pneumonia** and **Normal**.

3. **Responsive Web Interface**  
   - Built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**.
   - Allows users to:
     - Input symptoms for disease prediction and medicine recommendations.
     - Upload X-ray images for pneumonia detection.

## **Technologies Used**
- **Backend**: Python, SVM, TensorFlow, Keras
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Deep Learning**: VGG19 (pretrained model)
- **Libraries/Tools**: NumPy, Pandas, OpenCV, Flask

## **Results**

Here is a demonstration video of the **Medicine Recommendation and Pneumonia Detection System** in action:

(https://github.com/vivek-info-tech/heath-center/blob/main/uploads/images_1.jpg)

Alternatively, you can download and watch the video directly:

(./heath-center/blob/main/uploads/images_1.jpg)
(./vivek-info-tech/heath-center/blob/main/uploads/images_1.jpg)
(./main/uploads/images_1.jpg)
(./blob/main/uploads/images_1.jpg)


## **Installation & Setup**
1. Clone the repository:
   ```bash
   git clone  https://github.com/vivek-info-tech/health-center.git
2. Navigate to the project directory:
   ```bash
   cd health-center
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
4. Run the application:
   ```bash
   python main.py


## **Usage**

1. **Medicine Recommendation System**:
   - Open the web application in your browser.
   - Input symptoms into the provided form.
   - The system will predict the disease based on the input and suggest:
     - **Medicines** tailored to the predicted disease.
     - **Workout routines** for disease management.
     - **Dietary recommendations** to aid recovery.
     - **Precautionary measures** to prevent the disease from worsening.

2. **Pneumonia Detection**:
   - Open the web application.
   - Upload an X-ray image by clicking the upload button.
   - The system will process the image and predict whether the X-ray shows signs of **Pneumonia** or **Normal**.

---

## **Contributing**

1. **Fork the repository**:
   - Click the "Fork" button at the top right of this page to create your own copy of the repository.

2. **Clone the repository**:
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/yourusername/medicine-pneumonia-detection.git
     ```

3. **Create a new branch**:
   - Create a new branch for your changes:
     ```bash
     git checkout -b feature-branch
     ```

4. **Make changes and commit**:
   - Make the necessary changes and commit them:
     ```bash
     git commit -m "Add a new feature"
     ```

5. **Push to your forked repository**:
   - Push your changes to your forked repository:
     ```bash
     git push origin feature-branch
     ```

6. **Create a pull request**:
   - Open a pull request to the main repository from your fork to propose your changes.

---

**Note**: Please ensure that your code adheres to the project's coding style and includes appropriate tests (if applicable). All contributions are welcome!
