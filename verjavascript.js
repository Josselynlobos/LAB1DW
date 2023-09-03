/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
    const passwordToggle = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('input[type="password"]');
    
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});

    function redirigirSegunRol() {
        var selectedRole = document.querySelector('input[name="role"]:checked').value;

        if (selectedRole === "student") {
            window.location.href = "ingresar.html";
        } else if (selectedRole === "teacher") {
            window.location.href = "profrurl.html";
        }
    }



