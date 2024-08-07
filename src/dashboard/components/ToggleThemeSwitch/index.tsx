import { Switch } from 'antd';
import React, { Component } from 'react';

class ToggleThemeSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeMode: localStorage.getItem('themeMode') || 'light',
    };
  }
  componentDidMount() {
    const savedThemeMode = localStorage.getItem('themeMode');

    if (savedThemeMode) {
      this.setState({ themeMode: savedThemeMode }, () => {
        this.applyThemeStyles(savedThemeMode);
      });
    } else {
      // Default theme mode if not found in localStorage
      this.applyThemeStyles(this.state.themeMode);
    }
  }

  setThemeMode = (mode) => {
    const { forceRefreshAllCharts } = this.props;
    localStorage.setItem('themeMode', mode);
    this.setState({ themeMode: mode }, () => {
      this.applyThemeStyles(mode);
      // window.location.reload();
      forceRefreshAllCharts()
    });
  };

  applyThemeStyles = (mode) => {
    // Define your CSS styles for light and dark themes
    const lightStyles = `
    .dashboard-component-header {
      background-image: linear-gradient(-90deg, #d1d1d1, #d1d1d1);
     }
   
   .css-1dgvt7y {
     background-color: #f1f1f1 !important;
   }
   
   .ant-tabs-nav-wrap {
       background-color: #f1f1f1 !important;
    }
      
   .ant-tabs-nav-list {
       background-color: #f1f1f1 !important;
    } 
    .grid-content .dragdroppable-row .dragdroppable-column .dashboard-component-chart-holder {
    box-shadow: 0px 6px 6px #C7C8CC;
    }
        `;

    const darkStyles = `
           
body {
  background-color: #27243F !important;
 }
 
 #app {
  background-color: #27243F !important;
 }
 
 
 .grid-row.background--transparent.css-nb28ea {
 background-color: #27243F;
 }
 
 
 .css-1rq9nng .css-h8dzev .pvtTable {
 background-color: #27243F !important;
 }
 
 .ant-menu-horizontal {
   background-color: #27243F;
 }
 
 .ant-col.ant-col-xs-24.ant-col-md-8 {
 background-color: #27243F;
 }
 
 div.ant-menu-submenu-title {
   background-color: #27243F;
 }
 
 li.ant-menu-submenu.ant-menu-submenu-horizontal.css-d1dar4 {
   background-color: #27243F;
 }
 .ant-tabs-content-holder * {
   color: #fff !important;
   }
   
   
 .dashboard-content{
  background-color: #27243F;
 }
 
 .header-with-actions {
     background-color: #27243F;
     color: #ffffff;
    }
 
 .dragdroppable-column {
  background-color: #27243F;
     color: #fff;
 }
 
 .css-1dgvt7y {
 background-color: #27243F;
 }
 
 
 .ant-tabs-nav-wrap {
  background-color: #27243F;
  color: #ffffff;
 }
 
 div.ant-select-selector {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
    border-style:none;
 }
 
 .dashboard-component {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
     color:white;
    }
 
 .dashboard-component-header {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
     color:white;
    }
   
 .ant-tabs-content-holder  {
   color: #fff ;
   }
 
 .main-nav .ant-menu-item a {
 color: #ffffff;
 }
 
 
 #main-menu .ant-menu-submenu:nth-child(4) .ant-menu-submenu-title
 {
  color: #ffffff;
 }
 
 #main-menu .ant-menu-submenu:nth-child(8) .ant-menu-submenu-title {
 color: #ffffff;
 }
 
 .css-1ihx2le .css-yk4l29 .superset-button{
  color:#fff;
 }
 
 
 .css-1x85xji .superset-button .ant-badge-count{
   color:#000;
 }
 
 .ant-dropdown-button .ant-btn svg{
   color:#2684ba;
 }
 
 .css-vqun1m {
   color: #2684ba;
 }
 
 .ant-tabs-tab-active *{
   color: #2684ba;
 }
 
 #TABS-JwrXIgKDLS .ant-tabs-nav .dragdroppable-tab{
  color:#fff;
 } 
 
 
 .css-14381v7 {
 background-color:#27243F;
 }
 
 .css-1pf7rkh {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
   color:white;
 }
 
 
 
 .css-1uyj2ql {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
   color:white;
 }
 
 
 
 .css-1a2qin2 .css-18fkq2l {
   background-color:#27243F;
 }
 
 
 .css-1a2qin2 .open .open
 {
   background-color:#27243F;
     color:white;
 
 }
 
 .css-wlt4i6 div .ant-select-selector {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 }
 
 .css-1a2qin2 .css-lmih2o {
   background-color:#27243F;
     color:white;
 
 }
 
 .css-wlt4i6 div:nth-child(1) .ant-form-vertical div .ant-form-item .ant-form-item-label label .css-r97my h4
 {    color:white;
 }
 
 
 h4.css-17r6vwm {
   color: #fff;
   
 }
 
 .css-1a2qin2 .css-14gj75u{
   background-color:#27243F;
     color:white;
 }
 
 
 .css-slbic0 .superset-button span{
       color:white;
 }
 
 
 .css-3se2ft .css-1x85xji .superset-button
 {
     background-color:#E9F6F9;
 }
 
 .css-1rq9nng .css-h8dzev .pvtTable {
 background-color:#27243F !important;
 }

 --.grid-content div .pivot_table_v_2
 {
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
   
 }
 
 
 /* Val */
 .pvtTable tr .pvtVal{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 color : #fff !important;
 }
 
 /* Hoverable */
 .pvtTable tr .hoverable{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 color : #fff;
 
 }
 
 /* Col label */
 .pvtTable tr .pvtColLabel{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 color : #fff !important;
 
 }
 
 /* Th */
 --.pivot_table_v_2 .css-1sfq45j .css-1rq9nng .css-h8dzev .pvtTable thead tr th{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 color : #fff !important;
 }
 
 /* Th */
 --.grid-content .dragdroppable .with-popover-menu .background--transparent .dragdroppable-column .resizable-container .dashboard-component-chart-holder .chart-slice .dashboard-chart .chart-container .slice_container div .pivot_table_v_2 .css-1sfq45j .css-1rq9nng .css-h8dzev .pvtTable thead tr th{
  background-image:none !important;
 }
 
 /* Th */
 .pvtTable thead th{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A);
 color: #fff;
 }
 
 .css-fhczo3 thead .dt-is-filter{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A) !important;
 }
 
 /* Th */
 .css-fhczo3 thead th{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A) !important;
 }
 
 .form-inline .dt-global-filter .form-control{
    background-image: linear-gradient(-45deg, #100C2A, #100C2A) !important;
 }
 
 .grid-content .dragdroppable-row .dragdroppable-column .dashboard-component-chart-holder {
     box-shadow: 0px 4px 4px #0C0921;
 }
 
 -.right-button-panel .css-17x4a0o .superset-button {
  background-color:#FBC700 !important;
 }
 
 
 .tick text{
 fill: #fff !important;
 }
 .css-nxtj6w .dot {
     background-color: white;
 }
              `;

    const selectedStyles = mode === 'dark' ? darkStyles : lightStyles;
    // #100C2A
    let styleElement = document.getElementById('theme-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.setAttribute('id', 'theme-styles');
      document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = selectedStyles;
  };

  render() {
    return (
      <Switch
        onChange={(value) => {
          const themeMode = value ? 'dark' : 'light';
          this.setThemeMode(themeMode);
        }}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
        style={{ marginRight: 20, marginLeft: 20 }}
        checked={this.state.themeMode === 'dark'}
      />
    );
  }
}

export default ToggleThemeSwitch;