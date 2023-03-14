const { createWorker } = Tesseract;
const worker = createWorker({
    workerPath: '../node_modules/tesseract.js/dist/worker.min.js',
    langPath: '../lang-data',
    corePath: '../node_modules/tesseract.js-core/tesseract-core.wasm.js',
    logger: m => console.log(m),
});

(async () => {
    await worker.load();
    await worker.loadLanguage('ukr');
    await worker.initialize('ukr');
    const { data: { text } } = await worker.recognize('../images/img.png');
    document.getElementById("output").innerHTML = text.replace(/\n/g, '<br>');
    await worker.terminate();
})();