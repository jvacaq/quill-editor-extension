// background.js
(async () => {
  try {
    await browser.composeScripts.register({
      id: "quill-editor",
      js: [
        { file: "content-scripts/quill/quill.js" },
        { file: "content-scripts/quill-inject.js" }
      ],
      css: [
        { file: "content-scripts/quill/quill.snow.css" }
      ],
      runAt: "document_idle"
    });
    console.log("Quill compose script registrado correctamente");
  } catch (e) {
    console.error("Error registrando compose script:", e);
  }
})();

