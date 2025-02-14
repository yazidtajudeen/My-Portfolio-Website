import ModeButton from './modeButton';

export default function Navbar() {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ModeButton />
                <HireMeButton />
            </div>
        </nav>
    );
} 