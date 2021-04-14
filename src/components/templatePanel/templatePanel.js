import React, { useState, useEffect } from 'react'
import './templatePanel.css'
import TemplateList from '../templateList/templateList.js'
import { getStorageKeyArr } from '../../util/template'
import addSvg from '../../assets/add.svg'
import { defaultTemplates } from '../../data/template.js'
import { connect } from 'react-redux'
import { update } from '../../redux/config.redux.js'
import { initConfig } from '../../util/initConfig.js'
import * as _ from 'lodash'
import { coverTemplateConfig } from '../../util/dnetChart'

function TemplatePanel(props) {
    const [localStorage] = useState(window.localStorage)
    const [storageLength, setStorageLength] = useState(0)
    const [storageKeyArr, setStorageKeyArr] = useState(getStorageKeyArr(localStorage))


    useEffect(() => {
        // 初始化，判断该电脑的localStorage是否加载过默认的模板，没有先加载
        if (localStorage.lastIndex === undefined) {
            // 没有加载过模板
            localStorage.lastIndex = 0
            for (let i = defaultTemplates.length - 1; i > 0; i--) {
                const item = defaultTemplates[i]
                const lastIndex = localStorage.lastIndex
                const key = `DnetG-${lastIndex}`
                const content = JSON.stringify({
                    config: item.template,
                    name: item.name,
                    index: lastIndex
                })
                localStorage.setItem(key, content)
                localStorage.lastIndex = 1 + Number(lastIndex)
            }
            setStorageLength(localStorage.length)
        }
    }, [])

    useEffect(() => {
        setStorageKeyArr(getStorageKeyArr(localStorage))
    }, [storageLength])

    function handleTemplateAdd() {
        if (localStorage.lastIndex === undefined) {
            // 初始化
            localStorage.lastIndex = 0
        }
        if (!localStorage) {
            alert('浏览器支持localstorage')
            return false
        } else {
            //写入当前config
            const lastIndex = localStorage.lastIndex
            const key = `DnetG-${lastIndex}`
            const content = JSON.stringify({
                config: props.config,
                name: `specification-${lastIndex}`,
                index: lastIndex
            })
            localStorage.setItem(key, content)
            localStorage.lastIndex = 1 + Number(lastIndex)
            setStorageLength(localStorage.length)
        }
    }

    function handleTemplateCheck(v) {
        const vContent = JSON.parse(localStorage.getItem(v))
        if (vContent && vContent.config) {
            const newInitConfig = _.cloneDeep(initConfig)
            coverTemplateConfig(newInitConfig, vContent.config)
            props.update(newInitConfig)
        }
    }

    function handleTemplateRemove(storeKey) {
        localStorage.removeItem(storeKey)
        setStorageLength(localStorage.length)
    }
     
    return (
        <div
            style={{
                width: '1030px',
                height: '456px'
            }}
            className="template-panel-box"
        >
            <div className="sub-title">
                &nbsp;template
                <img
                    className="icon"
                    src={addSvg}
                    onClick={handleTemplateAdd}
                />
            </div>
            <TemplateList
                storageKeyArr = {storageKeyArr}
                handleTemplateCheck = {handleTemplateCheck}
                handleTemplateRemove = {handleTemplateRemove}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    config: state.config
})

const mapDispatchToProps = {
    update
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePanel)
