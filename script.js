function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'Currículo - Dérick Campos Santos.pdf'; 
    link.download = 'Curriculo.pdf';  
    link.click();  
}