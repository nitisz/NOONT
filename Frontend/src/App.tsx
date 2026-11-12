
import {
  LayoutDashboard,
  FolderOpen,
  Clock3,
  Star,
  Plus,
  Search,
  Bell,
  Settings,
  ChevronDown,
  MoreHorizontal,
  Workflow,
  Network,
  Database,
  GitBranch,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

import { Link, Routes, Route } from 'react-router-dom'
import DiagramEditor from './pages/DiagramEditor'
import './App.css'

const categories = [
  { name: 'Flowcharts', count: '12 templates', icon: Workflow },
  { name: 'UML Diagrams', count: '18 templates', icon: Network },
  { name: 'Data Flow', count: '8 templates', icon: GitBranch },
  { name: 'ER Diagrams', count: '10 templates', icon: Database },
]

const projects = [
  {
    name: 'System Architecture',
    type: 'UML Diagram',
    updated: '2 hours ago',
    icon: Network,
  },
  {
    name: 'E-commerce Workflow',
    type: 'Flowchart',
    updated: 'Yesterday',
    icon: Workflow,
  },
  {
    name: 'Database Design',
    type: 'ER Diagram',
    updated: '2 days ago',
    icon: Database,
  },
]

function Dashboard() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <div className="brand-icon">N</div>
          <span>NOONT</span>
        </Link>

        <button className="workspace">
          <div className="workspace-avatar">N</div>
          <div className="workspace-info">
            <strong>My Workspace</strong>
            <small>Free plan</small>
          </div>
          <ChevronDown size={16} />
        </button>

        <div className="side-label">WORKSPACE</div>

        <nav className="navigation">
          <Link className="nav-item active" to="/">
            <LayoutDashboard size={18} /> Overview
          </Link>

          <button className="nav-item" type="button">
            <FolderOpen size={18} /> All diagrams
          </button>

          <button className="nav-item" type="button">
            <Clock3 size={18} /> Recent
          </button>

          <button className="nav-item" type="button">
            <Star size={18} /> Favorites
          </button>
        </nav>

        <div className="side-label category-label">
          DIAGRAM TYPES
        </div>

        <nav className="navigation">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <button
                className="nav-item"
                type="button"
                key={category.name}
              >
                <Icon size={18} />
                {category.name}
              </button>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <Sparkles size={19} />
            <strong>Unlock your creativity</strong>
            <p>
              Upgrade your workspace for more possibilities.
            </p>
            <button type="button">
              Explore plans <ArrowUpRight size={14} />
            </button>
          </div>

          <button className="nav-item" type="button">
            <Settings size={18} /> Settings
          </button>

          <div className="profile">
            <div className="profile-avatar">N</div>

            <div>
              <strong>N I T I S</strong>
              <small>Personal account</small>
            </div>

            <MoreHorizontal size={19} />
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> <strong>Overview</strong>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} />
              <input placeholder="Search diagrams..." />
              <kbd>⌘ K</kbd>
            </label>

            <button className="icon-button" type="button">
              <Bell size={19} />
            </button>

            <div className="top-avatar">N</div>
          </div>
        </header>

        <div className="dashboard">
          <section className="welcome-section">
            <div>
              <div className="eyebrow">
                <Sparkles size={14} />
                YOUR CREATIVE WORKSPACE
              </div>

              <h1>
                Make ideas <span>visible.</span>
              </h1>

              <p>
                Design, organize and connect your ideas with NOONT.
              </p>
            </div>

            {/* Only this button navigates to the editor */}
            <Link to="/editor" className="primary-button">
              <Plus size={19} />
              Create new diagram
            </Link>
          </section>

          <section className="hero-banner">
            <div className="hero-copy">
              <div className="hero-tag">INTRODUCING NOONT</div>

              <h2>
                Think bigger.
                <br />
                Build <span>visually.</span>
              </h2>

              <p>
                Turn complex thoughts into clear, beautiful diagrams.
                Your next great idea starts here.
              </p>

              <button className="hero-button" type="button">
                Explore workspace
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="hero-art">
              <div className="art-glow" />

              <div className="diagram-card card-one">
                START <ArrowUpRight size={13} />
              </div>

              <div className="diagram-line line-one" />

              <div className="diagram-card card-two">
                <Workflow size={17} /> Process
              </div>

              <div className="diagram-line line-two" />

              <div className="diagram-card card-three">
                <Database size={17} /> Database
              </div>

              <div className="diagram-line line-three" />

              <div className="diagram-card card-four">
                SUCCESS <Sparkles size={13} />
              </div>

              <div className="floating-node node-one" />
              <div className="floating-node node-two" />
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <h2>Start with a template</h2>
                <p>
                  Choose a diagram type and bring your ideas to life.
                </p>
              </div>

              <button className="text-button" type="button">
                View all <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="category-grid">
              {categories.map((category) => {
                const Icon = category.icon

                return (
                  <button
                    type="button"
                    className="category-card"
                    key={category.name}
                  >
                    <div className="category-icon">
                      <Icon size={22} />
                    </div>

                    <strong>{category.name}</strong>
                    <small>{category.count}</small>

                    <ArrowUpRight
                      className="category-arrow"
                      size={17}
                    />
                  </button>
                )
              })}
            </div>
          </section>

          <section className="section-block recent-section">
            <div className="section-heading">
              <div>
                <h2>Recent diagrams</h2>
                <p>Pick up where you left off.</p>
              </div>

              <button className="text-button" type="button">
                See all <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon

                return (
                  <article
                    className="project-card"
                    key={project.name}
                  >
                    <div className="project-preview">
                      <div className="preview-node preview-start" />
                      <div className="preview-connector" />

                      <div className="preview-node preview-middle">
                        <Icon size={18} />
                      </div>

                      <div className="preview-connector" />
                      <div className="preview-node preview-end" />
                    </div>

                    <div className="project-details">
                      <div>
                        <strong>{project.name}</strong>

                        <small>
                          {project.type} · {project.updated}
                        </small>
                      </div>

                      <button className="icon-button" type="button">
                        <MoreHorizontal size={19} />
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          <footer className="footer">
            <span>© 2026 NOONT. Make ideas visible.</span>
            <span>Designed for thinkers and builders.</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/editor" element={<DiagramEditor />} />
    </Routes>
  )
}

export default App
