import React from "react"
import './firstColumn.css'
import DragListItem from '../dragListItem/dragListItem.js'
import { connect } from "react-redux"
import { GRAPH_LAYOUT_TYPE,
		TIME_ENCODING_TYPE
	 } from '../../util/const.js'

const taskItems = [
	"comparison",
	"find",
	"structure",
	"attr"
]

function FristColumn(props) {

	return (
		<div className="first-column">
            <div className="first-column-subtitle">
				Graph-layout
			</div>
            <div className="fc-sub-container">
				{
					GRAPH_LAYOUT_TYPE.map(v=>{
						return (
							<DragListItem name={v} key={v}/>)
					})
				}
			</div>
			<div className="first-column-subtitle">
				Time
			</div>
			<div className="fc-sub-container">
			{
					TIME_ENCODING_TYPE.map(v=>{
						return (
							<DragListItem name={v} key={v}/>)
					})
				}
			</div>
            <div className="first-column-subtitle">
				Task
			</div>
			<div className="fc-sub-container">
			{
					taskItems.map(v=>{
						return (
							<DragListItem name={v} key={v}/>)
					})
				}
			</div>
		</div>
	);
}

const mapStateToProps = (state)=>({
	graphData: state.graphData
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(FristColumn)