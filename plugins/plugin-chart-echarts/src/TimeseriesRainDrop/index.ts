/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AnnotationType, Behavior, t } from '@superset-ui/core';
import {
  EchartsTimeseriesChartProps,
  EchartsTimeseriesFormData,
  EchartsTimeseriesSeriesType,
} from '../types';
import { EchartsChartPlugin } from '../types';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/Bar3.png';
import example1 from './images/Bar3.png';
import example2 from './images/Bar2.png';
import example3 from './images/Bar1.png';

const barTransformProps = (chartProps: EchartsTimeseriesChartProps) =>
  transformProps({
    ...chartProps,
    formData: {
      ...chartProps.formData,
      seriesType: EchartsTimeseriesSeriesType.Bar,
    },
  });

export default class EchartsTimeseriesRaindropChartPlugin extends EchartsChartPlugin<
  EchartsTimeseriesFormData,
  EchartsTimeseriesChartProps
> {
  constructor() {
    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('./EchartsTimeseries'),
      metadata: {
        behaviors: [
          Behavior.InteractiveChart,
          Behavior.DrillToDetail,
          Behavior.DrillBy,
        ],
        category: t('Evolution'),
        credits: ['https://echarts.apache.org'],
        description: t(
          "The WaterDrop Bar Chart elegantly visualizes data with its unique design.Each bar features a waterdrop shape, showcasing the maximum and minimum values at the top, providing instant insights into the range of data. Additionally, the inclusion of an average line within each bar offers a clear reference point, aiding in the interpretation of the data distribution and facilitating comparative analysis",
        ),
        exampleGallery: [
          { url: example1 },
          { url: example2 },
          { url: example3 },
        ],
        supportedAnnotationTypes: [
          AnnotationType.Event,
          AnnotationType.Formula,
          AnnotationType.Interval,
          AnnotationType.Timeseries,
        ],
        name: t('WaterDrop Bar Chart'),
        tags: [
          t('VCharts'),
          t('ECharts'),
          t('Predictive'),
          t('Advanced-Analytics'),
          t('Aesthetic'),
          t('Time'),
          t('Transformable'),
          t('Stacked'),
          t('Vertical'),
          t('Bar'),
          t('Popular'),
        ],
        thumbnail,
      },
      transformProps: barTransformProps,
    });
  }
}
