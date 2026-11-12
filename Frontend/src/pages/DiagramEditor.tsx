
import { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

import {
  ArrowLeft,
  Plus,
  MousePointer2,
  Download,
  Share2,
  Undo2,
  Redo2,
} from 'lucide-react'

const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Start' },
    style: {
      background: '#211832',
      color: '#ffffff',
      border: '1px solid #9365ed',
      borderRadius: '12px',
      padding: '14px 30px',
      width: 140,
      textAlign: 'center',
    },
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'Process' },
    style: {
      background: '#211832',
      color: '#ffffff',
      border: '1px solid #9365ed',
      borderRadius: '12px',
      padding: '14px 30px',
      width: 140,
      textAlign: 'center',
    },
  },
  {
    id: '3',
    position: { x: 700, y: 100 },
    data: { label: 'End' },
    style: {
      background: '#211832',
      color: '#ffffff',
      border: '1px solid #9365ed',
      borderRadius: '12px',
      padding: '14px 30px',
      width: 140,
      textAlign: 'center',
    },
  },
]

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: '#a78bfa', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: '#a78bfa', strokeWidth: 2 },
  },
]

function DiagramEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            markerEnd: { type: MarkerType.ArrowClosed },
            style: { stroke: '#a78bfa', strokeWidth: 2 },
          },
          currentEdges,
        ),
      )
    },
    [setEdges],
  )

  const addNewNode = () => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      position: {
        x: 200 + nodes.length * 35,
        y: 250 + nodes.length * 25,
      },
      data: { label: `New Node ${nodes.length + 1}` },
      style: {
        background: '#211832',
        color: '#ffffff',
        border: '1px solid #9365ed',
        borderRadius: '12px',
        padding: '14px 25px',
        width: 160,
        textAlign: 'center',
      },
    }

    setNodes((currentNodes) => [...currentNodes, newNode])
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#09090b',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          height: 64,
          minHeight: 64,
          borderBottom: '1px solid #27242e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => window.history.back()}
            style={iconButtonStyle}
            title="Go back"
          >
            <ArrowLeft size={18} />
          </button>

          <strong style={{ fontSize: 18 }}>NOONT</strong>
          <span style={{ color: '#777', fontSize: 13 }}>/</span>
          <span style={{ color: '#aaa', fontSize: 13 }}>
            Untitled Diagram
          </span>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button style={actionButtonStyle}>
            <Undo2 size={16} /> Undo
          </button>
          <button style={actionButtonStyle}>
            <Redo2 size={16} /> Redo
          </button>
          <button style={actionButtonStyle}>
            <Share2 size={16} /> Share
          </button>
          <button style={actionButtonStyle}>
            <Download size={16} /> Export
          </button>
        </div>
      </header>

      <main style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <aside
          style={{
            width: 240,
            minWidth: 240,
            padding: 20,
            borderRight: '1px solid #27242e',
            background: '#101014',
          }}
        >
          <p style={sectionLabelStyle}>TOOLS</p>

          <button style={toolButtonStyle}>
            <MousePointer2 size={17} /> Select
          </button>

          <button style={toolButtonStyle} onClick={addNewNode}>
            <Plus size={17} /> Add new node
          </button>

          <p style={{ ...sectionLabelStyle, marginTop: 32 }}>
            INSTRUCTIONS
          </p>

          <p style={helpTextStyle}>
            • Drag nodes to move them.
          </p>
          <p style={helpTextStyle}>
            • Connect nodes using their handles.
          </p>
          <p style={helpTextStyle}>
            • Use the Add new node button to create nodes.
          </p>
          <p style={helpTextStyle}>
            • Zoom and pan around your canvas.
          </p>
        </aside>

        <section style={{ flex: 1, position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 18,
              zIndex: 5,
              background: '#17141f',
              border: '1px solid #302640',
              padding: '9px 14px',
              borderRadius: 8,
              fontSize: 12,
              color: '#c4b5fd',
            }}
          >
            FLOWCHART CANVAS
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultEdgeOptions={{
              markerEnd: { type: MarkerType.ArrowClosed },
            }}
            fitView
            colorMode="dark"
          >
            <Background color="#37313f" gap={22} size={1} />
            <Controls />
            <MiniMap
              nodeColor="#8b5cf6"
              maskColor="rgba(9, 9, 11, 0.7)"
              style={{ background: '#17141f' }}
            />
          </ReactFlow>
        </section>
      </main>
    </div>
  )
}

const iconButtonStyle = {
  background: '#17141f',
  color: '#ffffff',
  border: '1px solid #302640',
  borderRadius: 8,
  padding: 9,
  display: 'flex',
  cursor: 'pointer',
}

const actionButtonStyle = {
  background: '#17141f',
  color: '#ddd',
  border: '1px solid #302640',
  borderRadius: 8,
  padding: '9px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  cursor: 'pointer',
}

const toolButtonStyle = {
  width: '100%',
  background: '#1b1725',
  color: '#ddd',
  border: '1px solid #302640',
  borderRadius: 8,
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10,
  cursor: 'pointer',
}

const sectionLabelStyle = {
  color: '#8b7b9f',
  fontSize: 11,
  letterSpacing: 1.5,
  fontWeight: 700,
  marginBottom: 16,
}

const helpTextStyle = {
  color: '#999',
  fontSize: 12,
  lineHeight: 1.7,
}

export default DiagramEditor
