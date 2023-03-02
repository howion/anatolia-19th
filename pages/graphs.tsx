import React, { useMemo } from 'react'
import { Meta } from '/components/meta'

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import type { Node, XYPosition } from 'reactflow'

import ReactFlow, {
    Handle,
    Position,
    // MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState
    // addEdge,
} from 'reactflow'

import 'reactflow/dist/style.css'

function ANode({ data }: { data: any }): FCReturn {
    return (
        <>
            <Handle type="source" position={Position.Bottom} hidden={false} />
            <Handle type="target" position={Position.Top} hidden={false} />
            <div className={'ma-graphs-node --size-' + data.size}>
                <img className="ma-graphs-node-image" src={data.image} />
                <span className="ma-graphs-node-title">{data.title}</span>
                <span className="ma-graphs-node-subtitle">{data.subtitle}</span>
            </div>
        </>
    )
}

function computeRadialCoordinates(center: XYPosition, radius: number, count: number): XYPosition[] {
    const result: XYPosition[] = []

    for (let i = 0; i < count; i++) {
        const rads = ((2 * Math.PI) / count) * i
        result.push({
            x: center.x + radius * Math.cos(rads),
            y: center.y + radius * Math.sin(rads)
        })
    }

    return result
}

const circ1 = computeRadialCoordinates({ x: 0, y: 0 }, 500, 3)
const circMecidi = computeRadialCoordinates(circ1[0], 350, 3)

const initialNodes: Node<any>[] = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        type: 'anode',
        data: {
            title: 'Sultan',
            subtitle: '',
            size: 4
        }
    },
    {
        id: '2',
        position: circ1[0],
        type: 'anode',
        data: {
            title: 'Mecidi Nişanı',
            subtitle: '',
            size: 3
        }
    },
    {
        id: '3',
        position: circ1[1],
        type: 'anode',
        data: {
            title: 'Osmani Nişanı',
            subtitle: '',
            size: 3
        }
    },
    {
        id: '4',
        position: circMecidi[0],
        type: 'anode',
        data: {
            title: '1. Derece',
            subtitle: 'Mecidi',
            size: 2
        }
    },
    {
        id: '5',
        position: circMecidi[1],
        type: 'anode',
        data: {
            image: '/img/madalyonlar/3_rutbe_mecidi.png',
            title: '3. Derece',
            subtitle: 'Mecidi',
            size: 2
        }
    },
    {
        id: '6',
        position: circMecidi[2],
        type: 'anode',
        data: {
            title: '4. Derece',
            subtitle: 'Mecidi',
            size: 2
        }
    }
    // },
    // {
    //     id: '4',
    //     position: circ1[2],
    //     type: 'anode',
    //     data: {
    //         title: 'Şefkat Nişanı',
    //         subtitle: '',
    //         size: 3
    //     }
    // }
]

const initialEdges = [
    { id: 'e2-1', source: '2', target: '1' },
    { id: 'e3-1', source: '3', target: '1' },
    { id: 'e4-2', source: '4', target: '2' },
    { id: 'e5-2', source: '5', target: '2' },
    { id: 'e6-2', source: '6', target: '2' }
]

export default function Graphs(): FCReturn {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    const nodeTypes = useMemo(() => ({ anode: ANode }), [])

    return (
        <>
            <Meta />
            <div className="ma-graphs-container">
                <ReactFlow
                    nodeTypes={nodeTypes}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable={true}
                    nodesConnectable={false}
                    elementsSelectable={false}

                    // onConnect={onConnect}
                >
                    {/* <MiniMap maskColor="red" /> */}
                    <Controls showFitView={false} showInteractive={false} />
                    {/* <Background /> */}
                </ReactFlow>
            </div>
        </>
    )
}
