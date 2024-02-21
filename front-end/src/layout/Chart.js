import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { useMemo } from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSourceTemplate = {
  chart: {
    bgColor: "#ffffff",
    captionFontSize: 20,
    captionFontColor: "#270A07",
    canvasbgColor: "#ffffff",
    canvasBorderThickness: 1,
    showAlternateHGridColor: 0,
    basefont: "Montserrat",
    caption: "Weekly Summary",
    showhovereffect: "1",
    drawcrossline: "1",
    theme: "umber",
    showCanvasBorder: 1,
    showBorder: 0,
    yAxisValueFontBold: 1,    
    xAxisValueFontBold: 1,
    labelFontBold: 1,
    legendBorderThickness: 0,
  },
  categories: [
    {
      category: [
        {
          label: "Monday"
        },
        {
          label: "Tuesday"
        },
        {
          label: "Wednesday"
        },
        {
          label: "Thursday"
        },
        {
          label: "Friday"
        },
        {
          label: "Saturday"
        },
        {
          label: "Sunday"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Activity",
      data: [
        {
          value: "4"
        },
        {
          value: "2"
        },
        {
          value: "3"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "3"
        },
        {
          value: "5"
        },
      ]
    },
    {
      seriesname: "Sleep",
      data: [
        { value: "4" },
        { value: "3" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "5" },
        { value: "1" },
      ]
    },
    {
      seriesname: "Stress",
      data: [
        { value: "3" },
        { value: "2" },
        { value: "4" },
        { value: "1" },
        { value: "5" },
        { value: "2" },
        { value: "4" },
      ]
    },
  ]
};

export default function Chart({userDataset}) {

    const dataset = useMemo(()=> {
      return {...dataSourceTemplate, dataset: userDataset }
    }, [userDataset]) 

    return (
      <ReactFusioncharts
        type="msline"
        width="100%"
        height="300"
        dataFormat="JSON"
        dataSource={dataset}
      />
    )

}
