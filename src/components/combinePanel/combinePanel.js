import React from 'react'
import './combinePanel.css'
import TimePanel from '../timePanel/timePanel.js'
import TaskPanel from '../taskPanel/taskPanel.js'
import GraphPanel from '../graphPanel/graphPanel.js'
import saveSvg from '../../assets/save.svg'
import settingsSvg from '../../assets/settings.svg'

export default function CombinePanel(props) {
    return (
        <div className="combine-panel-box">
            <div className="sub-title">
                &nbsp;Specification
                <img
                    className="icon"
                    src={saveSvg}
                />
                <img
                    className="icon"
                    src={settingsSvg}
                />
            </div>
            <div
                className="cbpl-content-container simple_scrollbar"
            >
                <div>
                    <GraphPanel/>
                    <TaskPanel/>
                </div>
                <TimePanel/>
            </div>
        </div>
    )
}
