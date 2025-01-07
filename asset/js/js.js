// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebarDesktop');
//     sidebar.classList.toggle('collapsed');
// }
function toggleSidebar() {
    const sidebar = document.getElementById('sidebarDesktop');
    const toggleText = document.getElementById('sidebarToggleText');

    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        toggleText.innerText = '';
    } else {
        toggleText.innerText = '';
    }
}

function copyWalletAddress() {
    var copyText = document.getElementById("walletAddress");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Đã sao chép");
}

// referrals 
function copyReferralLink(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Đã sao chép liên kết !");
}


