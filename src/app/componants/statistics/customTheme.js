/** @type {import('victory').VictoryThemeDefinition} */

const customTheme = {
  palette: {
    colors: {
      blue: "#2D7FF9",
      cyan: "#18BFFF",
      green: "#20C933",
      yellow: "#FCB400",
      orange: "#FF6F2C",
      red: "#F82B60",
      purple: "#8B46FF",
      teal: "#20D9D2"
    },
    grayscale: [
      "#F2F2F2",
      "#E0E0E0",
      "#757575",
      "#424242",
      "#292929"
    ],
    qualitative: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ],
    heatmap: [
      "#338A17",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60"
    ],
    warm: [
      "#FFD66E",
      "#FCB400",
      "#FF6F2C",
      "#D74D26",
      "#F82B60"
    ],
    cool: [
      "#8B46FF",
      "#2D7FF9",
      "#18BFFF",
      "#20D9D2",
      "#20C933"
    ],
    red: [
      "#FFDCE5",
      "#FF9EB7",
      "#F82B60",
      "#D31A3D",
      "#BA1E45"
    ],
    green: [
      "#D1F7C4",
      "#93E088",
      "#20C933",
      "#1B9B2A",
      "#338A17"
    ],
    blue: [
      "#CFDFFF",
      "#9CC7FF",
      "#2D7FF9",
      "#0056B3",
      "#2750AE"
    ]
  },
  area: {
    style: {
      data: {
        fill: "#2858ff",
        strokeWidth: 2,
        fillOpacity: 0.5
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#ffffff",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#757575",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 35,
        fill: "#292929",
        stroke: "transparent"
      },
      grid: {
        fill: "none",
        stroke: "none",
        painterEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "transparent"
      },
      tickLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  polarAxis: {
    style: {
      axis: {
        stroke: "#757575"
      },
      grid: {
        stroke: "#D1D1D1",
        strokeDasharray: "10, 5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#D1D1D1",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    }
  },
  polarDependentAxis: {
    style: {
      axis: {
        stroke: "#8f0000"
      },
      grid: {
        stroke: "#D1D1D1",
        strokeDasharray: "10, 5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#E0E0E0",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    }
  },
  bar: {
    style: {
      data: {
        fill: "#2D7FF9",
        padding: 8,
        strokeWidth: 1,
        fillOpacity: 0.5
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    cornerRadius: {
      top: 1
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#D1D1D1",
        strokeWidth: 2
      },
      maxLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 3,
        fill: "#292929",
        stroke: "transparent"
      },
      median: {
        padding: 8,
        stroke: "#FFFFFF",
        strokeWidth: 2
      },
      medianLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 3,
        fill: "#292929",
        stroke: "transparent"
      },
      min: {
        padding: 8,
        stroke: "#D1D1D1",
        strokeWidth: 2
      },
      minLabels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 3,
        fill: "#292929",
        stroke: "transparent"
      },
      q1: {
        padding: 8,
        fill: "#2D7FF9",
        rx: 1,
        strokeWidth: 2
      },
      q1Labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 3,
        fill: "#292929",
        stroke: "transparent"
      },
      q3: {
        padding: 8,
        fill: "#18BFFF",
        rx: 1
      },
      q3Labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 3,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    boxWidth: 20,
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  candlestick: {
    style: {
      data: {
        stroke: "#E0E0E0",
        strokeWidth: 0,
        rx: 1
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 5,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    candleColors: {
      positive: "#20C933",
      negative: "#F82B60"
    },
    wickStrokeWidth: 2,
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  chart: {
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#424242",
        strokeWidth: 2,
        strokeLinecap: "round"
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  group: {
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ],
    width: 450,
    height: 300,
    padding: 60
  },
  histogram: {
    style: {
      data: {
        fill: "#18BFFF",
        fillOpacity: 0.5
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    binSpacing: 4,
    cornerRadius: {
      top: 1
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  label: {
    fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
    fontSize: 12,
    fontWeight: 300,
    letterSpacing: "normal",
    padding: 8,
    fill: "#292929",
    stroke: "transparent"
  },
  legend: {
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ],
    gutter: 24,
    borderPadding: 10,
    orientation: "horizontal",
    titleOrientation: "top",
    centerTitle: true,
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      },
      title: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 16,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      },
      border: {
        stroke: "#E8E8E8",
        strokeWidth: 2,
        padding: 16
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#000000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "miter"
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 8,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  pie: {
    style: {
      parent: {
        backgroundColor: "#FFFFFF"
      },
      data: {
        padding: 8,
        stroke: "#FFFFFF",
        strokeWidth: 1
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 10,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 20,
        fill: "#5C5C5C",
        stroke: "transparent"
      }
    },
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ],
    cornerRadius: 1,
    width: 450,
    height: 300,
    padding: 60
  },
  scatter: {
    style: {
      data: {
        fill: "#2D7FF9",
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 20,
        fill: "#292929",
        stroke: "transparent"
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  },
  stack: {
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ],
    width: 450,
    height: 300,
    padding: 60
  },
  tooltip: {
    style: {
      fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: "normal",
      padding: 0,
      fill: "#292929",
      stroke: "transparent",
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#E0E0E0",
      strokeWidth: 2,
      fill: "#FFFFFF",
      pointerEvents: "none"
    },
    flyoutPadding: {
      top: 8,
      bottom: 8,
      left: 16,
      right: 16
    },
    cornerRadius: 1,
    pointerLength: 4
  },
  voronoi: {
    style: {
      data: {
        fill: "#CFDFFF",
        stroke: "#2D7FF9",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Inter', 'Helvetica Neue', 'Seravek', 'Helvetica', sans-serif",
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "normal",
        padding: 5,
        fill: "#292929",
        stroke: "transparent",
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#292929",
        strokeWidth: 1,
        fill: "#F2F2F2",
        pointerEvents: "none"
      },
      padding: {
        left: 2,
        bottom: 2
      }
    },
    width: 450,
    height: 300,
    padding: 60,
    colorScale: [
      "#2D7FF9",
      "#18BFFF",
      "#20C933",
      "#FCB400",
      "#FF6F2C",
      "#F82B60",
      "#8B46FF",
      "#20D9D2"
    ]
  }
};

export default customTheme;