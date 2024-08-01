window.startCamera = () => {
    navigator
        .mediaDevices
        .getUserMedia({
            video: {
                facingMode: 'environment',
                width: {
                    max: 1920,
                    ideal: 1024
                },
                height: {
                    max: 1080,
                    ideal: 768
                }
            }
        })
        .then((stream) => {
            document.getElementById('blazor-video').srcObject = stream;
        });
}

window.stopCamera = () => {
    const videoPreview = document.getElementById('blazor-video');

    if (videoPreview.srcObject) {
        const stream = videoPreview.srcObject;
        stream
            .getTracks()
            .forEach((track) => track.stop());
    }
}

window.takePhoto = () => {
    const videoPreview = document.getElementById('blazor-video');
    const canvas = document.getElementById('blazor-canvas');

    canvas.width = videoPreview.videoWidth;
    canvas.height = videoPreview.videoHeight;
    const context = canvas.getContext('2d');
    
    context.drawImage(videoPreview, 0, 0);
}

window.savePhoto = (fileName) => {
    const canvas = document.getElementById('blazor-canvas');
    const link = document.createElement('a');
    
    link.setAttribute('download', fileName);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}








