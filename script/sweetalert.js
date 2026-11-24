// ================= Custom Notification =================

function showNotification(title, message, icon = 'success') {

    return Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: 'OK',
        confirmButtonColor: '#16a34a',
        allowOutsideClick: false
    });

}