import React, { useEffect, useState } from 'react'
import { converObject2Array } from '../../util/preview.js'
import DnetChartContainer from '../dnetCharts/dnetChartContainer/dnetChartContainer.js'
import dnetv from '../../util/dnetv.js'
import { getRenderType } from '../../util/dnetChart'


export default function PreviewItem(props) {
    // 要计算
    const [subGraphs, setSubGraphs] = useState([])
    const [sumGraphs, setSumGraphs] = useState({ nodes: [], links: [] })
    const [markLine, setMarkLine] = useState({})
    const [renderType, setRenderType] = useState('')
    const [isSample, setIsSample] = useState(false)
    const [sampleWidth, setSampleWidth] = useState(false)
    const [sampleHeight, setSampleHeight] = useState(false)
    const [config, setConfig] = useState({})
    useEffect(() => {
        if (props.data.length > 0) {
            let dnetvInstance = dnetv()
            dnetvInstance.initData(props.data, props.config)
            let { timeGraphs: tempTimeGraphs, markLine: tempMarkLine, sumGraphs: tempSumGraphs} = dnetvInstance
            tempTimeGraphs = converObject2Array(tempTimeGraphs)
            if(JSON.stringify(subGraphs)!==JSON.stringify(tempTimeGraphs)){
                setSubGraphs(tempTimeGraphs)
            }
            if(JSON.stringify(markLine)!==JSON.stringify(tempMarkLine)){
                setMarkLine(tempMarkLine)
            }
            if(JSON.stringify(sumGraphs)!==JSON.stringify(tempSumGraphs)){
                setSumGraphs(tempSumGraphs)
            }   
        }
        if(JSON.stringify(config)!==JSON.stringify(props.config)){
            setConfig(props.config)
        }
    }, [props.config, props.data])

    useEffect(() => {
        if(isSample!==props.isSample){
            setIsSample( props.isSample)
        }
        if(sampleWidth!==props.sampleWidth){
            setSampleWidth(props.sampleWidth)
        }
        if(sampleHeight!== props.sampleHeight){
            setSampleHeight(props.sampleHeight)
        }
    }, [props.sampleWidth, props.sampleHeight, props.isSample])


    useEffect(() => {
        if (props.data.length > 0) {
            let tempRenderType = getRenderType(props.config.time.chooseTypes)
            if(tempRenderType!==renderType){
                setRenderType(tempRenderType)
            }
        } else {
            setRenderType('')
        }
    }, [props.data, props.config.time.chooseTypes])
    if (props.data.length === 0) return null
    return (
        <DnetChartContainer
            sampleWidth={sampleWidth}
            sampleHeight={sampleHeight}
            isSample={isSample}
            renderType={renderType}
            subGraphs={subGraphs}
            sumGraphs={sumGraphs}
            config={config}
            len={subGraphs.length}
            markLine={markLine}
        />
    )
}


/*
export default class PreviewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            renderType: '',
            markLine: {},
            subGraphs: [],
            sumGraphs: { nodes: [], links: [] }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        
        let flag = false
        const stateFields = Object.keys(this.state)
        const sLength = stateFields.length
        for (let i = 0; i < sLength; i = i + 1) {
            const field = stateFields[i]
            if (JSON.stringify(this.state[field]) !== JSON.stringify(nextState[field])) {
                flag = true
                break
            }
        }
        if(!flag){
            const fields = Object.keys(this.props)
            const fieldsLength = fields.length
            let flag = false
            for (let i = 0; i < fieldsLength; i = i + 1) {
                const field = fields[i]
                if (JSON.stringify(this.props[field]) !== JSON.stringify(nextProps[field])) {
                    flag = true
                    break
                }
            }
        }
        console.log("shouldComponentUpdate----flag", flag)
        return flag
    }
    componentDidMount() {
        this.updateData('componentDidMount')
    }
    getSnapshotBeforeUpdate() {
        this.updateData('getSnapshotBeforeUpdate')
    }

    updateData(params) {
        
        let renderType, subGraphs, markLine, sumGraphs
        const { data, config } = this.props
        renderType = getRenderType(config.time.chooseTypes)
        let dnetvInstance = dnetv()
        dnetvInstance.initData(data, config)
        subGraphs = converObject2Array(dnetvInstance.timeGraphs)
        markLine = dnetvInstance.markLine
        sumGraphs = dnetvInstance.sumGraphs
        this.setState({
            renderType,
            markLine,
            subGraphs,
            sumGraphs
        })
        console.log("updateData-----------------",params)
    }

    render() {
        const { config, sampleWidth, sampleHeight } = this.props
        console.log('---PreviewItem---render', config.time.chooseTypes)
        if (this.props.data.length === 0) {
            return null
        }
        return (
            <DnetChartContainer
                sampleWidth={sampleWidth}
                sampleHeight={sampleHeight}
                isSample={true}
                renderType={this.state.renderType}
                subGraphs={this.state.subGraphs}
                sumGraphs={this.state.sumGraphs}
                config={config}
                len={this.state.subGraphs.length}
                markLine={this.state.markLine}
            />
        )
    }
}

*/