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

export const defaultConfigs = {
    graph: {
        width: 250,
        height: 250,
        eachWidth: 250,
        eachHeight: 250,
        margin: 30,
        nodeStyle: {
            shape: 'circle',
            fillColor: '#DAD5D5',
            strokeColor: '#000000',
            strokeWidth: 1,
            radius: 6,
            strokeType: 'solid',
            textColor: 'white'
        },
        linkStyle: {
            shape: 'curve',
            strokeColor: '#908F8F',
            strokeType: 'solid',
            strokeWidth: 2,
            strokeDasharray: '3,3'
        },
        layout: {
            chooseType: 'offLine',
            vertical: {},
            offLine: {},
            forceDirect: {
                tickCount: 10
            },
            grid: {
                columnCount: 1
            },
            onLine: {},
            bipartite: {},
            circle: {
                applyDefault: true,
                startRadius: 50,
                endRadius: 200,
                rotateAngle: 720
            },
            dagre: {
                rankdir: 'TB',
                nodeSep: 5,
                rankSep: 5
            }
        },
    },
    time: {
        chooseTypes: [],
        insert: {
            position: 'bottom',
            margin: 10,
            nodeStyle: {
                shape: 'circle',
                fillColor: '#ffcc00',
                strokeColor: '#000000',
                strokeWidth: 1,
                radius: 6,
                strokeType: 'solid',
                textColor: 'white',
                opcity: 1
            },
            linkStyle: {
                shape: 'curve',
                strokeColor: '#ffcc00',
                strokeType: 'solid',
                strokeWidth: 2,
                opacity: 1,
                strokeDasharray: '3,3'
            }
        },
        color: {
            element: 'all',
            startColor: '#FD8F8F',
            endColor: '#90B5FB',
            number: 5
        },
        animation: {
            speed: 1800
        },
        markLine: {
            shape: 'line',
            strokeType: 'dashed',
            strokeColor: '#FD8F8F',
            strokeWidth: 1,
            strokeDasharray: '5,5'
        },
        timeLine: {
            xDistance: 250,
            yDistance: 0,
            // 有可能只对节点进行该操作
            element: 'all'
        }
    },
task: {
    // 除了comparison还有find,还有none显示none的话，后面都是无效的
    taskType: 'comparison',
    // 除了attr还有structure
    // 之前的比较可以理解为：comparison-structure的结果。
    basedType: 'structure',
    comparison: {
        key: 'structure',
        value: 'all',
        isOn: true,
        keyFrame: 'next',
        elements: 'all',
        chooseTypes: COMPARISON_CONFIG,
        // keyFrame可为上一帧、下一帧、具体某一帧
        appearNode: {
            shape: 'circle',
            fillColor: '#FD8F8F',
            strokeColor: '#000000',
            strokeWidth: 1,
            strokeType: 'solid',
            textColor: 'white',
            radius: 8,
            opacity: 1
        },
        stableNode: {
            shape: 'circle',
            fillColor: '#DAD5D5',
            strokeColor: '#000000',
            strokeWidth: 1,
            radius: 6,
            strokeType: 'solid',
            textColor: 'white',
            opacity: 1
        },
        disappearNode: {
            shape: 'circle',
            fillColor: '#90B5FB',
            strokeColor: '#000000',
            strokeWidth: 1,
            radius: 8,
            strokeType: 'solid',
            textColor: 'white',
            opacity: 1
        },
        appearLink: {
            shape: 'curve',
            strokeColor: '#FD8F8F',
            strokeType: 'solid',
            strokeWidth: 3,
            opacity: 1,
            strokeDasharray: '3,3'
        },
        stableLink: {
            shape: 'line',
            strokeColor: '#908F8F',
            strokeType: 'solid',
            strokeWidth: 1,
            opacity: 1,
            strokeDasharray: '3,3'
        },
        disappearLink: {
            shape: 'curve',
            strokeColor: '#90B5FB',
            strokeType: 'solid',
            strokeWidth: 3,
            opacity: 1,
            strokeDasharray: '3,3'
        }
    },
find: {
    // 包含某种属性的元素（节点、链接）
    key: 'weight',
    value: 10,
    resultNode: {
        shape: 'circle',
        fillColor: '#90B5FB',
        strokeColor: '#000000',
        strokeWidth: 1,
        radius: 8,
        strokeType: 'solid',
        textColor: 'white',
        opacity: 1
    },
    resultLink: {
        shape: 'curve',
        strokeColor: '#FD8F8F',
        strokeType: 'solid',
        strokeWidth: 3,
        opacity: 1,
        strokeDasharray: '3,3'
    },
}
}
}
