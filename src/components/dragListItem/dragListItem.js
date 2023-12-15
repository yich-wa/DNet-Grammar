import React from "react"
import "./dragListItem.css";
import addSvg from '../../assets/addSvg.svg'
import filterSvg from '../../assets/filterSvg.svg'
import { connect } from "react-redux"
import { setDraging } from '../../redux/drag.redux.js'

function DragListItem(props) {

	const handleDragStart = (e) => {
		props.setDraging(true)
		e.dataTransfer.setData("Text", props.name);
	}

	const handleDragEnd = (e) => {
		props.setDraging(false)
	}

	return (
		<div className="dli-container" 
			draggable="true" 
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			>
			<div className="dli-name">{props.name}</div>
			<div className="dli-left">
				<img
					className="dli-svg"
					src={addSvg}
					alt={'add'}
					// onClick={() => handleTemplateCheck(v)}
				/>
                <img
					className="dli-svg"
					src={filterSvg}
					alt={'filter'}
					// onClick={() => handleTemplateCheck(v)}
				/>
			</div>
		</div>
	);
}

const mapStateToProps = (state)=>({
	dragStatus:state.dragStatus
})

const mapDispatchToProps = {
	setDraging
} 

export default connect(mapStateToProps,mapDispatchToProps)(DragListItem)