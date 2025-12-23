document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const message = document.getElementById('message');
    const codeElement = document.getElementById('code');
    const snowflakesContainer = document.getElementById('snowflakes');
    
    // Δημιουργία χιονονιφάδων
    function createSnowflakes() {
        const snowflakeCount = 50;
        
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';
            
            // Τυχαίο μέγεθος
            const size = Math.random() * 10 + 10;
            snowflake.style.fontSize = `${size}px`;
            
            // Τυχαία αρχική θέση
            const startPosition = Math.random() * 100;
            snowflake.style.left = `${startPosition}vw`;
            
            // Τυχαία διάρκεια animation
            const duration = Math.random() * 10 + 10;
            snowflake.style.animationDuration = `${duration}s`;
            
            // Τυχαία καθυστέρηση έναρξης
            const delay = Math.random() * 10;
            snowflake.style.animationDelay = `${delay}s`;
            
            snowflakesContainer.appendChild(snowflake);
        }
    }
    
    // Άνοιγμα φακέλου
    envelopeContainer.addEventListener('click', function() {
        envelope.classList.toggle('open');
        
        // Εμφάνιση μηνύματος μετά το άνοιγμα
        if (envelope.classList.contains('open')) {
            setTimeout(() => {
                message.classList.add('show');
            }, 800);
        } else {
            message.classList.remove('show');
        }
    });
    
    // Αλλαγή κωδικού με κλικ
    codeElement.addEventListener('click', function() {
        const newCode = prompt("Εισάγετε τον νέο κωδικό που θέλετε να εμφανιστεί:", "CHRISTMAS2023");
        if (newCode && newCode.trim() !== "") {
            codeElement.textContent = newCode.trim();
        }
    });
    
    // Δημιουργία χιονονιφάδων
    createSnowflakes();
    
    // Προσθήκη εφέ όταν ο χρήστης κάνει hover πάνω από τον φάκελο
    envelopeContainer.addEventListener('mouseenter', function() {
        if (!envelope.classList.contains('open')) {
            envelope.style.transform = 'translateY(-10px)';
        }
    });
    
    envelopeContainer.addEventListener('mouseleave', function() {
        if (!envelope.classList.contains('open')) {
            envelope.style.transform = 'translateY(0)';
        }
    });
});