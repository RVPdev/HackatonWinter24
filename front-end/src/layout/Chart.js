import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { useMemo } from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSourceTemplate = {
  chart: {
    caption: "Weekly Summary",
    showhovereffect: "1",
    drawcrossline: "1",
    theme: "candy"
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
        height="100%"
        dataFormat="JSON"
        dataSource={dataset}
      />
    )

}
