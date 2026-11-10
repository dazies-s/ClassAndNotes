// The Navbar component accepts activeView, setActiveView, and coins as props 
 // so users can switch between views and see live currency updates.

export default function Navbar({ activeView, setActiveView, coins }) {
  // List of navigation destinations matching your 7 major views
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'studySets', label: 'Study Sets' },
    { id: 'shop', label: 'Shop' },
    { id: 'profile', label: 'Profile' }
  ];

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', // room em: length unit based on the font size
      backgroundColor: 'var(--bg-nav)', 
      borderBottom: '2px solid var(--color-darkblue)' 
    }}>
      <h2 style={{ color: 'var(--color-white)', margin: 0 }}>📚 StudyQuest</h2>
      
      <div>
        {/* using .map() to dynamically render navigation buttons cleanly */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)} // Updates parent state to switch the active view
            style={{
              margin: '0 4px',
              padding: '8px 14px',
              backgroundColor: activeView === item.id ? 'var(--color-purple)' : 'transparent',
              color: 'var(--color-white)',
              border: '1px solid var(--color-grey)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: activeView === item.id ? 'bold' : 'normal'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Displays real-time gold/coin currency balance */}
      <div style={{ 
        backgroundColor: 'var(--bg-card)', 
        padding: '6px 14px', 
        borderRadius: '20px', 
        color: 'var(--color-gold)',
        border: '1px solid var(--color-gold)',
        fontWeight: 'bold'
      }}>
        🪙 {coins} Coins
      </div>
    </nav>
  );
}