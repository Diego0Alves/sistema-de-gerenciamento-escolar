import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
	const handleClick = () => {
		alert('Botão clicado!');
	};

	return (
		<div style={{
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: '#f5f7fa'
		}}>
			<button
				onClick={handleClick}
				style={{
					padding: '16px 28px',
					fontSize: '18px',
					borderRadius: '8px',
					border: 'none',
					background: '#2563eb',
					color: 'white',
					cursor: 'pointer',
					boxShadow: '0 4px 14px rgba(37,99,235,0.2)'
				}}
			>
				Ação do Usuário
			</button>
		</div>
	);
};

const rootEl = document.getElementById('root');
if (rootEl) {
	createRoot(rootEl).render(<App />);
}

export default App;
