// popup.js
(async () => {
  // Inicializar Quill
  const quill = new Quill('#quill-editor', {
    theme: 'snow',
    modules: { toolbar: [['bold', 'italic'], ['link', 'image']] }
  });

  // Obtener el tab activo de composición
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const details = await browser.compose.getComposeDetails(tab.id);
  // Cargar contenido existente
  quill.root.innerHTML = details.body;

  // Manejar clic en "Guardar"
  document.getElementById('save').addEventListener('click', async () => {
    const newHtml = quill.root.innerHTML;
    // Reemplazar el cuerpo en Thunderbird
    await browser.compose.setComposeDetails(tab.id, { body: newHtml });
    window.close();
  });
})();
