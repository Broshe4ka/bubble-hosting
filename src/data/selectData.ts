export const selectData = [
  {
    id: 'cpu',
    title: 'Количество ядер vCPU:',
    range: {
      min: 2,
      max: 8,
      step: 1,
    },
  },
  {
    id: 'ram',
    title: 'Объем RAM DDR5:',
    range: {
      min: 2,
      max: 16,
      step: 1,
    },
  },
  {
    id: 'storage',
    title: 'Объем диска NVMe:',
    range: {
      min: 20,
      max: 160,
      step: 10,
    },
  },
];
