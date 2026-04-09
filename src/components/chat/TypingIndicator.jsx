export default function TypingIndicator() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '4px', 
        padding: '12px 16px', 
        background: 'rgba(255,255,255,0.06)', 
        borderRadius: '16px 16px 16px 4px', 
        width: 'fit-content',
        alignItems: 'center'
      }}
    >
      {[0, 1, 2].map(i => (
        <div 
          key={i} 
          style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: '#818CF8', 
            animation: `chatBounce 1.4s ease-in-out ${i * 0.15}s infinite` 
          }}
        />
      ))}
    </div>
  );
}
