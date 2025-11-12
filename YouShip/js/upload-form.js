document.addEventListener('DOMContentLoaded', () => {
    // Check login status
    const auth = localStorage.getItem('youshipAuth');
    if (!auth) {
        alert('Você precisa estar logado para fazer upload de vídeos.');
        window.location.href = 'login.html';
        return;
    }

    const videoFileInput = document.getElementById('videoFile');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const uploadStep1 = document.getElementById('upload-step-1');
    const uploadStep2 = document.getElementById('upload-step-2');
    const videoDetailsForm = document.getElementById('videoDetailsForm');
    const videoTitleInput = document.getElementById('videoTitle');
    const videoCaptionInput = document.getElementById('videoCaption');
    const videoCategorySelect = document.getElementById('videoCategory');
    const videoVisibilitySelect = document.getElementById('videoVisibility');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');

    let selectedFile = null;

    // Pre-fill user channel info
    try {
        const userRaw = localStorage.getItem('youshipUser');
        if (userRaw) {
            const user = JSON.parse(userRaw);
            if (user.channel && user.channel.name) {
                // Pre-fill channel name if available, but since form doesn't have channel field, maybe use in metadata
            }
        }
    } catch (e) {
        console.warn('Error parsing user data:', e);
    }

    // Enable/disable "Próximo" button based on file selection
    videoFileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (!file.type || !file.type.startsWith('video/')) {
                alert('Por favor, selecione um arquivo de vídeo válido.');
                selectedFile = null;
                nextStepBtn.disabled = true;
                event.target.value = ''; // Clear the input
                return;
            }
            selectedFile = file;
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
            visibility: videoVisibilitySelect.value,
            // Add other metadata as needed, e.g., owner, channel
            owner: auth, // Use actual auth
            channel: 'My Channel', // Placeholder, update with user channel
            channelAvatar: 'https://via.placeholder.com/150', // Placeholder
        };

        // Update channel from user data
        try {
            const userRaw = localStorage.getItem('youshipUser');
            if (userRaw) {
                const user = JSON.parse(userRaw);
                if (user.channel && user.channel.name) {
                    videoMetadata.channel = user.channel.name;
                }
                if (user.channel && user.channel.avatarDataUrl) {
                    videoMetadata.channelAvatar = user.channel.avatarDataUrl;
                } else if (user.avatarDataUrl) {
                    videoMetadata.channelAvatar = user.avatarDataUrl;
                }
            }
        } catch (e) {
            console.warn('Error parsing user data for metadata:', e);
        }

        try {
            // Assuming YouShipUploads is globally available from uploads.js
            const result = await YouShipUploads.saveUpload(selectedFile, videoMetadata);
            alert('Vídeo enviado com sucesso! ID: ' + result.id);
            // Redirect to channel page instead of home
            const inHtml = location.pathname.indexOf('/html/') !== -1;
            const channelTarget = inHtml ? 'channel.html' : 'html/channel.html';
            window.location.href = channelTarget;
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
