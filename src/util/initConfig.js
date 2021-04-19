import {PATTERN_TO_CHANGE} from './const.js'
export const COMPARISON_CONFIG = [
    'shape',
    'fillColor',
    'strokeColor',
    'strokeWidth',
    'strokeType',
    'radius',
    'strokeDasharray',
    'textColor'
]
export const initConfig = {
    graph: {
        eachWidth: 300,
        eachHeight: 300,
        margin: 30,
        layout: {
            chooseType: 'forceDirect',
            vertical: {
                yDistance: 40,
                linkStyle: {
                    shape: 'curve'
                }
            },
            offLine:{

            },
            onLine: {
    
            },
            bipartite: {
    
            },
            circular: {
    
            },
            dagre: {

            },
            mds: {

            },
            grid: {
                rows: 4
            },
            matrix: {
                
            }
        },
        nodeStyle: {
            shape: 'circle',
            fillColor: '#e6e6e6',
            strokeColor: '#000000',
            strokeWidth: 1,
            radius: 6,
            strokeType: 'solid',
            textColor: 'white',
            opacity: 1
        },
        linkStyle: {
            shape: 'line',
            strokeColor: '#908F8F',
            strokeType: 'solid',
            strokeWidth: 1,
            opacity: 1,
            strokeDasharray: '3,3',
            pointShape: 'rect',
            pointFillColor: '#E6E6E6',
            pointOpacity: 1,
            pointRadius: 8,
            pointStrokeWidth:1,
            pointStrokeColor: '#000000',
            pointStrokeType: 'solid',
        }
    },
    time: {
        chooseTypes:['timeLine'],
        timeLine: {
            xDistance: 330,
            yDistance: 0,
            // 有可能只对节点进行该操作
            element: 'all',
            // 表示位置变换的函数，还有就是环状。。circular
            type: 'linear'
        },
        insert: {
            position:'origin',
            margin: 10,
            nodeStyle: {
                shape: 'circle',
                fillColor: '#FF5F00',
                strokeColor: '#000000',
                strokeWidth: 1,
                radius: 6,
                strokeType: 'solid',
                textColor: 'white',
                opacity: 1
            },
            linkStyle: {
                shape: 'curve',
                strokeColor: '#FF5F00',
                strokeType: 'solid',
                strokeWidth: 1,
                opacity: 1,
                strokeDasharray: '3,3',
                fillColor: '#ffffff',
                radius: 8,
            }
        },
        color: {
            element: 'all',
            startColor: '#F39350',
            endColor: '#5DBDAD'
        },
        animation: {
            speed: 500
        },
        markLine: {
            shape: 'line',
            strokeType: 'solid',
            strokeColor: '#FD8F8F',
            strokeWidth: 1,
            strokeDasharray: '5,5',
            opacity:1,
        },
        chart: {
            type:'line'
        }
    },
    task: {
        // 任务类型有：comparison\find\filter
        taskType: 'comparison',
        basedType: 'structure',
        find:{
            attr:'degree',
            // 结构有shortest-path，也有哑铃结构dumb-bell
            structure: 'graph',
            relation: '>=',
            value: 3
        },
        pattern: 'compare-structure',
        change: [...PATTERN_TO_CHANGE['compare-structure']],
        // change: [],
        comparison: {
            chooseItem: 'stable-Node',
            chooseTypes: COMPARISON_CONFIG,
            attr: '',
            // keyFrame可为上一帧、下一帧、具体某一帧
            keyFrame: 'next',
            elements: 'all',
            appearNode: {
                shape: 'rect',
                fillColor: '#F0785D',
                strokeColor: '#454444',
                strokeWidth: 1,
                strokeType: 'solid',
                textColor: 'white',
                radius: 8,
                opacity: 1
            },
            stableNode: {
                shape: 'circle',
                fillColor: '#E6E6E6',
                strokeColor: '#000000',
                strokeWidth: 1,
                radius: 6,
                strokeType: 'solid',
                textColor: 'white',
                opacity: 1
            },
            disappearNode: {
                shape: 'circle',
                fillColor: '#24B8E8',
                strokeColor: '#000000',
                strokeWidth: 1,
                radius: 8,
                strokeType: 'solid',
                textColor: 'white',
                opacity: 1
            },
            appearLink: {
                shape: 'curve',
                strokeColor: '#F0785D',
                strokeType: 'solid',
                strokeWidth: 1,
                opacity: 1,
                strokeDasharray: '3,3',
                // fillColor: '#ffffff',
                radius: 8,
            },
            stableLink: {
                shape: 'line',
                strokeColor: '#DAD5D5',
                strokeType: 'solid',
                strokeWidth: 1,
                opacity: 1,
                strokeDasharray: '3,3',
                // fillColor: '#ffffff',
                radius: 8,
            },
            disappearLink: {
                shape: 'curve',
                strokeColor: '#24B8E8',
                strokeType: 'solid',
                strokeWidth: 1,
                opacity: 1,
                strokeDasharray: '3,3',
                // fillColor: '#ffffff',
                radius: 8,
            }
        }
    }
}