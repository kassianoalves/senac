document.addEventListener('DOMContentLoaded', () => {
    const videoFileInput = document.getElementById('videoFile');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const uploadStep1 = document.getElementById('upload-step-1');
    const uploadStep2 = document.getElementById('upload-step-2');
    const videoDetailsForm = document.getElementById('videoDetailsForm');
    const videoTitleInput = document.getElementById('videoTitle');
    const videoCaptionInput = document.getElementById('videoCaption');
    const videoCategorySelect = document.getElementById('videoCategory');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');

    let selectedFile = null;

    // Enable/disable "Próximo" button based on file selection
    videoFileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            selectedFile = event.target.files[0];
            nextStepBtn.disabled = false;
        } else {
            selectedFile = null;
            nextStepBtn.disabled = true;
        }
    });

    // Move to step 2 (video details)
    nextStepBtn.addEventListener('click', () => {
        if (selectedFile) {
            uploadStep1.style.display = 'none';
            uploadStep2.style.display = 'block';
            // Pre-fill title with file name (optional)
            videoTitleInput.value = selectedFile.name.split('.').slice(0, -1).join('.');
        }
    });

    // Handle form submission (upload)
    videoDetailsForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert('Por favor, selecione um arquivo de vídeo primeiro.');
            return;
        }

        const videoMetadata = {
            title: videoTitleInput.value,
            description: videoCaptionInput.value,
            category: videoCategorySelect.value,
            // Add other metadata as needed, e.g., owner, channel
            owner: 'Current User', // Placeholder
            channel: 'My Channel', // Placeholder
            channelAvatar: 'https://via.placeholder.com/150', // Placeholder
        };

        try {
            // Assuming YouShipUploads is globally available from uploads.js
            const result = await YouShipUploads.saveUpload(selectedFile, videoMetadata);
            alert('Vídeo enviado com sucesso! ID: ' + result.id);
            // Redirect to home or a success page
            window.location.href = '../index.html';
        } catch (error) {
            console.error('Erro ao enviar vídeo:', error);
            alert('Ocorreu um erro ao enviar o vídeo. Por favor, tente novamente.');
        }
    });

    // Handle cancel button
    cancelUploadBtn.addEventListener('click', () => {
        // Clear selected file and redirect to home
        selectedFile = null;
        window.location.href = '../index.html';
    });
});
