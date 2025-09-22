import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, Search, Calendar, Clock, BarChart2, ChevronRight, Download, Dumbbell, Target, Crown, Skull } from 'lucide-react'

const SessionHistory = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  // Datos de ejemplo para las sesiones
  const sessions = [
    {
      id: 1,
      type: 'rookie',
      name: 'Rookie Zone',
      description: 'Primer contacto con cliente potencial',
      date: '22/09/2025',
      duration: '15 min',
      score: 8.5,
      metrics: {
        empatía: 9.0,
        escuchaActiva: 8.5,
        calificación: 8.0
      },
      icon: <Dumbbell className="h-5 w-5" />,
      color: 'bg-primary'
    },
    {
      id: 2,
      type: 'pitch',
      name: 'Pitch Arena',
      description: 'Presentación de producto SaaS',
      date: '21/09/2025',
      duration: '22 min',
      score: 7.8,
      metrics: {
        claridad: 8.0,
        persuasión: 7.5,
        manejoObjeciones: 8.0
      },
      icon: <Target className="h-5 w-5" />,
      color: 'bg-secondary'
    },
    {
      id: 3,
      type: 'battle',
      name: 'Battle Mode',
      description: 'Negociación de precio con cliente corporativo',
      date: '20/09/2025',
      duration: '18 min',
      score: 8.2,
      metrics: {
        negociación: 8.5,
        resoluciónProblemas: 8.0,
        cierre: 8.0
      },
      icon: <Crown className="h-5 w-5" />,
      color: 'bg-[#FB923C]'
    },
    {
      id: 4,
      type: 'boss',
      name: 'Boss Fight',
      description: 'Cliente difícil con múltiples objeciones',
      date: '18/09/2025',
      duration: '25 min',
      score: 7.2,
      metrics: {
        resiliencia: 7.5,
        adaptabilidad: 7.0,
        cierreAvanzado: 7.0
      },
      icon: <Skull className="h-5 w-5" />,
      color: 'bg-[#FACC15]'
    },
    {
      id: 5,
      type: 'rookie',
      name: 'Rookie Zone',
      description: 'Calificación de lead inbound',
      date: '17/09/2025',
      duration: '12 min',
      score: 8.8,
      metrics: {
        empatía: 9.0,
        escuchaActiva: 9.0,
        calificación: 8.5
      },
      icon: <Dumbbell className="h-5 w-5" />,
      color: 'bg-primary'
    }
  ]

  // Filtrar sesiones por búsqueda y tipo
  const filteredSessions = sessions.filter(session => {
    const matchesSearch = 
      session.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'all' || session.type === filterType;
    
    return matchesSearch && matchesType;
  })

  // Función para renderizar las métricas de una sesión
  const renderMetrics = (metrics) => {
    return (
      <div className="space-y-3">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span>{value.toFixed(1)}</span>
            </div>
            <Progress value={value * 10} className="h-1" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/dashboard')}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <img 
              src={robotLogo} 
              alt="SalesGym AI Robot" 
              className="w-8 h-8 object-contain mr-3" 
            />
            
            <h1 className="text-xl font-bold">Historial de Sesiones</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar sesiones..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tipos</SelectItem>
              <SelectItem value="rookie">Rookie Zone</SelectItem>
              <SelectItem value="pitch">Pitch Arena</SelectItem>
              <SelectItem value="battle">Battle Mode</SelectItem>
              <SelectItem value="boss">Boss Fight</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sessions List */}
        <div className="space-y-6">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`${session.color} p-2 rounded-md mr-3`}>
                      {session.icon}
                    </div>
                    <div>
                      <CardTitle>{session.name}</CardTitle>
                      <CardDescription className="text-foreground/80">
                        {session.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {session.score.toFixed(1)}/10
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart2 className="h-4 w-4 mr-2" />
                    <span>Puntuación: {session.score.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-medium mb-3">Métricas de Rendimiento</h4>
                  {renderMetrics(session.metrics)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-border pt-4">
                <Button variant="outline" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar Informe
                </Button>
                <Button className="flex items-center">
                  Ver Detalles
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <BarChart2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No se encontraron sesiones</h3>
              <p className="text-muted-foreground">
                No hay sesiones que coincidan con tu búsqueda o filtros.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SalesGym AI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default SessionHistory
