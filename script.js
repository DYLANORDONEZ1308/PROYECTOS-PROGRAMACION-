function calculateLove(){
    const NAME1 = document.getElementById("NAME1").value;
    const NAME2 = document.getElementById("NAME2").value;

    if (NAME1 && NAME2) {
        const hash = (NAME1 + NAME2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const lovePorcentage = hash % 101;
        document.getElementById("result").style.color = 'green';
        document.getElementById("result").textContent = `Tienes un ${lovePorcentage}% de compatibilidad!`; // Usar backticks
    } else {
        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = 'Por favor, ingresa ambos nombres';
    }
}