import { useState } from 'react';

function Notes() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFiles(prevFiles => [...prevFiles, selectedFile]);

    // Save the file to local storage
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      const fileData = {
        name: selectedFile.name,
        size: selectedFile.size,
        dataURL: reader.result
      };
      const storedFiles = JSON.parse(localStorage.getItem('files')) || [];
      const updatedFiles = [...storedFiles, fileData];
      localStorage.setItem('files', JSON.stringify(updatedFiles));
    };
  };

  const handleFileDownload = (file) => {
    const a = document.createElement('a');
    a.href = file.dataURL;
    a.download = file.name;
    a.click();
  };

  return (
    <div className="text-center container mx-auto my-28 p-2 items-center justify-center">
      <div className="bg-yellow-400 w-2/4 p-6 rounded-lg shadow-md mb-10 mx-auto">
        <h1 className="text-3xl font-bold mb-6">PDF File Manager</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6">
        {files.map((file, index) => (
          <div key={index} className="bg-gray-300 rounded-lg shadow-md m-6 p-4">
            <p className="font-bold">{file.name}</p>
            <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            <button
              onClick={() => handleFileDownload(file)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
