import React from "react"
import './secondColumn.css'
import {
	ARROW_PATH,
	AXIS_COLOR
} from '../../util/const.js'
// import { Radio, Select, Input, Collapse, InputNumber } from 'antd'
import InputListItem from "../inputListItem/inputListItem.js";
import { connect } from "react-redux"
import { 
	deleteItemToEncoding, 
	addItemToEncoding, 
} from '../../redux/encoding.redux.js'


function SecondColumn(props) {
	const {encodingItems} = props
	return (
		<div className="first-column">
			<div className="second-column-container">
				<svg className="second-container-svg">
					<line x1={20} y1={20} x2={20} y2={800} stroke={AXIS_COLOR} strokeWidth={'2px'}/>
					{
						encodingItems.map((v,i)=>{
							return (
								<g key={i}>
									<line
										x1={20}
										y1={v.position}
										x2={20+50}
										y2={v.position+50}
										stroke={AXIS_COLOR} 
										strokeWidth={'2px'}
									/>
									<circle
										key={`circle_${v}`}
										cx={20}
										cy={v.position}
										r={8}
										stroke={AXIS_COLOR}
										strokeWidth={'1px'}
										fill={'#fda167'}
									/>
								</g>
							)
						})
					}
					<path
						d={ARROW_PATH}
						fill={AXIS_COLOR}
						transform={`translate(20, 800)`}
					/>
				</svg>
				<div>
					{encodingItems.map((encodingItem,itemIndex)=>{
						return (<div
							className='input-panel-container'
							style={{
								top: `${encodingItem.position+30}px`,
								left: '70px'
							}}
							key={itemIndex}
						>
							<div className='sc-panel-header'>
								positioning
							</div>
							<div className="fc-sub-container">
								{encodingItem.positioning.map((row,rowIndex) => {
									return <InputListItem 
										info={row} 
										active={props.dragStatus} 
										key={rowIndex} 
										itemIndex={itemIndex}
										rowIndex={rowIndex}
										
										/>;
								})}
							</div>
							<div className='sc-panel-header'>
								faceting
							</div>
							<div className="fc-sub-container">
								{encodingItem.faceting.map((row,rowIndex) => {
									return <InputListItem 
										info={row} 
										active={props.dragStatus} 
										key={rowIndex} 
										itemIndex={itemIndex}
										rowIndex={rowIndex}
										
										/>;
								})}
							</div>
						</div>)
					})
					}
				</div>

			</div>
		</div>
	);
}

const mapStateToProps = (state)=>({
	dragStatus: state.dragStatus,
	encodingItems: state.encodingItems
})

const mapDispatchToProps = {
	addItemToEncoding,
	deleteItemToEncoding
} 

export default connect(mapStateToProps,mapDispatchToProps)(SecondColumn)