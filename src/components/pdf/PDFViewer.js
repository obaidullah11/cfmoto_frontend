import React, { useEffect } from 'react';
import { pdfjs } from 'pdfjs-dist';

import 'tailwindcss/tailwind.css';

const PDFViewer = ({ url }) => {
  useEffect(() => {
    const loadPDF = async () => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

      const loadingTask = pdfjs.getDocument(url);
      const pdf = await loadingTask.promise;

      const container = document.getElementById('pdfContainer');

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext);
        container.appendChild(canvas);
      }
    };

    loadPDF();
  }, [url]);

  return <div id="pdfContainer" className="w-full h-screen"></div>;
};

export default PDFViewer;
