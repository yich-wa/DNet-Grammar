import React, { useState, useEffect } from 'react'
import './combinePanel.css'
import TimePanel from '../timePanel/timePanel.js'
import TaskPanel from '../taskPanel/taskPanel.js'
import GraphPanel from '../graphPanel/graphPanel.js'
import FristColumn from '../firstColumn/firstColumn.js'
import SecondColumn from '../secondColumn/secondColumn.js'

export default function CombinePanel(props) {
    const [interactionType, setInteractionType] = useState('Main')
    return (
        <div className="combine-panel-box">
            <div className="sub-title">
                &nbsp;ConfigInput
                {/* <div className="cbpl-header-text"> */}
                    <span className="cbpl-sub-title"> </span>
                    <span
                        className={`cbpl-sub-title ${
                            interactionType === 'Main' ? 'cbpl-sub-choose' : ''
                        }`}
                        onClick={() => setInteractionType('Main')}
                    >
                        Main
                    </span>
                    <span className="cbpl-sub-title">|</span>
                    <span
                        className={`cbpl-sub-title ${interactionType === 'Detail' ? 'cbpl-sub-choose' : ''}`}
                        onClick={() => setInteractionType('Detail')}
                    >
                        Detail
                    </span>
                {/* </div> */}
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-save"></use>
                </svg>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-set"></use>
                </svg>
            </div>
            {interactionType === 'Main' ? (
                <div className="cbpl-content-container simple_scrollbar">
                    <FristColumn />
                    <SecondColumn />
                </div>
            ) : (
                <div className="cbpl-content-container simple_scrollbar">
                    <div>
                        <GraphPanel />
                        <TaskPanel />
                    </div>
                    <TimePanel />
                </div>
            )}
        </div>
    )
}
