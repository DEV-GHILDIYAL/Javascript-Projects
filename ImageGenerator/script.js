const generateButton = document.getElementById('generateButton');
const textPrompt = document.getElementById('textPrompt');
const generatedImage = document.getElementById('generatedImage');

const apiKey = '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'; // Replace with your Hugging Face API key
const modelEndpoint = 'https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4'; // Example endpoint for Stable Diffusion

generateButton.addEventListener('click', async () => {
    const prompt = textPrompt.value;
    
    if (prompt) {
        const response = await fetch(modelEndpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: prompt
            })
        });

        const result = await response.blob();
        const imageUrl = URL.createObjectURL(result);
        generatedImage.src = imageUrl;
        generatedImage.style.display = 'block';
    } else {
        alert('Please enter a prompt.');
    }
});
