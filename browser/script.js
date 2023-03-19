// const { createWorker } = Tesseract;
// const worker = createWorker({
//     workerPath: '../node_modules/tesseract.js/dist/worker.min.js',
//     langPath: '../lang-data',
//     corePath: '../node_modules/tesseract.js-core/tesseract-core.wasm.js',
//     logger: m => console.log(m),
// });
//
// (async () => {
//     await worker.load();
//     await worker.loadLanguage('ukr');
//     await worker.initialize('ukr');
//     const { data: { text } } = await worker.recognize('../images/img.png');
//     document.getElementById("output").innerHTML = text.replace(/\n/g, '<br>');
//     await worker.terminate();
// })();



// Коли користувач вибирає файл, цей код зберігає його в змінну file
var file;
$('#file-input').on('change', function() {
    file = this.files[0];
});

// Коли користувач натискає кнопку "Розпізнати текст", цей код викликає Tesseract.js
$('#recognize-button').on('click', function() {
    Tesseract.recognize(file, { lang: 'ukr' })
        .progress(function(message) {
            // Виводимо повідомлення про стан розпізнавання (наприклад, "розпізнавання в процесі...")
            console.log(message);
        })
        .catch(function(error) {
            // Виводимо повідомлення про помилку розпізнавання
            console.error(error);
        })
        .then(function(result) {
            // Виводимо результат розпізнавання в HTML-елемент з ідентифікатором "result"
            $('#result').text(result.text);
        });
});





























// const img_url = document.querySelector('#img-url'),
//     upload_file_btn = document.querySelector('#upload-file-btn'),
//     copy_text = document.querySelector('#copy-text'),
//     img_result = document.querySelector('#img-result'),
//     converted_text = document.querySelector('#converted-text');
//
//
// img_url.onclick = () => {
//     img_url.select();
// }
//
// copy_text.onclick = () => {
//     copy_text.setAttribute('title', "Copied.");
//     setTimeout(() => {
//         copy_text.setAttribute('title', "Copy text.");
//     }, 2000);
//
//     if (converted_text.value != '') {
//         navigator.clipboard.writeText(converted_text.value);
//     }
// }
//
// img_url.addEventListener('change', createFile);
// upload_file_btn.addEventListener('change', displayImage);
//
// async function createFile() {
//     if (this.value != '') {
//         img_result.src = this.value;
//
//         await fetch(this.value)
//             .then(res => res.blob())
//             .then(blob_file => {
//                 let file = new File([blob_file], blob_file.name, { type: blob_file.type });
//                 recognizeText(file);
//             })
//
//     }
// }
//
// function displayImage() {
//     const reader = new FileReader();
//     reader.onload = () => {
//         img_result.src = reader.result;
//     }
//     reader.readAsDataURL(this.files[0]);
//     recognizeText(this.files[0]);
// }
//
// function recognizeText(file) {
//     Tesseract.recognize(file)
//         .then(result => {
//             converted_text.value = result.text;
//         })
// }
