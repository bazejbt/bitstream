// const submitBtn = document.getElementById('submit-btn');

// submitBtn.addEventListener('click', () => {
//     const formValue = document.getElementById('file-upload').files[0];
//     if (!formValue) {
//         return;
//     }
//     const formData = new FormData();
//     formData.append('file', formValue);
//     console.log(formData);
// });

const generateBtn = document.getElementById('generate-btn');
const targetSection = document.getElementById('generated-section');

const fileUploadInput = document.querySelector('#file-upload');

generateBtn.addEventListener('click', () => {
  fetch('/api/upload-cv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileName: fileUploadInput.files[0].name,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      targetSection.innerHTML = response.value;
    })
    .catch((error) => {
      alert(error);
    });
});
