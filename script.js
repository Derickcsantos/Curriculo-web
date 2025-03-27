function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'Profile (10).pdf'; 
    link.download = 'Curriculo.pdf';  
    link.click();  
}