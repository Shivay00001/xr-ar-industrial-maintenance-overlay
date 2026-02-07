


export function Overlay() {
    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            color: 'cyan',
            fontFamily: 'Segoe UI, sans-serif',
            pointerEvents: 'none',
            textShadow: '0 0 5px cyan'
        }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Industrial Maintenance Overlay</h1>
            <p style={{ margin: 0, fontSize: '1rem' }}>System Status: <span style={{ color: '#0f0' }}>ONLINE</span></p>
            <div style={{
                marginTop: '10px',
                border: '1px solid cyan',
                padding: '10px',
                background: 'rgba(0, 50, 50, 0.5)'
            }}>
                <strong>Active Task:</strong> Hydraulic Pump #4 Inspection<br />
                <small>Step 2/5: Verify pressure levels</small>
            </div>
        </div>
    )
}
