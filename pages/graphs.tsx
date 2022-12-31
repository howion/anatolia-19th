import React from 'react'
import { Meta } from '/components/meta'

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow'

import 'reactflow/dist/style.css'

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function Graphs(): FCReturn {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta />
            <div className="ma-graphs-container">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    // onConnect={onConnect}
                >
                    {/* <MiniMap /> */}
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>
        </>
    )
}
