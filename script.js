function checkInstruction() {
    const input = document.getElementById('instructionInput').value.toLowerCase();
    const correctInstruction = "dünyanın en güzel kadınına";
    if (input === correctInstruction) {
        window.location.href = 'sarki.html';
    } else {
        document.getElementById('feedback').classList.remove('hidden');
    }
}

window.onload = function() {
    const audio = document.getElementById('audio');
    const effectContainer = document.getElementById('effectContainer');
    if (audio && effectContainer) {
        audio.classList.remove('hidden');
        audio.play();
        effectContainer.classList.remove('hidden');
        audio.onended = function() {
            effectContainer.classList.add('hidden');
        };
    }
}
