import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const MyEchartComponent = ({ echartOptions, dataArray ,height,width}: { echartOptions: echarts.EChartsCoreOption, dataArray: any[], height: string, width: string }
) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const echartInstanceRef = useRef<echarts.ECharts | null>(null);

//   const dataArray = [
//     [
//         166682.87000000002,
//         117760.08,
//         38422.91,
//         46709.48999999999,
//         39205.310000000005,
//         27050.379999999997,
//         9263.650000000001
//     ],
//     [
//         208309.87,
//         94366.43000000001,
//         48214.920000000006,
//         71523.21,
//         68678.99,
//         56444.27000000001,
//         14827.53
//     ],
//     [
//         280129.06,
//         105983.44999999998,
//         85244.71999999997,
//         84638.25000000001,
//         33938.33,
//         46171.27,
//         13409.460000000003
//     ],
//     [
//         829663.49,
//         332877.8,
//         199013.03,
//         217558.97999999998,
//         130434.96999999999,
//         115155.16999999998,
//         35301.65
//     ],
//     [
//         336970.3699999999,
//         155940.46,
//         90267.02,
//         73578.81,
//         73113.46999999999,
//         81667.85999999999,
//         22192.69
//     ],
//     [
//         262361.23999999993,
//         129765.34000000001,
//         130355.43,
//         79588.93,
//         100339.32,
//         53651.00000000001,
//         10199.47
//     ],
//     [
//         465139.39999999997,
//         191951.85999999993,
//         127949.97999999997,
//         114872.76000000001,
//         109114.62,
//         74326.95000000001,
//         26040.7
//     ],
//     [
//         697786.0800000001,
//         433766.11000000004,
//         211972.79999999996,
//         261262.39000000004,
//         220104.39000000004,
//         131792.16,
//         58090.98999999999
//     ],
//     [
//         376625.6599999999,
//         227484.09999999998,
//         135695.61000000002,
//         88330.73999999999,
//         122037.73000000003,
//         95159.06,
//         26659.46
//     ],
//     [
//         295947.62000000005,
//         113255.20999999999,
//         99251.91999999998,
//         89726.28000000001,
//         78036.43999999999,
//         33019.01,
//         10257.869999999999
//     ]
// ]

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

  useEffect(() => {
    if (chartRef.current !== null) {
      echartInstanceRef.current = echarts.init(chartRef.current,"dark");
      echartInstanceRef.current.setOption(echartOptions);
    }
  }, []);

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
function run(i: number) {
  if (!echartInstanceRef.current) return;
  echartInstanceRef.current.setOption({
    series: [
      {
        type: 'bar',
        data: dataArray[i]
      }
    ]
  });
}

useEffect(() => {
  const totalDuration = 60000; // 1 minute in milliseconds
  const interval = totalDuration / dataArray.length;

  for (let i = 0; i < dataArray.length; ++i) {
    setTimeout(() => {
      run(i);
    }, i * interval);
  }
}, [dataArray]);

return <div ref={chartRef} style={{ width, height }} />;
};

export default MyEchartComponent;