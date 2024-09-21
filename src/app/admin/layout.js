// Example: admin/layout.js
'use client'
import './assets/js/layout.js';
import './assets/js/plugins.js';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.min.css';
import './assets/css/app.min.css'
import './assets/css/icons.min.css'

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      {/* <header>Admin Header</header> */}
      <main>{children}</main>
      {/* <footer>Admin Footer</footer> */}
    </div>
  );
}
