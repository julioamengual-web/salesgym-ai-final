import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, User, Settings, Bell, Shield, Save, LogOut, Trophy } from 'lucide-react'

const Profile = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')

  // Datos de ejemplo para el perfil
  const profile = {
    name: "Usuario Demo",
    email: "demo@salesgym.ai",
    rank: "Rookie",
    progress: 65,
    nextRank: "Closer",
    joinDate: "15/09/2025",
    completedSessions: 12,
    averageScore: 8.5,
    preferences: {
      notifications: true,
      emailUpdates: false,
      darkMode: true,
      language: "Español"
    }
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
            
            <h1 className="text-xl font-bold">Mi Perfil</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <Card className="bg-card border-border mb-6">
              <CardContent className="pt-6 flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="text-3xl">{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                <p className="text-muted-foreground mb-3">{profile.email}</p>
                
                <Badge variant="outline" className="mb-4 text-[#FACC15] border-[#FACC15]">
                  Rank: {profile.rank}
                </Badge>
                
                <div className="w-full space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progreso hacia {profile.nextRank}</span>
                    <span>{profile.progress}%</span>
                  </div>
                  <Progress value={profile.progress} className="h-2" />
                </div>
                
                <div className="w-full grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{profile.completedSessions}</p>
                    <p className="text-sm text-muted-foreground">Sesiones</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">{profile.averageScore}</p>
                    <p className="text-sm text-muted-foreground">Puntuación</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border pt-4">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center text-destructive hover:text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Logros Recientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">First Contact</p>
                      <p className="text-sm text-muted-foreground">Completaste tu primera sesión</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-secondary/10 p-2 rounded-md mr-3">
                      <Trophy className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Quick Learner</p>
                      <p className="text-sm text-muted-foreground">5 sesiones en una semana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate('/gamification')}
                >
                  Ver todos los logros
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="profile" className="mb-8" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="profile" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Perfil</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Preferencias</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Seguridad</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>
                      Actualiza tu información personal y de contacto
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" defaultValue="Usuario" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" defaultValue="Demo" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={profile.email} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nombre de tu empresa" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="role">Puesto</Label>
                      <Input id="role" placeholder="Tu puesto o rol" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía</Label>
                      <Input id="bio" placeholder="Cuéntanos sobre ti..." />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Áreas de Interés</CardTitle>
                    <CardDescription>
                      Selecciona las áreas de ventas que más te interesan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="prospecting" defaultChecked />
                        <Label htmlFor="prospecting">Prospección</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="pitching" defaultChecked />
                        <Label htmlFor="pitching">Presentación</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="objections" defaultChecked />
                        <Label htmlFor="objections">Manejo de Objeciones</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="closing" />
                        <Label htmlFor="closing">Cierre</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="negotiation" />
                        <Label htmlFor="negotiation">Negociación</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="followup" />
                        <Label htmlFor="followup">Seguimiento</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Preferencias de Notificaciones</CardTitle>
                    <CardDescription>
                      Configura cómo y cuándo quieres recibir notificaciones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notifications">Notificaciones en la aplicación</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones sobre nuevos eventos y actualizaciones
                        </p>
                      </div>
                      <Switch 
                        id="notifications" 
                        defaultChecked={profile.preferences.notifications} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="emailUpdates">Actualizaciones por email</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe emails sobre nuevos recursos y eventos
                        </p>
                      </div>
                      <Switch 
                        id="emailUpdates" 
                        defaultChecked={profile.preferences.emailUpdates} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="darkMode">Modo oscuro</Label>
                        <p className="text-sm text-muted-foreground">
                          Cambia entre modo claro y oscuro
                        </p>
                      </div>
                      <Switch 
                        id="darkMode" 
                        defaultChecked={profile.preferences.darkMode} 
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Preferencias de Entrenamiento</CardTitle>
                    <CardDescription>
                      Personaliza tu experiencia de entrenamiento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="voiceEnabled">Entrenamiento por voz</Label>
                        <p className="text-sm text-muted-foreground">
                          Habilita la interacción por voz durante las sesiones
                        </p>
                      </div>
                      <Switch id="voiceEnabled" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="autoFeedback">Feedback automático</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe feedback en tiempo real durante las sesiones
                        </p>
                      </div>
                      <Switch id="autoFeedback" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="difficulty">Dificultad adaptativa</Label>
                        <p className="text-sm text-muted-foreground">
                          Ajusta automáticamente la dificultad según tu rendimiento
                        </p>
                      </div>
                      <Switch id="difficulty" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Cambiar Contraseña</CardTitle>
                    <CardDescription>
                      Actualiza tu contraseña para mantener tu cuenta segura
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Contraseña Actual</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nueva Contraseña</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Actualizar Contraseña
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Privacidad de Datos</CardTitle>
                    <CardDescription>
                      Gestiona cómo se utilizan tus datos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dataSharing">Compartir datos de rendimiento</Label>
                        <p className="text-sm text-muted-foreground">
                          Permite que tus datos se utilicen para mejorar la plataforma
                        </p>
                      </div>
                      <Switch id="dataSharing" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profileVisibility">Perfil público</Label>
                        <p className="text-sm text-muted-foreground">
                          Permite que otros usuarios vean tu perfil y logros
                        </p>
                      </div>
                      <Switch id="profileVisibility" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4">
                    <Button className="gradient-blue-violet ml-auto flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
                    <CardDescription>
                      Acciones irreversibles para tu cuenta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estas acciones son permanentes y no se pueden deshacer. Por favor, procede con precaución.
                    </p>
                    <Button variant="destructive" className="w-full">
                      Eliminar Cuenta
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
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

export default Profile
