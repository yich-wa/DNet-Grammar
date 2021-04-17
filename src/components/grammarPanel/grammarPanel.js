import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import FileSaver from 'file-saver'
import { 
    REACT_JSON_OPTIONS,
} from '../../util/const'
import { connect } from 'react-redux'
import { update, modifyConfig } from '../../redux/config.redux.js'                                                                                                                            
import './grammarPanel.css'
import { getSimpleGrammar, updateSimpleConfig } from '../../util/dnetChart.js'
import addSvg from '../../assets/add.svg'
import downloadSvg from '../../assets/download.svg'

function GrammarPanel(props) {
    const [grammarType, setGrammarType] = useState('simple')
    function handleTemplateAdd() {
        console.log('未实现grammar的加载')
    }

    function handleTemplateSave() {
        let content = JSON.stringify(props.config)
        let type = 'data:application/json;charset=utf-8'
        let blob = new Blob([content], { type: type })

        let isFileSaverSupported = false
        try {
            isFileSaverSupported = !!new Blob()
        } catch (e) {
            console.log(e)
        }

        if (isFileSaverSupported) {
            FileSaver.saveAs(blob, 'template.json')
        } else {
            FileSaver.open(encodeURI(type + ',' + content))
        }
    }

    function handleReactJsonEdit(obj) {
        // console.log("obj, type", JSON.stringify(obj), type)
       
        if(grammarType==='all'){
            props.update(obj.updated_src)
        }else{
            const flag = updateSimpleConfig(obj, props.config, props.modifyConfig)
            if(!flag){
                return false
            }
        }
        
    }

    return (
        <div className="grammar-panel-box">
            <div className="sub-title">
                &nbsp;Grammar
                <img
                    className="icon"
                    src={addSvg}
                    onClick={handleTemplateAdd}
                />
                <img
                    className="icon"
                    src={downloadSvg}
                    onClick={handleTemplateSave}
                />
            </div>
            <div className="gp-header-text">
                <div
                    className={`gp-sub-title ${grammarType === 'simple' ? 'gp-sub-choose' : ''}`}
                    onClick={() => setGrammarType('simple')}
                >
                    Simple
                </div>
                <div className="gp-sub-divide"></div>
                <div
                    className={`gp-sub-title ${grammarType === 'all' ? 'gp-sub-choose' : ''}`}
                    onClick={() => setGrammarType('all')}
                >
                    All
                </div>
            </div>
            <div className="json-text simple_scrollbar">
                <ReactJson
                    className="json-box"
                    onEdit={handleReactJsonEdit}
                    {...REACT_JSON_OPTIONS}
                    src={grammarType === 'simple' ? getSimpleGrammar(props.config) : props.config}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    config: state.config
})

const mapDispatchToProps = {
    update,
    modifyConfig
}

export default connect(mapStateToProps, mapDispatchToProps)(GrammarPanel)
