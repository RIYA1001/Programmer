import { useState } from 'react';

function Notes() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileSave = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem('pdfData', reader.result);
    };
  };

  const handleFileDownload = () => {
    const pdfData = localStorage.getItem('pdfData');
    const a = document.createElement('a');
    a.href = pdfData;
    a.download = 'downloaded_pdf.pdf';
    a.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">PDF File Manager</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleFileSave}
            disabled={!file}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save to Local Storage
          </button>
          <button
            onClick={handleFileDownload}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download from Local Storage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
