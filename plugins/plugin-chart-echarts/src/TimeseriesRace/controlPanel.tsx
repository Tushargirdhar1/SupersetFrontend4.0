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
import React from 'react';
import { t } from '@superset-ui/core';
import {
  ControlPanelConfig,
  getStandardizedControls,
  sections,
} from '@superset-ui/chart-controls';
import {
  DEFAULT_FORM_DATA,
} from './constants';

const {
  duration,
  maxBars,
  showGraphic,
  barColor,
  timeFormat
} = DEFAULT_FORM_DATA;

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.echartsTimeSeriesQueryWithXAxisSort,
    sections.advancedAnalyticsControls,
    sections.annotationsAndLayersControls,
    sections.forecastIntervalControls,

    {
      label: t('Chart PAGE'),
      tabOverride: 'customize',
      expanded: true,
      controlSetRows: [

      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'Duration',
            config: {
              type: 'TextControl',
              label: t('Duration'),
              renderTrigger: true,
              default: duration,
              description: t('Specify the duration value for the chart'),
              isInt: true, // Ensure the input is an integer
            },
          },
          {
            name: 'Max Bars',
            config: {
              type: 'TextControl',
              label: t('Max Bars'),
              renderTrigger: true,
              default: maxBars,
              description: t('Specify the Maximum Bars for the chart'),
              isInt: true, // Ensure the input is an integer
            },
          }
        ],
        [
          {
            name: 'showGraphic',
            config: {
              type: 'CheckboxControl',
              label: t('Label Interval'),
              renderTrigger: true,
              default: showGraphic,
              value: showGraphic, // Bind the value of showGraphic
              description: t('Displays a Label Interval for the chart'),
            },
          }
        ],
        [
          {
            name: 'barColor',
            config: {
              type: 'TextControl',
              label: t('Bar Color'),
              default: barColor,
              renderTrigger: true,
              description: t('Change Color Of Bars'),
            },
          },
        ],
        [
          {
            name: 'timeFormat',
            config: {
              type: 'SelectControl',
              label: t('Timeline Format'),
              choices: [
                ['month', 'Month'],
                ['year', 'Year'],
                ['month-year', 'MonthYear'],
              ],
              default: timeFormat,
              renderTrigger: true,
              description: t('Change Format for Label Timeline Interval'),
            },
          },
        ],
      ]

    },
  ],

  formDataOverrides: formData => ({
    ...formData,
    metrics: getStandardizedControls().popAllMetrics(),
    groupby: getStandardizedControls().popAllColumns(),
  }),
};
export default config;
