import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos para las áreas de entrenamiento
import { Dumbbell, Target, Crown, Skull, BookOpen, Users, History, Trophy, User } from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('training')

  // Datos de ejemplo para las estadísticas
  const stats = {
    sessionsCompleted: 12,
    averageScore: 8.5,
    totalTime: '4.2h',
    rank: 'Pro'
  }

  // Datos de ejemplo para las áreas de entrenamiento
  const trainingAreas = [
    {
      id: 'rookie',
      name: 'Rookie Zone',
      description: 'Primer contacto con clientes potenciales. Aprende a generar interés y calificar prospectos.',
      difficulty: 1,
      icon: <Dumbbell className="h-6 w-6" />,
      color: 'bg-primary'
    },
    {
      id: 'pitch',
      name: 'Pitch Arena',
      description: 'Demostración de producto y presentación de valor. Perfecciona tu discurso de ventas.',
      difficulty: 2,
      icon: <Target className="h-6 w-6" />,
      color: 'bg-secondary'
    },
    {
      id: 'battle',
      name: 'Battle Mode',
      description: 'Negociación avanzada y manejo de objeciones. Aprende a defender el valor de tu propuesta.',
      difficulty: 3,
      icon: <Crown className="h-6 w-6" />,
      color: 'bg-[#FB923C]'
    },
    {
      id: 'boss',
      name: 'Boss Fight',
      description: 'Clientes difíciles y situaciones de alta presión. Domina el arte del cierre en condiciones adversas.',
      difficulty: 3,
      icon: <Skull className="h-6 w-6" />,
      color: 'bg-[#FACC15]'
    }
  ]

  // Función para renderizar los indicadores de dificultad
  const renderDifficulty = (level) => {
    return (
      <div className="flex items-center">
        <span className="text-xs text-muted-foreground mr-2">Dificultad:</span>
        <div className="flex">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full mx-0.5 ${i < level ? 'bg-[#FB923C]' : 'bg-muted'}`}
            />
          ))}
        </div>
      </div>
    )
  }

  // Función para navegar a un escenario de entrenamiento
  const startTraining = (areaId) => {
    navigate(`/roleplay/${areaId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={robotLogo} 
              alt="SalesGym AI Robot" 
              className="w-10 h-10 object-contain mr-3" 
            />
            <h1 className="text-xl font-bold gradient-blue-violet text-gradient">SalesGym AI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/profile')}
              className="flex items-center"
            >
              <User className="h-5 w-5 mr-2" />
              <span>Mi Perfil</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">¡Bienvenido a tu entrenamiento!</h2>
              <p className="text-muted-foreground">
                Continúa mejorando tus habilidades de ventas con SalesGym AI
              </p>
            </div>
            <Badge variant="outline" className="text-[#FACC15] border-[#FACC15]">
              Rank: {stats.rank}
            </Badge>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Sesiones Completadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.sessionsCompleted}</div>
              <Progress value={75} className="h-2 mt-2" />
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Puntuación Promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.averageScore}</div>
              <Progress value={85} className="h-2 mt-2" />
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Tiempo Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#FB923C]">{stats.totalTime}</div>
              <Progress value={42} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </section>

        {/* Tabs */}
        <Tabs defaultValue="training" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="training" className="flex items-center">
              <Dumbbell className="h-4 w-4 mr-2" />
              <span>Entrenamiento</span>
            </TabsTrigger>
            <TabsTrigger value="library" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Biblioteca</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Comunidad</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              <span>Progreso</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="training" className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Áreas de Entrenamiento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingAreas.map((area) => (
                <Card key={area.id} className="bg-card border-border card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`${area.color} p-2 rounded-md mr-3`}>
                          {area.icon}
                        </div>
                        <CardTitle>{area.name}</CardTitle>
                      </div>
                      {renderDifficulty(area.difficulty)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 min-h-[60px]">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full gradient-blue-violet"
                      onClick={() => startTraining(area.id)}
                    >
                      Iniciar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="library">
            <div className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">Biblioteca de Recursos</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                Accede a documentos, guiones y materiales para mejorar tus habilidades de ventas.
              </p>
              <Button onClick={() => navigate('/library')}>
                Explorar Biblioteca
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="community">
            <div className="flex flex-col items-center justify-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">Comunidad de Ventas</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                Conecta con otros profesionales de ventas, comparte experiencias y aprende juntos.
              </p>
              <Button onClick={() => navigate('/community')}>
                Unirse a la Comunidad
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <div className="flex flex-col items-center justify-center py-12">
              <Trophy className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">Tu Progreso</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                Revisa tu historial de sesiones, logros y estadísticas detalladas.
              </p>
              <div className="flex space-x-4">
                <Button onClick={() => navigate('/history')}>
                  Ver Historial
                </Button>
                <Button onClick={() => navigate('/gamification')} variant="outline">
                  Ver Logros
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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

export default Dashboard
