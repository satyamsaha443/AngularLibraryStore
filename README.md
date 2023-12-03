public loadScripts(): Promise<void> {
  const dynamicScripts: string[] = [
    // ... your scripts, including DataTables script
  ];

  const scriptPromises: Promise<void>[] = dynamicScripts.map(script => {
    if (!document.querySelector(`script[src="${script}"]`)) {
      const node = document.createElement('script');
      node.src = script;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';

      const scriptPromise = new Promise<void>((resolve) => {
        node.onload = () => resolve();
      });

      document.getElementsByTagName('app-root')[0].appendChild(node);
      return scriptPromise;
    } else {
      return Promise.resolve();
    }
  });

  return Promise.all(scriptPromises).then(() => {});
}

ngAfterViewInit() {
  this.loadScripts().then(() => {
    // Initialize DataTable here, after scripts are loaded
    // Example: $('#myDataTable').DataTable();
  });
}