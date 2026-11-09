// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import { 
  initialProfile, 
  initialStudySets, 
  shopItems 
} from './data/mockData';
import './index.css';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [profile, setProfile] = useState(initialProfile);
  const [studySets, setStudySets] = useState(initialStudySets);

  return (
    <div>
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        coins={profile.coins} 
      />

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* 1. DASHBOARD */}
        {activeView === 'dashboard' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h1>Welcome back, {profile.username}! 👋</h1>
            <p style={{ color: 'var(--color-grey)' }}>Keep learning. Keep leveling up!</p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-darkblue)', padding: '1rem', borderRadius: '8px', flex: 1, borderLeft: '4px solid var(--color-orange)' }}>
                <h3>🔥 {profile.streak} Days</h3>
                <p style={{ color: 'var(--color-grey)', margin: 0 }}>Day Streak</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-darkblue)', padding: '1rem', borderRadius: '8px', flex: 1, borderLeft: '4px solid var(--color-gold)' }}>
                <h3>🪙 {profile.coins}</h3>
                <p style={{ color: 'var(--color-grey)', margin: 0 }}>Total Coins</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => setActiveView('game')} 
                style={{ padding: '12px 20px', backgroundColor: 'var(--color-green)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                🎮 Play a Game
              </button>

              <button 
                onClick={() => setActiveView('studySets')} 
                style={{ padding: '12px 20px', backgroundColor: 'var(--color-purple)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                📖 View Study Sets
              </button>

              <button 
                onClick={() => setActiveView('shop')} 
                style={{ padding: '12px 20px', backgroundColor: 'var(--color-blue)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                🛒 Visit Shop
              </button>
            </div>
          </div>
        )}

        {/* 2. GAME VIEW */}
        {activeView === 'game' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h2>🎮 Study Game Arena</h2>
            <p style={{ color: 'var(--color-grey)' }}>Question 1 of 3: What does BST stand for?</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '1.5rem 0' }}>
              <button style={{ padding: '12px', backgroundColor: 'var(--bg-darkblue)', color: '#fff', border: '1px solid var(--color-blue)', borderRadius: '6px', textAlign: 'left', cursor: 'pointer' }}>
                A) Binary Search Tree
              </button>
              <button style={{ padding: '12px', backgroundColor: 'var(--bg-darkblue)', color: '#fff', border: '1px solid var(--color-grey)', borderRadius: '6px', textAlign: 'left', cursor: 'pointer' }}>
                B) Basic Sorting Technique
              </button>
            </div>

            <button 
              onClick={() => {
                setProfile(prev => ({ ...prev, coins: prev.coins + 30 }));
                alert("Correct! +30 Coins earned!");
                setActiveView('studySets');
              }}
              style={{ padding: '10px 20px', backgroundColor: 'var(--color-green)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* 3. PROFILE VIEW */}
        {activeView === 'profile' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h2>👤 Player Profile & Progression</h2>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem' }}>
              <div style={{ fontSize: '3rem', background: 'var(--bg-darkblue)', padding: '20px', borderRadius: '50%' }}>🧙‍♂️</div>
              <div>
                <h3>{profile.username}</h3>
                <p style={{ color: 'var(--color-gold)' }}>Equipped: {profile.equippedAvatar} & {profile.equippedBorder}</p>
                <p>Coins Available: 🪙 {profile.coins}</p>
              </div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>Study Set Progress</h3>
            {studySets.map(set => (
              <div key={set.id} style={{ marginBottom: '1rem', backgroundColor: 'var(--bg-darkblue)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{set.title}</span>
                  <span style={{ color: 'var(--color-green)' }}>{set.progress}% Mastered</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. SHOP VIEW */}
        {activeView === 'shop' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h2>🛒 Cosmetic Shop</h2>
            <p style={{ color: 'var(--color-grey)' }}>Spend your hard-earned coins on awesome cosmetics!</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              {shopItems.map(item => (
                <div key={item.id} style={{ backgroundColor: 'var(--bg-darkblue)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-grey)', textAlign: 'center' }}>
                  <h3>{item.name}</h3>
                  <p style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>🪙 {item.price} Coins</p>

                  <button 
                    onClick={() => {
                      if (profile.coins >= item.price) {
                        setProfile(prev => ({ ...prev, coins: prev.coins - item.price }));
                        alert(`Successfully purchased ${item.name}!`);
                      } else {
                        alert("Not enough coins!");
                      }
                    }}
                    style={{ padding: '8px 16px', backgroundColor: 'var(--color-orange)', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Buy Item
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. EDIT STUDY SET VIEW */}
        {activeView === 'editSet' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h2>✏️ Edit Study Set</h2>
            <button onClick={() => setActiveView('studySets')} style={{ marginBottom: '1rem', padding: '6px 12px', backgroundColor: 'var(--color-grey)', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>← Back</button>
            <p style={{ color: 'var(--color-grey)' }}>Form elements to edit study set questions and answers.</p>
          </div>
        )}

        {/* 6. CREATE STUDY SET VIEW */}
        {activeView === 'createSet' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <h2>➕ Create New Study Set</h2>
            <button onClick={() => setActiveView('studySets')} style={{ marginBottom: '1rem', padding: '6px 12px', backgroundColor: 'var(--color-grey)', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>← Back</button>
            <p style={{ color: 'var(--color-grey)' }}>Form elements to create a new study set from scratch.</p>
          </div>
        )}

        {/* 7. STUDY SETS LIST VIEW */}
        {activeView === 'studySets' && (
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>📚 My Study Sets</h2>
              <button 
                onClick={() => setActiveView('createSet')} 
                style={{ padding: '10px 16px', backgroundColor: 'var(--color-green)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                + Create New Set
              </button>
            </div>
            
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
              {studySets.map(set => (
                <div key={set.id} style={{ backgroundColor: 'var(--bg-darkblue)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3>{set.title}</h3>
                    <p style={{ color: 'var(--color-grey)', margin: 0 }}>Category: {set.category} | Progress: {set.progress}%</p>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => setActiveView('game')} style={{ padding: '6px 12px', backgroundColor: 'var(--color-blue)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Study</button>
                    <button onClick={() => setActiveView('editSet')} style={{ padding: '6px 12px', backgroundColor: 'var(--color-purple)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => setStudySets(studySets.filter(s => s.id !== set.id))} style={{ padding: '6px 12px', backgroundColor: 'var(--color-red)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}