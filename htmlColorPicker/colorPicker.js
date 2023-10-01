// Default
var defaultPicker = new iro.ColorPicker("#defaultPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
  });
  
  // Box & hue slider
  var boxPicker = new iro.ColorPicker("#boxPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Box,
      },
      {
        component: iro.ui.Slider,
        options: {
          id: 'hue-slider',
          sliderType: 'hue'
        }
      }
    ]
  });
  
  // It's all sliders
  var sliderPicker = new iro.ColorPicker("#sliderPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'saturation'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'alpha'
        }
      },
    ]
  });
  
  // Temperature
  var kelvinPicker = new iro.ColorPicker("#kelvinPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layoutDirection: 'horizontal',
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'kelvin',
          sliderSize: 40,
        }
      },
    ]
  });
  
  // Wheel only
  var wheelPicker = new iro.ColorPicker("#wheelPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Wheel,
      },
    ]
  });
  
  // Circular slider
  var circleSliderPicker = new iro.ColorPicker("#circleSliderPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layoutDirection: 'horizontal',
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value',
          sliderShape: 'circle'
          // sliderSize: 40,
        }
      },
    ]
  });