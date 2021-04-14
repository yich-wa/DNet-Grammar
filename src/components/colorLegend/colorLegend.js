import React from 'react'
import { SINGLE_LEGEND_WIDTH } from '../../util/const.js'

export default function ColorLegend(props) {
    if (props.len === 0) return null
    // isColor是true以及isSample是false的时候，是渲染图例的
    const legendData = new Array(props.len).fill(0)
    // 确定颜色比例尺
    const isColor = props.timeChooseTypes.indexOf('color') > -1
    if(!props.isSample && isColor){
        return (
            <div
                style={{
                    width: '100%',
                    height: '20px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    margin: '10px'
                }}
            >
                <div
                    className="legend-text"
                    style={{
                        margin: '0 10px'
                    }}
                >
                    0
                </div>
                <svg
                    className="legend-svg"
                    width={`${SINGLE_LEGEND_WIDTH * props.len}px`}
                    height={'20px'}
                    viewBox={`0 0 ${SINGLE_LEGEND_WIDTH * props.len} 20`}
                    preserveAspectRatio="xMinYMin"
                >
                    {legendData.map((dataItem, index) => {
                        return (
                            <rect
                                key={`tc-legend-${index}`}
                                x={index * SINGLE_LEGEND_WIDTH}
                                y={0}
                                fill={props.colorScale(index)}
                                width={SINGLE_LEGEND_WIDTH}
                                height={SINGLE_LEGEND_WIDTH}
                            ></rect>
                        )
                    })}
                </svg>
                <div
                    style={{
                        margin: '0 10px'
                    }}
                >
                    {props.len - 1}
                </div>
            </div>
        )
    }else{
        return null
    }
}
