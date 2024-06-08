import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const MyEchartComponent = ({ echartOptions }: { echartOptions: echarts.EChartsCoreOption }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const echartInstanceRef = useRef<echarts.ECharts | null>(null);

  // const echartOptions: EChartsOption = {
  //   xAxis: {
  //     // max: 'dataMax'
  //   },
  //   yAxis: {
  //     type: 'category',
  //     data: ['A', 'B', 'C', 'D', 'E'],
  //     inverse: true,
  //     animationDuration: 300,
  //     animationDurationUpdate: 300,
  //     max: 4 // only the largest 3 bars will be displayed
  //   },
  //   series: [
  //     {
  //       realtimeSort: true,
  //       name: 'X',
  //       type: 'bar',
  //       data: [10, 4, 13, 17, 22],
  //       label: {
  //         show: true,
  //         position: 'right',
  //         valueAnimation: true
  //       }
  //     }
  //   ],
  //   legend: {
  //     show: false
  //   },
  //   animationDuration: 0,
  //   animationDurationUpdate: 3000,
  //   animationEasing: 'linear',
  //   animationEasingUpdate: 'linear'
  // };

  // useEffect(() => {
  //   if (chartRef.current !== null) {
  //     echartInstanceRef.current = echarts.init(chartRef.current,"dark");
  //     echartInstanceRef.current.setOption(echartOptions);
  //   }
  // }, []);

  // function run(i: number) {
  //   let newData = dataArray[i];
  //   if (!echartInstanceRef.current) return;
  //   echartInstanceRef.current.setOption({
  //     series: [
  //       {
  //         type: 'bar',
  //         data: newData
  //       }
  //     ]
  //   });
  // }

  // function updateDataSequentially() {
  //   let i = 0;

  //   function update() {
  //     run(i);
  //     i = (i + 1) % dataArray.length;
  //     setTimeout(update, 300);
  //   }

  //   update();
  // }

  // useEffect(() => {
  //   updateDataSequentially();
  // }, []);
//   for (let i = 0; i < dataArray.length; ++i) {
//     setTimeout(function () {
//       run(i);
//     }, 0);
//     if (i > 1) {
//       setInterval(function () {
//         run(i);
//       }, 300);
//     }
//   }

//   return <div ref={chartRef} style={{ width: '600px', height: '400px' }} />;
// };

// export default MyEchartComponent;
// function run(i: number) {
  // if (!echartInstanceRef.current) return;
  // echartInstanceRef.current.setOption({
//     series: [
//       {
//         type: 'bar',
//         data: dataArray[i]
//       }
//     ]
//   });
// }

// useEffect(() => {
//   const totalDuration = 60000; // 1 minute in milliseconds
//   const interval = totalDuration / dataArray.length;

//   for (let i = 0; i < dataArray.length; ++i) {
//     setTimeout(() => {
//       run(i);
//     }, i * interval);
//   }
// }, [dataArray]);
const treeDataURI =
'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA2CAYAAADUOvnEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5tJREFUeNrcWE1oE0EUnp0kbWyUpCiNYEpCFSpIMdpLRTD15s2ePHixnj00N4/GoyfTg2fbiwdvvagHC1UQ66GQUIQKKgn1UAqSSFua38b3prPJZDs7s5ufKn0w7CaZ2W/fe9/73kyMRqNB3Nrj1zdn4RJ6du9T2u1a2iHYSxjP4d41oOHGQwAIwSUHIyh8/RA8XeiXh0kLGFoaXiTecw/hoTG4ZCSAaFkY0+BpsZceLtiAoV2FkepZSDk5EpppczBvpuuQCqx0YnkYcVVoqQYMyeCG+lFdaGkXeVOFNu4aEBalOBk6sbQrQF7gSdK5JXjuHXuYVIVyr0TZ0FjKDeCs6km7JYMUdrWAUVmZUBtmRnVPK+x6nIR2xomH06R35ggwJPeofWphr/W5UjPIxq8B2bKgE8C4HVHWvg+2gZjXj19PkdFztY7bk9TDCH/g6oafDPpaoMvZIRI5WyMB/0Hv++HkpTKE0kM+A+h20cPAfN4GuRyp9G+LMTW+z8rCLI8b46XO9zRcYZTde/j0AZm8WGb3Y2F9KLlE2nqYkjFLJAsDOl/lea0q55mqxXcL7YBc++bsCPMe8mUyU2ZIpnCoblca6TZA/ga2Co8PGg7UGUlEDd0ueptglbrRZLLE7poti6pCaWUo2pu1oaYI1CF9b9cCZPO3F8ikJQ/rPpQT5YETht26ss+uCIL2Y8vHwJGpA96GI5mjOlaKhowUy6BcNcgIhDviTGWCGFaqEuufWz4pgcbCh+w0gEOyOjTlTtYYlIWPYWKEsLDzOs+nhzaO1KEpd+MXpOoTUgKiNyhdy5aSMPNVqxtSsJFgza5EWA4zKtCJ2OGbLn0JSLu8+SL4G86p1Fpr7ABXdGFF/UTD4rfmFYFw4G9VAJ9SM3aF8l3yok4/J6IV9sDVb36ynmtJ2M5+CwxTYBdKNMBaocKGV2nYgkz6r+cHBP30MzAfi4Sy+BebSoPIOi8PW1PpCCvr/KOD4k9Zu0WSH0Y0+SxJ2awp/nlwKtcGyHOJ8vNHtRJzhPlsHr8MogtlVtwUU0tSM1x58upSKbfJnSKUR07GVMKkDNfXpzpv0RTHy3nZMVx5IOWdZIaPabGFvfpwpjnvfmJHXLaEvZUTseu/TeLc+xgAPhEAb/PbjO6PBaOTf6LQRh/dERde23zxLtOXbaKNhfq2L/1fAOPHDUhOpIf5485h7l+GNHHiSYPKE3Myz9sFxoJuAyazvwIMAItferha5LTqAAAAAElFTkSuQmCC';

const beginYear = 2020;
const endYear = 2024;
const lineCount = 10;

const options: EChartsOption = {
color: ['#e54035'],
xAxis: {
  axisLine: { show: false },
  axisLabel: { show: false },
  axisTick: { show: false },
  splitLine: { show: false },
  name: beginYear + '',
  nameLocation: 'middle',
  nameGap: 40,
  nameTextStyle: {
    color: 'green',
    fontSize: 30,
    fontFamily: 'Arial'
  },
  min: -2800,
  max: 2800
},
yAxis: {
  data: makeCategoryData(),
  show: false
},
grid: {
  top: 'center',
  height: 280
},
series: [
  {
    name: 'all',
    type: 'pictorialBar',
    symbol: 'image://' + treeDataURI,
    symbolSize: [30, 55],
    symbolRepeat: true,
    data: makeSeriesData(beginYear),
    animationEasing: 'elasticOut'
  },
  {
    name: 'all',
    type: 'pictorialBar',
    symbol: 'image://' + treeDataURI,
    symbolSize: [30, 55],
    symbolRepeat: true,
    data: makeSeriesData(beginYear, true),
    animationEasing: 'elasticOut'
  }
]
};

// Make fake data.
function makeCategoryData() {
var categoryData = [];
for (var i = 0; i < lineCount; i++) {
  categoryData.push(i + 'a');
}
return categoryData;
}

function makeSeriesData(
year: number,
negative?: boolean
): echarts.PictorialBarSeriesOption['data'] {
// make a fake value just for demo.
const r = (year - beginYear + 1) * 10;
const seriesData = [];

for (let i = 0; i < lineCount; i++) {
  let sign = negative ? -1 * (i % 3 ? 0.9 : 1) : 1 * ((i + 1) % 3 ? 0.9 : 1);
  seriesData.push({
    value:
      sign *
      (year <= beginYear + 1
        ? Math.abs(i - lineCount / 2 + 0.5) < lineCount / 5
          ? 5
          : 0
        : (lineCount - Math.abs(i - lineCount / 2 + 0.5)) * r),
    symbolOffset: i % 2 ? ['50%', 0] : undefined
  });
}
// console.log(`Series Data for year ${year}${negative ? ' (negative)' : ''}:`, seriesData);
return seriesData;
}

useEffect(() => {
if (chartRef.current !== null) {
  echartInstanceRef.current = echarts.init(chartRef.current,);
  echartInstanceRef.current.setOption(options);
}

var currentYear = beginYear;
const intervalId = setInterval(function () {
  currentYear++;
  if (currentYear > endYear) {
    clearInterval(intervalId); // Clear interval when complete
    return;
  }

  if (!echartInstanceRef.current) return;
  echartInstanceRef.current.setOption({
    xAxis: {
      name: currentYear
    },
    series: [
      {
        data: makeSeriesData(currentYear)
      },
      {
        data: makeSeriesData(currentYear, true)
      }
    ]
  });
}, 800);

return () => clearInterval(intervalId);
}, [echartOptions]);

return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default MyEchartComponent;