/**
 * D3 Event Flow Visualization
 * @author Sujit Kulkarni <sujitykulkarni@gmail.com>
 */
/**
 * @typedef {Object} D3EventFlowData
 * @property {Date} time - time of the event
 * @property {string} event - event name
 * @property {string} [label] - event label
 * @property {number} [size] - numeric representation of the event
 */

/**
 * @typedef {number} ChartMargin - Top, Right, Left & Bottom margins
 */

/**
 * @typedef {Object} Dot - Dot representing the size of the event
 * @property {number} radius - Radius of the dot
 */

/**
 * @type D3EventFlowData
 */
export type D3EventFlowData = {
  time: Date;
  event: string;
  label?: string;
  size: number;
};

/**
 * @type ChartMargin
 */
export type ChartMargin = Record<'top' | 'right' | 'bottom' | 'left', number>;

/**
 * @type Dot
 */
export type Dot = {
  radius: number;
};

/**
 * @description D3 Event Flow Visualization
 * @interface D3EventFlowVizProps
 * @property {number} width - chart width
 * @property {number} height - chart height
 * @property {ChartMargin} margin - chart margin
 * @property {Dot} dot - dot props
 * @property {D3EventFlowData[]} data - visualization data
 * @property {string} id - visualization container element ID
 */
export interface D3EventFlowVizProps {
  width: number;
  height: number;
  margin: ChartMargin;
  dot: Dot;
  data: D3EventFlowData[];
  id: string;
}
