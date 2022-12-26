/**
 * D3 Event Flow Visualization
 * @author Sujit Kulkarni <sujitykulkarni@gmail.com>
 */

import * as d3 from 'd3';
import { D3EventFlowVizProps, D3EventFlowData } from './typings';

// Chart constants
const WIDTH = 500;
const HEIGHT = 500;
const TOP = 10;
const RIGHT = 10;
const LEFT = 10;
const BOTTOM = 10;
const DOT_RADIUS = 15;
const DOT_COLOR = '#93c5fd';
const AXIS_COLOR = '#64748b';
const LABEL_COLOR = '#1e293b';
const BASE_FONT_SIZE = 10;

const initProps: D3EventFlowVizProps = {
  width: WIDTH,
  height: HEIGHT,
  margin: { top: TOP, right: RIGHT, left: LEFT, bottom: BOTTOM },
  dot: {
    radius: DOT_RADIUS,
  },
  data: [],
  id: '',
};

/**
 * @description Event flow visualization rendered using d3.js time scale function.
 * @export
 * @class D3EventFlowViz
 */
export default class D3EventFlowViz {
  /**
   * @description The SVG element wherein visualization is to be rendered
   * @private
   * @memberof D3EventFlowViz
   */
  private svg;

  /**
   * @description Visualization properties
   * @private
   * @type {D3EventFlowVizProps}
   * @memberof D3EventFlowViz
   */
  private props: D3EventFlowVizProps = initProps;

  /**
   * Creates an instance of D3EventFlowViz.
   * @param {D3EventFlowVizProps} { width, height, margin, dot, data, id }
   * @memberof D3EventFlowViz
   */
  constructor({ width, height, margin, dot, data, id }: D3EventFlowVizProps) {
    this.props = {
      width: width - margin.left - margin.right,
      height: height - margin.top - margin.bottom,
      margin,
      dot: dot || initProps.dot,
      data,
      id,
    };
    this.svg = d3.select(`#${id}.d3-event-flow .svg`).attr('width', this.props.width).attr('height', this.props.height);
    this.svg.selectAll('*').remove();
  }

  /**
   * @description Draw the visualization based on given properties
   * @memberof D3EventFlowViz
   */
  draw() {
    const { data, width, height, margin, dot } = this.props;
    if (!data.length || !this.svg) return;
    const times = data.map((d) => d.time.getTime());
    const sizes = data.map((d) => d.size || 0);
    const min = Math.min(...times);
    const max = Math.max(...times);
    const maxSize = Math.max(...sizes);
    const minSize = Math.min(...sizes);
    const cy = 0 - dot.radius;

    const colorScale = d3.scaleSequential().domain([minSize, maxSize]).interpolator(d3.interpolateWarm);

    const timeScale = d3
      .scaleTime()
      .domain([new Date(min), new Date(max)])
      .range([0, width - 50])
      .nice();

    const linearScale = d3.scaleLinear().domain([minSize, maxSize]).range([5, DOT_RADIUS]);

    const xAxis = d3.axisBottom(timeScale).tickArguments([d3.timeWeek.every(2)]);

    const shapeGroup = this.svg
      .append('g')
      .style('transform', `translate(${margin.left}px,${height - margin.top - margin.bottom}px)`)
      .style('font-size', `${BASE_FONT_SIZE}px`);

    shapeGroup
      .selectAll('circle')
      .data<D3EventFlowData>(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => timeScale(d.time))
      .attr('cy', cy)
      .attr('r', (d) => linearScale(d.size))
      .attr('fill', (d) => colorScale(d.size || 0))
      .attr('stroke', 'white')
      .attr('style', `transform:translateY(-${dot.radius / 2}px)`)
      .exit()
      .remove();
    shapeGroup
      .selectAll('text')
      .data<D3EventFlowData>(data)
      .enter()
      .append('text')
      .text((d, i) => d.label || i)
      .attr('x', (d) => timeScale(d.time))
      .attr('y', (d) => 0 - linearScale(d.size || 0) * 2 - BASE_FONT_SIZE - 10)
      .attr('text-anchor', 'middle')
      .attr('font-size', `${BASE_FONT_SIZE}px`)
      .attr('fill', LABEL_COLOR)
      .exit()
      .remove();
    shapeGroup.call(xAxis).attr('color', AXIS_COLOR);
  }

  /**
   * @description Remove the visualization from the SVG container element
   * @memberof D3EventFlowViz
   */
  remove() {
    this.svg.exit().remove();
  }
}
