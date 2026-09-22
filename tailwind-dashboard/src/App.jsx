import { useState } from "react";

const navigation = [
  { name: "Dashboard", icon: "📊" },
  { name: "Analytics", icon: "📈" },
  { name: "Products", icon: "📦" },
  { name: "Orders", icon: "🛒" },
  { name: "Settings", icon: "⚙️" },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$24,780",
    change: "+12.5%",
    icon: "💰",
  },
  {
    title: "Total Orders",
    value: "1,429",
    change: "+8.2%",
    icon: "🛒",
  },
  {
    title: "Total Customers",
    value: "8,549",
    change: "+14.3%",
    icon: "👥",
  },
  {
    title: "Total Products",
    value: "356",
    change: "+5.7%",
    icon: "📦",
  },
];

const activities = [
  {
    title: "New order received",
    description: "Order #ORD-1024 was placed",
    time: "5 minutes ago",
    icon: "🛒",
  },
  {
    title: "New customer registered",
    description: "Sarah Johnson created an account",
    time: "25 minutes ago",
    icon: "👤",
  },
  {
    title: "Product added",
    description: "Wireless Headphones were added",
    time: "1 hour ago",
    icon: "📦",
  },
  {
    title: "Payment received",
    description: "Payment for order #ORD-1018 completed",
    time: "2 hours ago",
    icon: "💳",
  },
];

const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$89",
    stock: 42,
  },
  {
    name: "Smart Watch",
    category: "Wearables",
    price: "$129",
    stock: 28,
  },
  {
    name: "Running Shoes",
    category: "Fashion",
    price: "$75",
    stock: 64,
  },
  {
    name: "Travel Backpack",
    category: "Accessories",
    price: "$59",
    stock: 35,
  },
];

