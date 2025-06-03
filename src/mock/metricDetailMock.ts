// /src/mock/metricDetailMock.ts
export const mockMetricDetail = {
  title: 'Total Sales',
  currentValue: '$502.4k',
  percentageChange: '-11.1%',
  insight:
    'The trend for Total Sales changed 8 days ago and is now increasing at a slower rate.',
  overviewData: [2100, 3000, 4500, 502400],
  breakdown: {
    Category: [
      {label: 'Cycle', value: 166500},
      {label: 'Men', value: 150300},
      {label: 'Women', value: 115900},
      {label: 'Gear', value: 39300},
      {label: 'Kids', value: 29200},
    ],
    'Product Name': [
      {label: 'STROMER ST3 Electric', value: 18900},
      {label: 'Cannondale Habit 1', value: 9500},
    ],
    'Product Type': [
      {label: 'gear-cycling-bikes', value: 164400},
      {label: 'men-jackets-lightweig', value: 32700},
    ],
    Subcategory: [
      {label: 'Sub A', value: 12000},
      {label: 'Sub B', value: 10000},
    ],
  },
};
