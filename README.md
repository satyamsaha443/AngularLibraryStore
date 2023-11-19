createChart(chartId: string, data: number[], bgColor: string): void {
  const canvas = document.getElementById(chartId) as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          label: '',
          data: data,
          backgroundColor: bgColor,
          borderColor: bgColor,
        }]
      }
    });
  } else {
    console.error('Could not get context for chart with id:', chartId);
  }
}