public loadScripts(): void {
  const dynamicScripts: string[] = [
    // your scripts
  ];

  dynamicScripts.forEach(script => {
    if (!document.querySelector(`script[src="${script}"]`)) {
      const node: HTMLScriptElement = document.createElement('script');
      node.src = script;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('app-root')[0].appendChild(node);
    }
  });
}