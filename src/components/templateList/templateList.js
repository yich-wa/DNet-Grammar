import React from 'react'
import deleteSvg from '../../assets/delete.svg'
import checkSvg from '../../assets/check.svg'
import PreviewItem from '../previewItem/previewItem.js'
import * as exampleData from '../../data/import/test2.json'
import { DNET_SAMPLE_WIDTH, DNET_SAMPLE_HEIGHT } from '../../util/const'

export default class TemplateList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        

        // let flag = false
        if(this.props.storageKeyArr.length===nextProps.storageKeyArr.length){
            return false
        }
        return true

        // const stateFields = Object.keys(this.state)
        // const sLength = stateFields.length
        // for (let i = 0; i < sLength; i = i + 1) {
        //     const field = stateFields[i]
        //     if (JSON.stringify(this.state[field]) !== JSON.stringify(nextState[field])) {
        //         flag = true
        //         break
        //     }
        // }
        // if(!flag){
        //     const fields = Object.keys(this.props)
        //     const fieldsLength = fields.length
        //     let flag = false
        //     for (let i = 0; i < fieldsLength; i = i + 1) {
        //         const field = fields[i]
        //         if (JSON.stringify(this.props[field]) !== JSON.stringify(nextProps[field])) {
        //             flag = true
        //             break
        //         }
        //     }
        // }
        // return flag
    }
    render() {
        return (
            <div className="template-content-box simple_scrollbar">
                {this.props.storageKeyArr.map((v, storageIndex) => {
                    const vContent = JSON.parse(window.localStorage.getItem(v))
                    if (!vContent) {
                        return null
                    }
                    return (
                        <div className="sample-item-wrap" key={`sample-${storageIndex}`}>
                            <div className="sample-item-information">
                                <div className="sample-item-icon">
                                    <div className="item-image-wrap">
                                        <img
                                            className="sample-item-svg"
                                            src={checkSvg}
                                            onClick={() => this.props.handleTemplateCheck(v)}
                                        />
                                    </div>
                                    <div className="item-image-wrap">
                                        <img
                                            className="sample-item-svg"
                                            src={deleteSvg}
                                            onClick={() => this.props.handleTemplateRemove(v)}
                                        />
                                    </div>
                                </div>
                                <div className="sample-item-name">{`Specification-${storageIndex}`}</div>
                            </div>
                            <div
                                className="sample-item-chart"
                                style={{
                                    // width: DNET_SAMPLE_WIDTH,
                                    height: DNET_SAMPLE_HEIGHT
                                }}
                            >
                                <PreviewItem 
                                    data={exampleData.graphs} 
                                    config={vContent.config} 
                                    sampleWidth = {DNET_SAMPLE_WIDTH}
                                    sampleHeight = {DNET_SAMPLE_HEIGHT}
                                    isSample = {true}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


}