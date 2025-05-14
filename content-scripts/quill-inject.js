(function() {
  // Espera a que cargue la ventana de composición
  window.addEventListener('load', () => {
    // Localiza el iframe o el div del editor HTML
    const editorIframe = document.querySelector('#content-frame');
    if (!editorIframe) return;

    // Crea un contenedor para Quill encima del editor nativo
    const quillContainer = document.createElement('div');
    quillContainer.id = 'quill-editor';
    quillContainer.style.height = '400px';

    // Inserta el contenedor antes del iframe
    editorIframe.parentNode.insertBefore(quillContainer, editorIframe);
    // Oculta el iframe nativo
    editorIframe.style.display = 'none';

    // Inicializa Quill
    const quill = new Quill('#quill-editor', {
      theme: 'snow',
      modules: {
        toolbar: [['bold', 'italic'], ['link', 'image']]
      }
    });

    // Cargar contenido HTML existente en Quill
    quill.root.innerHTML = editorIframe.contentDocument.body.innerHTML;

    // Escucha evento de envío para volcar HTML de Quill
    document.querySelector('#button-send').addEventListener('click', () => {
      const html = quill.root.innerHTML;
      // Vuelca al iframe del editor nativo
      editorIframe.contentDocument.body.innerHTML = html;
    });
  });
})();
