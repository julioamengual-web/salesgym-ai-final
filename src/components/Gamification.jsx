import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, Trophy, Medal, Star, Zap, Target, Flame, Award, TrendingUp } from 'lucide-react'

const Gamification = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('ranks')

  // Datos de ejemplo para los rangos
  const ranks = [
    {
      id: 'rookie',
      name: 'Rookie',
      description: 'Primeros pasos en el mundo de las ventas',
      progress: 100,
      achieved: true,
      icon: <Zap className="h-5 w-5" />,
      color: 'bg-primary'
    },
    {
      id: 'closer',
      name: 'Closer',
      description: 'Dominio de técnicas básicas de cierre',
      progress: 65,
      achieved: false,
      icon: <Target className="h-5 w-5" />,
      color: 'bg-secondary'
    },
    {
      id: 'negotiator',
      name: 'Negotiator',
      description: 'Experto en manejo de objeciones y negociación',
      progress: 20,
      achieved: false,
      icon: <Flame className="h-5 w-5" />,
      color: 'bg-[#FB923C]'
    },
    {
      id: 'champion',
      name: 'Sales Champion',
      description: 'Maestro de todas las disciplinas de ventas',
      progress: 5,
      achieved: false,
      icon: <Award className="h-5 w-5" />,
      color: 'bg-[#FACC15]'
    }
  ]

  // Datos de ejemplo para los logros
  const achievements = [
    {
      id: 1,
      name: 'First Contact',
      description: 'Completa tu primera sesión de entrenamiento',
      progress: 100,
      achieved: true,
      icon: <Star className="h-5 w-5" />
    },
    {
      id: 2,
      name: 'Consistent Athlete',
      description: 'Completa 5 sesiones de entrenamiento',
      progress: 80,
      achieved: false,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 3,
      name: 'Pitch Master',
      description: 'Obtén una puntuación perfecta en Pitch Arena',
      progress: 40,
      achieved: false,
      icon: <Target className="h-5 w-5" />
    },
    {
      id: 4,
      name: 'Objection Crusher',
      description: 'Maneja exitosamente 20 objeciones difíciles',
      progress: 30,
      achieved: false,
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 5,
      name: 'Knowledge Seeker',
      description: 'Descarga 10 recursos de la biblioteca',
      progress: 20,
      achieved: false,
      icon: <Award className="h-5 w-5" />
    },
    {
      id: 6,
      name: 'Boss Slayer',
      description: 'Vence al cliente más difícil en Boss Fight',
      progress: 0,
      achieved: false,
      icon: <Trophy className="h-5 w-5" />
    }
  ]

  // Datos de ejemplo para los PRs (Personal Records)
  const personalRecords = [
    {
      id: 1,
      name: 'Mejor puntuación en Rookie Zone',
      value: '9.2/10',
      date: '15/09/2025',
      icon: <Medal className="h-5 w-5" />
    },
    {
      id: 2,
      name: 'Sesión más larga',
      value: '32 minutos',
      date: '18/09/2025',
      icon: <Medal className="h-5 w-5" />
    },
    {
      id: 3,
      name: 'Mayor número de objeciones manejadas',
      value: '8 objeciones',
      date: '20/09/2025',
      icon: <Medal className="h-5 w-5" />
    },
    {
      id: 4,
      name: 'Mejor puntuación en empatía',
      value: '9.8/10',
      date: '21/09/2025',
      icon: <Medal className="h-5 w-5" />
    }
  ]

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
            
            <h1 className="text-xl font-bold">Progreso y Logros</h1>
          </div>
          
          <div className="flex items-center">
            <Badge variant="outline" className="text-[#FACC15] border-[#FACC15]">
              Rank: Rookie
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <Tabs defaultValue="ranks" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="ranks" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              <span>Rangos</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>Logros</span>
            </TabsTrigger>
            <TabsTrigger value="records" className="flex items-center">
              <Medal className="h-4 w-4 mr-2" />
              <span>Records Personales</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ranks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ranks.map((rank) => (
                <Card key={rank.id} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`${rank.color} p-2 rounded-md mr-3`}>
                          {rank.icon}
                        </div>
                        <CardTitle>{rank.name}</CardTitle>
                      </div>
                      {rank.achieved && (
                        <Badge variant="outline" className="bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]">
                          Conseguido
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mb-4">
                      {rank.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{rank.progress}%</span>
                      </div>
                      <Progress value={rank.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-muted p-2 rounded-md mr-3">
                          {achievement.icon}
                        </div>
                        <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      </div>
                      {achievement.achieved && (
                        <Badge variant="outline" className="bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]">
                          Conseguido
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mb-4">
                      {achievement.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="records" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalRecords.map((record) => (
                <Card key={record.id} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <div className="bg-[#FACC15]/10 p-2 rounded-md mr-3">
                        {record.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{record.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Conseguido el {record.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-[#FACC15]">{record.value}</div>
                  </CardContent>
                </Card>
              ))}
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

export default Gamification
