<br/>
<p align="center">
  <a href="https://github.com/sujitykulkarni/eventflowviz">
    <img src="https://i.postimg.cc/JzgYMjLX/logo.png" alt="Logo" width="320" height="80">
  </a>

  <h3 align="center">eventflowviz</h3>

  <p align="center">
    Event flow visualization based on D3.js time scale
    <br/>
    <br/>
    <a href="https://codesandbox.io/s/eventflowviz-react-b1v75p">View Demo (React)</a>
    .
    <a href="https://github.com/sujitykulkarni/eventflowviz/issues">Report Bug</a>
    .
    <a href="https://github.com/sujitykulkarni/eventflowviz/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/sujitykulkarni/eventflowviz/total) ![Contributors](https://img.shields.io/github/contributors/sujitykulkarni/eventflowviz?color=dark-green) ![Issues](https://img.shields.io/github/issues/sujitykulkarni/eventflowviz) ![License](https://img.shields.io/github/license/sujitykulkarni/eventflowviz)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://i.postimg.cc/0NzGnNb0/Screen-Shot-2022-12-27-at-01-02-25.png)

This is a npm package that allows you to create a time scale based visualization using the d3.js library. The visualization consists of a time scale on the x-axis and colored circles on the y-axis, representing events at a specific point in time. The radius of the circles is proportional to the size of the event as provided in the data.

## Built With

- d3's [time scale](https://www.d3indepth.com/scales/#scaletime)
- Typescript

## Getting Started

It's pretty simple to consume this package.

### Prerequisites

NPM Package

```sh
npm install eventflowviz@latest --save
```

## Usage

To start with, the following block of HTML is required for the library to inject the DOM generated to render the visualization.

```html
<div id="{yourId}" class="d3-event-flow">
  <svg class="svg"></svg>
</div>
```

The `id` attribute can be dynamic, whereas the `class` values should not be the same as given here.

Next, in your .js|x or ts|x file,

```js
import D3EventFlowViz from "eventflowviz";

const data = [{
    time: "2022-06-14T12:34:56Z",
    event: "Annual Meeting",
    label: "Business",
    size: 86
  },
  {
    time: "2022-07-28T09:15:00Z",
    event: "Charity Walk",
    label: "Community",
    size: 37
  },
...
];
...
const viz = new D3EventFlowViz({
  width:500,
  height:300,
  margin: {
    top: 15,
    left: 15,
    right: 15,
    bottom: 15,
  },
  id:'yourID', // must be exactly what specified in the HTML
  data,
  dot: {
    radius: 15,
  }
});

viz.draw(); // job=done
...
}
```

## Roadmap

To-dos:

- [ ] Responsive to viewport
- [ ] Make it data aware at the runtime (currently does not go well with the live data changes such as data passed from React states that would change some time later)
- [ ] Allow user to make event marker customizations

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/sujitykulkarni/eventflowviz/issues/new) to discuss it, or directly create a pull request after you edit the _README.md_ file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.
- Please also read through the [Code Of Conduct](https://github.com/sujitykulkarni/eventflowviz/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/sujitykulkarni/eventflowviz/blob/main/LICENSE.md) for more information.

## Authors

- **Sujit Kulkarni** - _Cloud Consultant at Rapid Circle_ - [Sujit Kulkarni](https://github.com/sujitykulkarni) - _I created this while still deep diving into D3.js_
