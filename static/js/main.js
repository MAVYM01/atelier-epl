// ===== ALERTES AUTO-MASQUANTES =====
document.addEventListener('DOMContentLoaded', function() {
    // Les alerts disparaissent après 5 secondes
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            alert.style.transition = 'opacity 0.5s';
            alert.style.opacity = '0';
            setTimeout(function() { alert.remove(); }, 500);
        }, 5000);
    });
});

// ===== CONFIRMATION SUPPRESSION =====
document.addEventListener('click', function(e) {
    const deleteLink = e.target.closest('.btn-delete');
    if (deleteLink) {
        if (!confirm('⚠️ Êtes-vous sûr de vouloir supprimer cet élément ?')) {
            e.preventDefault();
        }
    }
});

// ===== TOOLTIP POUR BOUTONS =====
document.addEventListener('mouseover', function(e) {
    const btn = e.target.closest('.btn-submit, .btn-add, .btn-delete, .btn-repair');
    if (btn) {
        btn.style.cursor = 'pointer';
    }
});