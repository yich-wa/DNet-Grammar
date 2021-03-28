import React, { useEffect, useState, useRef } from "react";
import "./inputListItem.css";
import deleteSvg from '../../assets/deleteSvg.svg'
import { connect } from "react-redux"
import { 
	deleteItemToEncoding, 
	addItemToEncoding,
	updateItemClearRow,
	updateItemInputRow
} from '../../redux/encoding.redux.js'

function InputListItem(props) {
	const {info ,itemIndex, rowIndex} = props
	const handleDelete = ()=>{
		console.log("handleDelete--",itemIndex, rowIndex)
		props.updateItemClearRow(itemIndex, rowIndex)
	}
	const handleOnDrop = (event)=>{
		event.preventDefault()
		const content=event.dataTransfer.getData("Text")
		console.log("handleOnDrop--",itemIndex, rowIndex, content)
		props.updateItemInputRow(itemIndex, rowIndex, content)
	}
	return (
		<div 
			onDrop={handleOnDrop}
			className="ili-container"
		>
			<div className="ili-name">{info.name}</div>
			{
				info.filled ?
				<div className='ili-left-filled'>
					<div>{info.content}</div>
					<img
						className="ili-delete-svg"
						src={deleteSvg}
						onClick={handleDelete}
					/>
				</div>:
				<div className={`ili-left ${props.active ? 'ili-left-active': 'ili-left-default'}`}>
					drop a Item here
				</div>
			}
		</div>
	);
}

const mapStateToProps = (state)=>({
})

const mapDispatchToProps = {
	updateItemClearRow,
	updateItemInputRow,
	addItemToEncoding,
	deleteItemToEncoding
} 

export default connect(mapStateToProps,mapDispatchToProps)(InputListItem)