const orders = [
  {
    id: "#ORD-1024",
    customer: "Sarah Johnson",
    product: "Wireless Headphones",
    amount: "$89",
    status: "Completed",
  },
  {
    id: "#ORD-1023",
    customer: "Michael Smith",
    product: "Smart Watch",
    amount: "$129",
    status: "Processing",
  },
  {
    id: "#ORD-1022",
    customer: "Emma Wilson",
    product: "Running Shoes",
    amount: "$75",
    status: "Completed",
  },
  {
    id: "#ORD-1021",
    customer: "James Brown",
    product: "Travel Backpack",
    amount: "$59",
    status: "Pending",
  },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const handleNavigation = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const renderDashboard = () => (
    <>
      {/* Welcome */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Welcome back, Tahreem! 👋
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-700">
                {stat.icon}
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-green-600">
              {stat.change}{" "}
              <span className="font-normal text-slate-400">
                from last month
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Performance + Quick Actions */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Performance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Monthly Performance
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Your business performance this month
              </p>
            </div>

            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
              This Month
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Sales
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  85%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                <div className="h-2 w-[85%] rounded-full bg-blue-600"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Customers
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  72%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                <div className="h-2 w-[72%] rounded-full bg-purple-600"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Orders
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  64%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                <div className="h-2 w-[64%] rounded-full bg-green-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Quick Actions
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Quickly access common dashboard actions.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-700"
            >
              <div className="text-2xl">📊</div>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                View Report
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                See dashboard report
              </p>
            </button>

            <button
              onClick={() => handleNavigation("Products")}
              className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-purple-400 hover:bg-purple-50 dark:border-slate-700 dark:hover:bg-slate-700"
            >
              <div className="text-2xl">➕</div>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                Add Product
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Manage your products
              </p>
            </button>

            <button
              onClick={() => handleNavigation("Settings")}
              className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-green-400 hover:bg-green-50 dark:border-slate-700 dark:hover:bg-slate-700"
            >
              <div className="text-2xl">⚙️</div>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                Settings
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Manage preferences
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Recent Activity
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest updates from your business
            </p>
          </div>

          <button
            onClick={() => handleNavigation("Orders")}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View Details →
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center gap-4 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-700">
                {activity.icon}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {activity.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {activity.description}
                </p>
              </div>

              <span className="hidden text-xs text-slate-400 sm:block">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderAnalytics = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Monitor your business performance and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Revenue Overview
          </h3>

          <div className="mt-8 flex h-56 items-end justify-around gap-3">
            {[45, 65, 52, 78, 62, 88, 72, 95, 80, 70, 85, 92].map(
              (height, index) => (
                <div
                  key={index}
                  className="group flex h-full flex-1 items-end"
                >
                  <div
                    className="w-full rounded-t-lg bg-blue-600 transition hover:opacity-80"
                    style={{ height: `${height}%` }}
                    title={`Month ${index + 1}: ${height}%`}
                  ></div>
                </div>
              )
            )}
          </div>

          <div className="mt-4 flex justify-between text-xs text-slate-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>Jun</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Performance Summary
          </h3>

          <div className="mt-6 space-y-5">
            {[
              ["Revenue Growth", "92%"],
              ["Customer Growth", "78%"],
              ["Order Completion", "86%"],
              ["Product Sales", "74%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">
                    {label}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {value}
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-purple-600"
                    style={{ width: value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Products
          </h2>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Manage your product inventory.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex h-32 items-center justify-center rounded-xl bg-slate-100 text-5xl dark:bg-slate-700">
              📦
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-blue-600">
              {product.category}
            </p>

            <h3 className="mt-1 font-bold text-slate-900 dark:text-white">
              {product.name}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {product.price}
              </span>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                {product.stock} in stock
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Orders
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          View and manage recent customer orders.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Order
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Customer
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Product
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Amount
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="transition hover:bg-slate-50 dark:hover:bg-slate-700/30"
                >
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    {order.product}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                    {order.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage your dashboard preferences.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Appearance
          </h3>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                Dark Mode
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Change the dashboard appearance.
              </p>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative h-7 w-12 rounded-full transition ${
                darkMode ? "bg-blue-600" : "bg-slate-300"
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  darkMode ? "left-6" : "left-1"
                }`}
              ></span>
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Account Information
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                value="Tahreem Meer"
                readOnly
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Role
              </label>
              <input
                type="text"
                value="Frontend Developer"
                readOnly
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200"
              />
            </div>
          </div>

          <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case "Analytics":
        return renderAnalytics();

      case "Products":
        return renderProducts();

      case "Orders":
        return renderOrders();

      case "Settings":
        return renderSettings();

      default:
        return renderDashboard();
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : ""
      } bg-slate-100 text-slate-900`}
    >
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
        {/* Mobile Navbar */}
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              ☰
            </button>

            <h1 className="text-lg font-bold text-slate-900 dark:text-white">
              Tailwind Dashboard
            </h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg p-2 text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <aside
              className="h-full w-72 bg-white p-5 shadow-xl dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Dashboard
                </h2>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-lg p-2 text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.name)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                      activePage === item.name
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:block dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-full flex-col p-5">
            <div className="mb-10">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                Tailwind Dashboard
              </h1>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Modern Admin Panel
              </p>
            </div>

            <nav className="flex-1 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    activePage === item.name
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <span>{darkMode ? "☀️" : "🌙"}</span>
              <span className="font-medium">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-64">
          {/* Header */}
          <header className="hidden h-20 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900 lg:flex">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Dashboard / {activePage}
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  TM
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Tahreem Meer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Frontend Developer
                  </p>
                </div>

                <span className="text-slate-400">⌄</span>
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-14 z-50 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-800"
                >
                  <button
                    role="menuitem"
                    onClick={() => {
                      setDropdownOpen(false);
                      setActivePage("Settings");
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    👤 Profile
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => {
                      setDropdownOpen(false);
                      setActivePage("Settings");
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    ⚙️ Settings
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 sm:p-6 lg:p-8">{renderPage()}</div>
        </main>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setModalOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="report-title"
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h2
                  id="report-title"
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  Dashboard Report
                </h2>

                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg p-2 text-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
                  aria-label="Close report"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Active Users
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                    2,849
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly Growth
                  </p>
                  <p className="mt-1 text-2xl font-bold text-green-600">
                    +18.4%
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Conversion Rate
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                    7.8%
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Close Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;