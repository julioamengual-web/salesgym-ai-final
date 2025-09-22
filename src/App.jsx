import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './App.css'

// Importar componentes
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import RolePlay from './components/RolePlay'
import Library from './components/Library'
import Community from './components/Community'
import SessionHistory from './components/SessionHistory'
import Gamification from './components/Gamification'
import Onboarding from './components/Onboarding'
import Profile from './components/Profile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(true)

  // Función para simular el login
  const handleLogin = (credentials) => {
    console.log('Login with:', credentials)
    // Simulamos autenticación exitosa
    setIsAuthenticated(true)
    // Para nuevos usuarios, mostrar onboarding
    setShowOnboarding(true)
  }

  // Función para completar el onboarding
  const completeOnboarding = () => {
    setShowOnboarding(false)
  }

  return (
    <Router>
      <Routes>
        {/* Ruta pública - Login */}
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />

        {/* Ruta de onboarding - Solo para usuarios nuevos */}
        <Route 
          path="/onboarding" 
          element={
            isAuthenticated && showOnboarding ? (
              <Onboarding onComplete={completeOnboarding} />
            ) : (
              <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
            )
          } 
        />

        {/* Rutas protegidas - Requieren autenticación */}
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/roleplay/:scenarioId" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <RolePlay />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/library" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <Library />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/community" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <Community />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/history" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <SessionHistory />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/gamification" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <Gamification />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/profile" 
          element={
            isAuthenticated ? (
              showOnboarding ? <Navigate to="/onboarding" replace /> : <Profile />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        {/* Ruta por defecto - Redirige a login o dashboard según autenticación */}
        <Route 
          path="*" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
