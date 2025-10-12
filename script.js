// Seleccionamos elementos
// Enviar datos de login al backend
document.querySelector('.form-box.login form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  try {
    const res = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'login', email, password })
    });
    if (res.ok) {
      alert('Datos enviados correctamente');
      this.reset();
    } else {
      alert('Error al enviar los datos');
    }
  } catch {
    alert('No se pudo conectar con el servidor');
  }
});

// Enviar datos de registro al backend
document.querySelector('.form-box.register form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  try {
    const res = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'register', username, email, password })
    });
    if (res.ok) {
      alert('Datos enviados correctamente');
      this.reset();
    } else {
      alert('Error al enviar los datos');
    }
  } catch {
    alert('No se pudo conectar con el servidor');
  }
});
const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

// Abrir popup en Login
loginBtn.addEventListener('click', () => {
    wrapper.style.display = 'flex';      // Mostrar overlay
    loginForm.style.display = 'block';   // Mostrar login
    registerForm.style.display = 'none'; // Ocultar register
});

// Cerrar popup
closeBtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

// Cambiar a Register
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Cambiar a Login
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Navegación entre pestañas
const navLinks = document.querySelectorAll('.navigation a');
const sections = {
    Home: document.createElement('section'),
    About: document.createElement('section'),
    Services: document.createElement('section'),
    Contact: document.createElement('section'),
    Reservaciones: document.createElement('section')
};

sections.Home.innerHTML = `
  <div style="max-width:600px;margin:40px auto;padding:32px 24px;background:rgba(255,255,255,0.85);border-radius:18px;box-shadow:0 4px 24px rgba(0,0,0,0.12);">
    <h1 style="color:#e75480;text-align:center;font-size:2.8em;font-weight:900;letter-spacing:2px;margin-bottom:10px;text-shadow:0 2px 12px #fff,0 4px 24px #e7548055;">Gabys Style</h1>
    <h2 style="color:#e75480;text-align:center;margin-bottom:18px;">Bienvenida a Gabys Style</h2>
    <p style="font-size:1.15em;color:#444;margin-bottom:24px;text-align:center;">
      Descubre nuestros servicios de belleza profesional en Orlando. Especialistas en:
    </p>
    <ul style="font-size:1.1em;color:#e75480;line-height:2;margin-bottom:24px;">
      <li>Extensiones de pestañas</li>
      <li>Diseño y pigmentación de cejas</li>
      <li>Maquillaje y perfilado de labios</li>
    </ul>
    <p style="color:#888;text-align:center;">Desplázate hacia abajo para conocer más sobre nuestro trabajo y ver ejemplos.</p>
  </div>
`;
sections.About.innerHTML = '<h2>Sobre Nosotros</h2><p>Información sobre Gaby\'s Style.</p>';
sections.Services.innerHTML = '<h2>Servicios</h2><p>Lista de servicios ofrecidos.</p>';
sections.Contact.innerHTML = `
    <div class="contact-bg">
      <div class="contact-content">
        <h2>Contacto</h2>
        <ul style="list-style:none;padding:0;font-size:1.1em;line-height:2;">
          <li>📍 <b>Ubicación:</b> Orlando, FL – Servicios a domicilio</li>
          <li>📞 <b>Teléfono / WhatsApp:</b> <a href='tel:3216626266' style='color:#e75480;text-decoration:none;'>3216626266</a></li>
          <li>📧 <b>Correo:</b> <a href='mailto:gabysstylellc24@gmail.com' style='color:#e75480;text-decoration:none;'>gabysstylellc24@gmail.com</a></li>
          <li>📲 <b>Instagram:</b> <a href="https://www.instagram.com/style_gaby_cora/" target="_blank" style="color:#e75480;font-weight:bold;text-decoration:none;">
            <ion-icon name="logo-instagram" style="font-size:1.3em;vertical-align:middle;"></ion-icon> @gabysstyle
          </a></li>
          <li>📲 <b>Facebook:</b> <a href="https://facebook.com/gabysstyle" target="_blank" style="color:#e75480;font-weight:bold;text-decoration:none;">
            <ion-icon name="logo-facebook" style="font-size:1.3em;vertical-align:middle;"></ion-icon> Gabys Style
          </a></li>
        </ul>
        <div style="margin:20px 0; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.12);">
          <iframe src="https://www.google.com/maps?q=Orlando,+FL,+USA&output=embed" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p style="color:#888;font-size:0.95em;">Trabajo a domicilio en Orlando y alrededores.</p>
      </div>
    </div>
`;

// Elimino la sección Reservaciones y el link del menú
if (document.querySelector('.reservations-link')) {
  document.querySelector('.reservations-link').remove();
}
delete sections.Reservaciones;

// Elimino la sección Reseñas y el link del menú
if (document.querySelector('.reviews-link')) {
  document.querySelector('.reviews-link').remove();
}
delete sections.Resenas;

// Navegación para Reseñas (eliminada, ya que quitamos la sección de reseñas)

// Manejo del formulario de reserva para enviar por correo
setTimeout(() => {
  const reservaForm = document.querySelector('.home-reserva form');
  if (reservaForm) {
    reservaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = this.querySelector('input[type="text"]').value;
      const correo = this.querySelector('input[type="email"]').value;
      const telefono = this.querySelector('input[type="tel"]').value;
      const servicio = this.querySelector('select').value;
      const fecha = this.querySelector('input[type="date"]').value;
      const mailto = `mailto:gabysstylellc24@gmail.com?subject=Reserva%20Gabys%20Style&body=Nombre:%20${encodeURIComponent(nombre)}%0ACorreo:%20${encodeURIComponent(correo)}%0ATeléfono:%20${encodeURIComponent(telefono)}%0AServicio:%20${encodeURIComponent(servicio)}%0AFecha:%20${encodeURIComponent(fecha)}`;
      window.location.href = mailto;
    });
  }
}, 500);

// Manejo del formulario de reseña (solo en el navegador, no guarda en servidor) (eliminado, ya que quitamos la sección de reseñas)

const body = document.body;

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Oculta todos los sections
        Object.values(sections).forEach(sec => sec.style.display = 'none');
        // Muestra el section correspondiente
        const name = link.textContent.trim();
        if (sections[name]) {
            // Si el section no está en el DOM, lo agregamos
            if (!body.contains(sections[name])) {
                body.appendChild(sections[name]);
            }
            sections[name].style.display = 'block';
        }
        // Oculta el login/register si está abierto
        wrapper.style.display = 'none';
    });
});

// Mostrar Home al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    if (!document.body.contains(sections.Home)) {
        document.body.appendChild(sections.Home);
    }
    sections.Home.style.display = 'block';
});

const reservationLinks = document.querySelectorAll('.reservations-link, a[href="#"]');
reservationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Para reservar, por favor contacta vía WhatsApp o llamada al 3216626266.');
    });
});

// Controla si el usuario está logueado
let userLoggedIn = false;

// Abre reservas con servicio preseleccionado
function openServiceReservation(serviceType) {
    if (!userLoggedIn) {
        alert('Por favor, inicia sesión o regístrate para hacer una reservación.');
        return;
    }
}

// Simula login/registro exitoso
function simulateLogin() {
    userLoggedIn = true;
    alert('Login exitoso. Ahora puedes hacer reservaciones.');
    wrapper.style.display = 'none';
} {
    if (!userLoggedIn) {
        alert('Por favor, inicia sesión o regístrate para hacer una reservación.');
    }
}

function simulateRegister() {
    userLoggedIn = true;
    alert('Registro exitoso. Ahora puedes hacer reservaciones.');
    wrapper.style.display = 'none';
}



