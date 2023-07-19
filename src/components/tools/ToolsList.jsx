const ToolsList = ({ tools }) => {
  return <pre className="font-mono">{JSON.stringify(tools, null, 2)}</pre>
}

export default ToolsList
